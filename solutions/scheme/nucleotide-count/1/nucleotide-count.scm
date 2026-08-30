(import (rnrs))

(define (nucleotide-count dna)
  (let loop ([chars (string->list dna)]
             [a 0] [c 0] [g 0] [t 0])
    (if (null? chars)
        `((#\A . ,a) (#\C . ,c) (#\G . ,g) (#\T . ,t))
        (case (car chars)
          ((#\A) (loop (cdr chars) (+ a 1) c g t))
          ((#\C) (loop (cdr chars) a (+ c 1) g t))
          ((#\G) (loop (cdr chars) a c (+ g 1) t))
          ((#\T) (loop (cdr chars) a c g (+ t 1)))
          (else (error 'nucleotide-count "Invalid nucleotide in sequence"))))))
