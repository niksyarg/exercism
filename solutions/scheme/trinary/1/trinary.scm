(import (rnrs))

(define (to-decimal s)
  (define (char->digit c)
    (cond ((char=? c #\0) 0)
          ((char=? c #\1) 1)
          ((char=? c #\2) 2)
          (else -1)))

  (define (helper chars acc)
    (if (null? chars)
        acc
        (let ((digit (char->digit (car chars))))
          (if (= digit -1)
              0 ; 
              (helper (cdr chars) (+ (* acc 3) digit))))))

  (helper (string->list s) 0))
