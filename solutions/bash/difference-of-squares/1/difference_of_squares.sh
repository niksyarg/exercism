#!/usr/bin/env bash

main() {
    local mode="$1"
    local n="$2"

  
    local square_of_sum=$(( (n * (n + 1) / 2) ** 2 ))
    
    
    local sum_of_squares=$(( n * (n + 1) * (2 * n + 1) / 6 ))

    case "$mode" in
        "square_of_sum")  echo "$square_of_sum" ;;
        "sum_of_squares") echo "$sum_of_squares" ;;
        "difference")     echo "$(( square_of_sum - sum_of_squares ))" ;;
    esac
}

main "$@"
