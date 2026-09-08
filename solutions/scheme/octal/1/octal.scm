(import (rnrs))

(define (to-decimal s)
  (define (char-to-digit c)
    (- (char->integer c) 48))

  (define (valid-octal-char? c)
    (char<=? #\0 c #\7))

  (define (convert list-of-chars acc)
    (cond
      ((null? list-of-chars) acc)
      ((not (valid-octal-char? (car list-of-chars))) 0)
      (else (convert (cdr list-of-chars) 
                     (+ (* acc 8) (char-to-digit (car list-of-chars)))))))

  (convert (string->list s) 0))
