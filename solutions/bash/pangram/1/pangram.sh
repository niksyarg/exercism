#!/usr/bin/env bash

main() {
    local input="${1:-}"
    
    # Convert input to lowercase and remove everything except a-z
    local cleaned
    cleaned=$(echo "$input" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z')
    
    # Count unique characters in the cleaned string
    local unique_count
    unique_count=$(echo "$cleaned" | grep -o . | sort -u | wc -l)
    
    if [[ "$unique_count" -eq 26 ]]; then
        echo "true"
    else
        echo "false"
    fi
}

main "$@"
