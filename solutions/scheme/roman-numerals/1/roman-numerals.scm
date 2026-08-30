(import (rnrs))

(define (roman n)
  (define numerals
    '((1000 . "M") (900 . "CM") (500 . "D") (400 . "CD")
      (100  . "C") (90  . "XC") (50  . "L") (40  . "XL")
      (10   . "X") (9   . "IX") (5   . "V") (4   . "IV")
      (1   . "I")))

  (define (convert num pairs)
    (if (zero? num)
        ""
        (let* ((pair (car pairs))
               (value (car pair))
               (symbol (cdr pair)))
          (if (>= num value)
              (string-append symbol (convert (- num value) pairs))
              (convert num (cdr pairs))))))

  (convert n numerals))
