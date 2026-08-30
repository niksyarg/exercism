(import (rnrs))

(define (factorize n)
  (define (helper current divisor acc)
    (cond
      ((<= current 1) 
       (reverse acc))
      ((zero? (mod current divisor)) 
       (helper (/ current divisor) divisor (cons divisor acc)))
      (else 
       (helper current (+ divisor 1) acc))))
  
  (helper n 2 '()))
