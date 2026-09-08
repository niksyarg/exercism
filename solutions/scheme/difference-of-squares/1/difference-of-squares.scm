(import (rnrs))


(define (square-of-sum n)
  (let ((sum (/ (* n (+ n 1)) 2)))
    (* sum sum)))


(define (sum-of-squares n)
  (/ (* n (+ n 1) (+ (* 2 n) 1)) 6))


(define (difference-of-squares n)
  (- (square-of-sum n) (sum-of-squares n)))
