window.SIDEBAR_ITEMS = {"enum":[["DepInfoPathType",""],["FsStatus","Indication of the status on the filesystem for a particular unit."],["LocalFingerprint","A `LocalFingerprint` represents something that we use to detect direct changes to a `Fingerprint`."],["StaleItem",""]],"fn":[["build_script_local_fingerprints","Get ready to compute the `LocalFingerprint` values for a `RunCustomBuild` unit."],["build_script_override_fingerprint","Create a `LocalFingerprint` for an overridden build script. Returns None if it is not overridden."],["calculate","Calculates the fingerprint for a `unit`."],["calculate_normal","Calculate a fingerprint for a “normal” unit, or anything that’s not a build script. This is an internal helper of `calculate`, don’t call directly."],["calculate_run_custom_build","Calculate a fingerprint for an “execute a build script” unit.  This is an internal helper of `calculate`, don’t call directly."],["compare_old_fingerprint",""],["dep_info_loc","Returns the location that the dep-info file will show up at for the `unit` specified."],["find_stale_file",""],["local_fingerprints_deps","Compute the `LocalFingerprint` values for a `RunCustomBuild` unit for non-overridden new-style build scripts only. This is only used when `deps` is already known to have a nonempty `rerun-if-*` somewhere."],["log_compare",""],["parse_dep_info","Parses Cargo’s internal `EncodedDepInfo` structure that was previously serialized to disk."],["parse_rustc_dep_info","Parse the `.d` dep-info file generated by rustc."],["pkg_fingerprint",""],["prepare_init","Prepare for work when a package starts to build"],["prepare_target","Determines if a `unit` is up-to-date, and if not prepares necessary work to update the persisted fingerprint."],["target_root","Returns an absolute path that target directory. All paths are rewritten to be relative to this."],["translate_dep_info","Parses the dep-info file coming out of rustc into a Cargo-specific format."],["write_fingerprint",""]],"struct":[["DepFingerprint","Dependency edge information for fingerprints. This is generated for each dependency and is stored in a `Fingerprint` below."],["EncodedDepInfo",""],["Fingerprint","A fingerprint can be considered to be a “short string” representing the state of a world for a package."],["RustcDepInfo",""]]};