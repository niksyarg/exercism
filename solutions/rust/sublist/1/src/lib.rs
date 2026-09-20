#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist(first_list: &[i32], second_list: &[i32]) -> Comparison {
    let is_sublist = |a: &[i32], b: &[i32]| -> bool {
        if a.is_empty() {
            return true;
        }
        b.windows(a.len()).any(|window| window == a)
    };

    let len1 = first_list.len();
    let len2 = second_list.len();

    if len1 == len2 && first_list == second_list {
        Comparison::Equal
    } else if len1 < len2 && is_sublist(first_list, second_list) {
        Comparison::Sublist
    } else if len1 > len2 && is_sublist(second_list, first_list) {
        Comparison::Superlist
    } else {
        Comparison::Unequal
    }
}
