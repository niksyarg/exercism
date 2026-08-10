#!/usr/bin/env bash

main () {
    local digits="$1"
    local span="$2"

    # Edge case: span = 0 always returns 1
    if [[ "$span" -eq 0 ]]; then
        echo 1
        return 0
    fi

    # Validation: span must not be negative
    if [[ "$span" -lt 0 ]]; then
        echo "span must not be negative" >&2
        exit 1
    fi

    local len=${#digits}

    # Validation: span cannot exceed string length
    if [[ "$span" -gt "$len" ]]; then
        echo "span must not exceed string length" >&2
        exit 1
    fi

    # Validation: digits must contain only numbers (and cannot be empty if span > 0)
    if [[ "$digits" =~ [^0-9] ]]; then
        echo "digits input must only contain digits" >&2
        exit 1
    fi

    local max_product=0

    # Sliding window over the digit string
    for (( i = 0; i <= len - span; i++ )); do
        local current_product=1
        
        for (( j = 0; j < span; j++ )); do
            local digit="${digits:$((i + j)):1}"
            (( current_product *= digit ))
        done

        if (( current_product > max_product )); then
            max_product=$current_product
        fi
    done

    echo "$max_product"
}

main "$@"