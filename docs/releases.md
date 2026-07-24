# Releases

ShamooTS and ShamooRuntime release candidates use one synchronized tag. All
public `@shamoo/*` packages also use one version, enforced by Changesets and the
release checks.

## Runtime-first release order

1. Prepare, review, and merge ShamooRuntime first. Its release build uses
   `projectVersion=0.1.0-rc.1`, while compatibility negotiation exposes the
   stable `0.1.0` base required by the default `^0.1.0` descriptor range.
2. Create and push `v0.1.0-rc.1` from the merged ShamooRuntime `main` commit.
3. Wait for the Runtime candidate workflow to succeed, then download and verify
   its checksums and attestations before continuing.
4. Prepare ShamooTS with every public package and embedded tool version set to
   `0.1.0-rc.1`, then run `pnpm contract:check` against the tagged Runtime
   checkout and the repository checks.
5. Merge the ShamooTS release pull request, then create and push the exact same
   `v0.1.0-rc.1` tag from `main`. The candidate workflow rejects noncanonical
   tags, commits outside `main`, and checks out ShamooRuntime at that tag.

Do not create the ShamooTS tag until the matching Runtime prerelease has passed
verification. Later release candidates follow the same process with their exact
synchronized tag.

## Candidate artifacts

The GitHub prerelease and retained Actions artifact contain:

- One npm tarball for every public `@shamoo/*` package.
- `shamoo-v0.1.0-rc.1.spdx.json`, the SPDX JSON software bill of materials.
- `SHA256SUMS`, covering every tarball and the SBOM.

GitHub build-provenance attestations cover the tarballs, SBOM, and checksum
manifest, and artifact-linked SBOM attestations cover every tarball. They are
attached to the workflow run as attestations rather than embedded in the
archive. Runtime binaries are released from ShamooRuntime and are not included
in ShamooTS artifacts. The workflow verifies that all 34 source manifests have
one matching tarball at the candidate version and no unresolved `workspace:`
dependency before publishing all assets through a draft.

## Checksum verification

Use GitHub CLI 2.49.0 or newer. Download all files from the GitHub prerelease
into a new directory, then verify checksums and workflow/tag identity:

```sh
set -eu
TAG=v0.1.0-rc.1
REPO=wasmake/ShamooTS
DEST="$PWD/shamoo-ts-$TAG"
mkdir "$DEST"
gh release download "$TAG" --repo "$REPO" --dir "$DEST"
(cd "$DEST" && sha256sum --check SHA256SUMS)
for artifact in "$DEST"/*.tgz "$DEST"/*.spdx.json "$DEST"/SHA256SUMS; do
  gh attestation verify "$artifact" \
    --repo "$REPO" \
    --signer-workflow "$REPO/.github/workflows/release-candidate.yml" \
    --source-ref "refs/tags/$TAG"
done
for artifact in "$DEST"/*.tgz; do
  gh attestation verify "$artifact" \
    --repo "$REPO" \
    --signer-workflow "$REPO/.github/workflows/release-candidate.yml" \
    --source-ref "refs/tags/$TAG" \
    --predicate-type https://spdx.dev/Document/v2.3
done
```

Do not install a tarball if any checksum is missing or fails.

## Local tarball installation

The package manifests use synchronized `@shamoo/*` ranges. In a separate test
project, install all candidate tarballs together so transitive Shamoo packages
resolve locally:

```sh
pnpm add /absolute/path/to/release/*.tgz
```

The npm equivalent is:

```sh
npm install /absolute/path/to/release/*.tgz
```

After installation, remove unneeded direct packages from the test project's
manifest only after confirming its package manager retains the required
transitive tarball resolutions.

## npm registry status

The release-candidate workflow does not publish to npm. GitHub prerelease
tarballs are the canonical `0.1.0-rc.1` candidate artifacts unless a separate,
deliberate registry publication has occurred. Check a package explicitly before
requesting it from the registry:

```sh
npm view @shamoo/core@0.1.0-rc.1 version
```
