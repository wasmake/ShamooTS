# @shamoo/paper-raw

Generated one-to-one contracts and executable descriptors from the pinned canonical Paper model. Use
`paperJava.resolve(JAVA_TYPES[name])` for static calls, `$new` for constructors, and `$invoke`, `$get`,
or `$set` on opaque handles. Calls return promises because Runtime preserves Paper/Folia thread affinity;
live event handles use a bounded origin-thread frame so cancellation completes before native dispatch returns.
