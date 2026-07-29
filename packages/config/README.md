# @shamoo/config

Configuration source and decoder contracts plus `pluginFiles` for Runtime-managed UTF-8 persistence.
Paths must be allowed by the plugin filesystem policy. Runtime seeds missing files from the installed
artifact, stores them outside watched generations, rejects symbolic-link traversal, and limits each
file to 4 MiB.
