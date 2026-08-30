(import (rnrs))

(define (binary-search array target)
  (define (search low high)
    (if (> low high)
        'not-found
        (let* ((mid (div (+ low high) 2))
               (mid-val (vector-ref array mid)))
          (cond
            ((= mid-val target) mid)
            ((> mid-val target) (search low (- mid 1)))
            (else               (search (+ mid 1) high))))))
  
  (search 0 (- (vector-length array) 1)))
