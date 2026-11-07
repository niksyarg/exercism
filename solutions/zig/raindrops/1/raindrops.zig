const std = @import("std");

pub fn convert(buffer: []u8, n: u32) []const u8 {
    // Создаем фиксированный writer прямо поверх буфера
    var writer: std.Io.Writer = .fixed(buffer);
    var spoken = false;

    if (n % 3 == 0) {
        writer.print("Pling", .{}) catch unreachable;
        spoken = true;
    }
    if (n % 5 == 0) {
        writer.print("Plang", .{}) catch unreachable;
        spoken = true;
    }
    if (n % 7 == 0) {
        writer.print("Plong", .{}) catch unreachable;
        spoken = true;
    }

    if (!spoken) {
        writer.print("{}", .{n}) catch unreachable;
    }

    // Метод .buffered() возвращает слайс с уже записанными данными
    return writer.buffered();
}

