(import (rnrs))

(define (convert number)
  (let ((sound (string-append
                 (if (zero? (mod number 3)) "Pling" "")
                 (if (zero? (mod number 5)) "Plang" "")
                 (if (zero? (mod number 7)) "Plong" ""))))
    (if (string=? sound "")
        (number->string number)
        sound)))
