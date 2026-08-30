(import (rnrs))

(define (square n)
  (if (or (< n 1) (> n 64))
      (error 'square "Номер клетки должен быть от 1 до 64" n)
      (expt 2 (- n 1))))

(define total
  (let ((total-grains (- (expt 2 64) 1)))
    (lambda () total-grains)))
