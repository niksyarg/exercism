pub fn find(array: &[i32], key: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = array.len();

    while low < high {
        let mid = low + (high - low) / 2;
        
        if array[mid] == key {
            return Some(mid);
        } else if array[mid] > key {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    None
}
