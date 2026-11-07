const std = @import("std");

pub fn isPangram(str: []const u8) bool {
 var seen_letters = std.StaticBitSet(26).empty;


    for (str) |char| {
        if (char >= 'a' and char <= 'z') {
            seen_letters.setValue(char - 'a', true);
        } else if (char >= 'A' and char <= 'Z') {
            seen_letters.setValue(char - 'A', true);
        }
    }

    return seen_letters.count() == 26;
}
