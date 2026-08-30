(import (rnrs))

(define (leap-year? year)
  (cond ((zero? (mod year 400)) #t)
        ((zero? (mod year 100)) #f)
        ((zero? (mod year 4))   #t)
        (else                   #f)))
