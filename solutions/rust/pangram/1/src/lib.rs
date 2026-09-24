/// Determine whether a sentence is a pangram.
pub fn is_pangram(sentence: &str) -> bool {
    let lower_sentence = sentence.to_lowercase();
    
    ('a'..='z').all(|c| lower_sentence.contains(c))
}
