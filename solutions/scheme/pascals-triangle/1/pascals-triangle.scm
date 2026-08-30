(import (rnrs))

(define (pascals-triangle n)
  (cond
    ((<= n 0) '())
    (else
     (let loop ((count 1)
                (current-row '(1))
                (triangle '()))
       (if (> count n)
           (reverse triangle)
           (let ((next-row (map + 
                                (cons 0 current-row) 
                                (append current-row '(0)))))
             (loop (+ count 1)
                   next-row
                   (cons current-row triangle))))))))
