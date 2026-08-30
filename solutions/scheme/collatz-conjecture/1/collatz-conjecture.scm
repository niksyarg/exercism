(import (rnrs))

(define (collatz n)
  (define (steps-count current count)
    (cond
      ((= current 1) count)
      ((even? current) (steps-count (/ current 2) (+ count 1)))
      (else (steps-count (+ (* current 3) 1) (+ count 1)))))
  (steps-count n 0))
