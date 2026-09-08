(import (rnrs))

(define (rotate-char c dx)
  (let ((code (char->integer c)))
    (cond
   
      ((and (>= code 97) (<= code 122))
       (integer->char (+ 97 (mod (+ (- code 97) dx) 26))))

      ((and (>= code 65) (<= code 90))
       (integer->char (+ 65 (mod (+ (- code 65) dx) 26))))
   
      (else c))))

(define (rotate phrase dx)
  (list->string
    (map (lambda (c) (rotate-char c dx))
         (string->list phrase))))
