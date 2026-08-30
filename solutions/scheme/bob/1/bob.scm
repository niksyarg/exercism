(import (rnrs))

(define (response-for message)
  (let* ((trimmed (string-trim-whitespace message))
         (is-empty (string=? trimmed ""))
         (is-question (and (not is-empty) 
                           (char=? (string-ref trimmed (- (string-length trimmed) 1)) #\?)))
         (has-letters (some-letters? trimmed))
         (is-yelling (and has-letters (string=? trimmed (string-upcase trimmed)))))
    (cond
      ((and is-yelling is-question) "Calm down, I know what I'm doing!")
      (is-question "Sure.")
      (is-yelling "Whoa, chill out!")
      (is-empty "Fine. Be that way!")
      (else "Whatever."))))


(define (string-trim-whitespace str)
  (let ((len (string-length str)))
    (let loop ((start 0))
      (if (>= start len)
          ""
          (if (char-whitespace? (string-ref str start))
              (loop (+ start 1))
              (let loop2 ((end len))
                (if (char-whitespace? (string-ref str (- end 1)))
                    (loop2 (- end 1))
                    (substring str start end))))))))


(define (some-letters? str)
  (let ((len (string-length str)))
    (let loop ((i 0))
      (if (>= i len)
          #f
          (if (char-alphabetic? (string-ref str i))
              #t
              (loop (+ i 1)))))))
