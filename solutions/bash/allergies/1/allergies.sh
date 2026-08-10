#!/usr/bin/env bash

main() {
    local score=$1
    local action=$2
    local item=$3

    # Ordered list of allergens matching bits 0 to 7 (values 1 to 128)
    local -a allergens=(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats)

    case "$action" in
        "list")
            local list=()
            for i in "${!allergens[@]}"; do
                # Right shift the score by 'i' bits and check if the last bit is 1
                if (( (score >> i) & 1 )); then
                    list+=("${allergens[i]}")
                fi
            done
            # Prints elements separated by spaces
            echo "${list[*]}"
            ;;
            
        "allergic_to")
            for i in "${!allergens[@]}"; do
                if [[ "${allergens[i]}" == "$item" ]]; then
                    if (( (score >> i) & 1 )); then
                        echo "true"
                    else
                        echo "false"
                    fi
                    return 0
                fi
            done
            echo "false"
            ;;
    esac
}

main "$@"
