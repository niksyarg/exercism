use std::collections::HashMap;
use std::cmp::Ordering;

#[derive(Default)]
struct TeamStats {
    mp: u32, // Matches Played
    w: u32,  // Won
    d: u32,  // Drawn
    l: u32,  // Lost
    p: u32,  // Points
}

pub fn tally(match_results: &str) -> String {
    let mut table = HashMap::new();

    // Разбираем входные данные по строкам
    for line in match_results.lines() {
        if line.is_empty() {
            continue;
        }

        let parts: Vec<&str> = line.split(';').collect();
        if parts.len() != 3 {
            continue; // Пропускаем некорректные строки, если они есть
        }

        let team1 = parts[0];
        let team2 = parts[1];
        let outcome = parts[2];

        let stats1 = table.entry(team1.to_string()).or_insert_with(TeamStats::default);
        stats1.mp += 1;

        let stats2 = table.entry(team2.to_string()).or_insert_with(TeamStats::default);
        stats2.mp += 1;

        match outcome {
            "win" => {
                table.get_mut(team1).unwrap().w += 1;
                table.get_mut(team1).unwrap().p += 3;
                table.get_mut(team2).unwrap().l += 1;
            }
            "loss" => {
                table.get_mut(team1).unwrap().l += 1;
                table.get_mut(team2).unwrap().w += 1;
                table.get_mut(team2).unwrap().p += 3;
            }
            "draw" => {
                table.get_mut(team1).unwrap().d += 1;
                table.get_mut(team1).unwrap().p += 1;
                table.get_mut(team2).unwrap().d += 1;
                table.get_mut(team2).unwrap().p += 1;
            }
            _ => {}
        }
    }

    // Собираем команды в вектор для последующей сортировки
    let mut teams: Vec<(String, TeamStats)> = table.into_iter().collect();

    // Сортировка: сначала по очкам (убывание), при равенстве — по названию (алфавитный порядок)
    teams.sort_by(|a, b| {
        match b.1.p.cmp(&a.1.p) {
            Ordering::Equal => a.0.cmp(&b.0),
            other => other,
        }
    });

    // Формируем итоговую таблицу со строгим выравниванием колонок
    let mut result = String::from("Team                           | MP |  W |  D |  L |  P");
    
    for (name, stats) in teams {
        result.push_str(&format!(
            "\n{:<30} | {:>2} | {:>2} | {:>2} | {:>2} | {:>2}",
            name, stats.mp, stats.w, stats.d, stats.l, stats.p
        ));
    }

    result
}
