(defun hamming-distance (dna1 dna2)
  "Calculate the Hamming distance between two DNA strands DNA1 and DNA2."
  (if (/= (length dna1) (length dna2))
      (error "Strands must be of equal length")
    (let ((distance 0))
      (dotimes (i (length dna1))
        (unless (char-equal (aref dna1 i) (aref dna2 i))
          (setq distance (1+ distance))))
      distance)))
