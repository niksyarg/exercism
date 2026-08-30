(import (rnrs))

(define (hamming-distance strand-a strand-b)
  (let ([list-a (string->list strand-a)]
        [list-b (string->list strand-b)])
    (if (not (= (length list-a) (length list-b)))
        (error 'hamming-distance "Strands must be of equal length")
        (fold-left (lambda (count char-a char-b)
                     (if (char=? char-a char-b)
                         count
                         (+ count 1)))
                   0
                   list-a
                   list-b))))
