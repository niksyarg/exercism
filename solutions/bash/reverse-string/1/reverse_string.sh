#!/usr/bin/env bash

main () {
    local input="$1"
    echo "$input" | rev
}

main "$@"
