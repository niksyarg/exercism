(import (rnrs))

(define (keep pred seq)
  (cond ((null? seq) '())
        ((pred (car seq)) (cons (car seq) (keep pred (cdr seq))))
        (else (keep pred (cdr seq)))))

(define (discard pred seq)
  (cond ((null? seq) '())
        ((pred (car seq)) (discard pred (cdr seq)))
        (else (cons (car seq) (discard pred (cdr seq))))))
