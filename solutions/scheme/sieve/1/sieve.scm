(import (rnrs)
        (rnrs arithmetic bitwise))

(define (sieve n)
  (if (< n 2)
      '()
      (let ((primes (make-vector (+ n 1) #t))) ; #t означает, что число потенциально простое
        ;; 0 и 1 не являются простыми числами
        (vector-set! primes 0 #f)
        (vector-set! primes 1 #f)
        
        ;; Внутренний цикл для вычеркивания составных чисел шагом p
        (define (mark-multiples! p step)
          (if (<= p n)
              (begin
                (vector-set! primes p #f)
                (mark-multiples! (+ p step) step))))
        
        ;; Главный цикл решета
        (define (run-sieve p)
          (if (<= (* p p) n)
              (begin
                (if (vector-ref primes p)
                    (mark-multiples! (* p p) p)) ; Начинаем вычеркивать с p^2
                (run-sieve (+ p 1)))))
        
        ;; Сбор оставшихся простых чисел в список
        (define (collect-primes current acc)
          (if (< current 2)
              acc
              (if (vector-ref primes current)
                  (collect-primes (- current 1) (cons current acc))
                  (collect-primes (- current 1) acc))))
        
        ;; Запуск алгоритма и сбор результата
        (run-sieve 2)
        (collect-primes n '()))))
