(import (rnrs))

(define (sum-of-multiples ints limit)

  (define (multiple-of-any? x)
    (exists (lambda (n) 
              (and (> n 0) (= (mod x n) 0))) 
            ints))
  

  (define (accumulate-sum current acc)
    (cond ((>= current limit) acc)
          ((multiple-of-any? current) (accumulate-sum (+ current 1) (+ acc current)))
          (else (accumulate-sum (+ current 1) acc))))

  (accumulate-sum 1 0))
