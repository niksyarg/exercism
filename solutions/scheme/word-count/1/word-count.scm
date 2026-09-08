(import (rnrs))

(define (word-count sentence)
  (let* ((lowered (string-downcase sentence))
         (tokens (tokenize lowered))
         (clean-tokens (map remove-outer-quotes tokens)))
    (count-frequencies clean-tokens '())))


(define (tokenize str)
  (define (valid-char? c)
    (or (char-alphabetic? c)
        (char-numeric? c)
        (char=? c #\')))
  
  (let loop ((chars (string->list str))
             (current '())
             (acc '()))
    (cond
      ((null? chars)
       (if (null? current) acc (cons (list->string (reverse current)) acc)))
      ((valid-char? (car chars))
       (loop (cdr chars) (cons (car chars) current) acc))
      (else
       (if (null? current)
           (loop (cdr chars) '() acc)
           (loop (cdr chars) '() (cons (list->string (reverse current)) acc)))))))

(define (remove-outer-quotes word)
  (let ((len (string-length word)))
    (if (and (> len 1)
             (char=? (string-ref word 0) #\')
             (char=? (string-ref word (- len 1)) #\'))
        (substring word 1 (- len 1))
        word)))


(define (count-frequencies tokens acc)
  (if (null? tokens)
      acc
      (let* ((word (car tokens))
             (existing (assoc word acc)))
        (if (string=? word "") 
            (count-frequencies (cdr tokens) acc)
            (if existing
                (begin
                  (set-cdr! existing (+ (cdr existing) 1))
                  (count-frequencies (cdr tokens) acc))
                (count-frequencies (cdr tokens) (cons (cons word 1) acc)))))))
