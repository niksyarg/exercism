(import (rnrs))

(define (classify n)
  (if (<= n 0)
      (error 'classify "Число должно быть положительным" n)
      (let ([sum (aliquot-sum n)])
        (cond
          [(= sum n) 'perfect]
          [(> sum n) 'abundant]
          [(< sum n) 'deficient]))))

;; Вспомогательная функция для поиска суммы всех делителей, кроме самого n
(define (aliquot-sum n)
  (if (= n 1)
      0
      (let loop ([i 2]
                 [current-sum 1])
        (cond
          [(> (* i i) n) current-sum]
          [(= (* i i) n) (+ current-sum i)]
          [(= (modulo n i) 0) 
           (loop (+ i 1) (+ current-sum i (/ n i)))]
          [else (loop (+ i 1) current-sum)]))))
