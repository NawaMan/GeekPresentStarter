# Build the decks and run them.  https://just.systems
#
#     just                 list the recipes
#     just dev             dev server, with hot reload
#     just build           build the site into build/
#     just serve-build     build, then serve the built site (faster page turns)
#     just serve           serve the last build again, no rebuild
#     just shell           a shell in the booth
#
# Every recipe runs in this project's booth: the scripts in scripts/ go into the
# booth on their own when you start them from the host. Tests and type-check
# are in scripts/ too (see AGENTS.md).

set positional-arguments := true

# List the recipes.
default:
    @{{ just_executable() }} --list --unsorted

# The dev server, with hot reload. Prints the slides URL.
dev *ARGS:
    @scripts/dev.sh "$@"

# Build the site into build/.
build *ARGS:
    @scripts/build.sh "$@"

# Build, then serve the built site. Present or record from this one. Stop `just dev` first.
serve-build *ARGS:
    @scripts/serve-build.sh "$@"

# Serve the last build as it is, no rebuild. `just serve-build` when the source changed.
serve *ARGS:
    @scripts/serve.sh "$@"

# A shell in this project's booth (from the host only).
shell:
    #!/usr/bin/env bash
    if [ -d /opt/codingbooth ]; then echo "just shell: you are already in the booth." >&2; exit 2; fi
    exec ./booth shell --run --quiet
