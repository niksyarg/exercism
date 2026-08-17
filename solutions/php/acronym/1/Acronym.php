<?php

declare(strict_types=1);

function acronym(string $text): string
{
    // 1. Replace hyphens with spaces since they act as word separators
    $textWithSpaces = str_replace('-', ' ', $text);

    // 2. Remove all other punctuation (keep only letters, numbers, and whitespace)
    $cleanedText = preg_replace('/[^a-zA-Z0-9\s]/', '', $textWithSpaces);

    // 3. Find the first letter of each word
    preg_match_all('/\b[a-zA-Z]/', $cleanedText, $matches);

    // 4. Combine the letters and convert them to uppercase
    return strtoupper(implode('', $matches[0]));
}
