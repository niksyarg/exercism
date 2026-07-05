module Anagram
  def self.find(subject : String, candidates : Array(String)) : Array(String)
    subject_lc = subject.downcase
    subject_sorted = subject_lc.chars.sort

    candidates.select do |candidate|
      candidate_lc = candidate.downcase
      
  
      next false if candidate_lc == subject_lc
      
 
      candidate_lc.chars.sort == subject_sorted
    end
  end
end
