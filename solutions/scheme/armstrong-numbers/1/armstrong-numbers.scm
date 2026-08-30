(import (rnrs))

(define (armstrong-number? n)
  (let* ((str-n (number->string n))
         (len (string-length str-n))
         (digits (map (lambda (c) (- (char->integer c) 48))
                      (string->list str-n)))
         (sum (apply + (map (lambda (d) (expt d len)) digits))))
    (= sum n)))
