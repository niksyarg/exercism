(import (rnrs))


(define (atbash-char c)
  (let ((code (char->integer c)))
    (if (and (>= code 97) (<= code 122)) 
        (integer->char (- (+ 97 122) code))
        c)))


(define (parse-phrase phrase)
  (let loop ((chars (string->list (string-downcase phrase)))
             (acc '()))
    (cond
      ((null? chars) (reverse acc))
      (else
       (let ((c (car chars)))
         (cond
           ((or (char-alphabetic? c) (char-numeric? c))
            (loop (cdr chars) (cons (atbash-char c) acc)))
           (else
            (loop (cdr chars) acc))))))))


(define (encode phrase)
  (let ((transformed (parse-phrase phrase)))
    (let loop ((chars transformed)
               (count 0)
               (result '()))
      (cond
        ((null? chars) 
         (list->string (reverse result)))
        ((and (> count 0) (= (mod count 5) 0))
         (loop chars 0 (cons #\space result)))
        (else
         (loop (cdr chars) (+ count 1) (cons (car chars) result)))))))


(define (decode phrase)
  (list->string (parse-phrase phrase)))
