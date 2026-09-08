(import (rnrs))

;; Находит наибольший общий делитель (НОД)
(define (gcd x y)
  (if (= y 0)
      x
      (gcd y (modulo x y))))

;; Находит модульное обратное число для 'a' по модулю 26
;; Если ax mod 26 = 1, то x — искомое число
(define (modular-inverse a m)
  (define (search x)
    (cond ((>= x m) (error 'modular-inverse "Обратного числа не существует"))
          ((= (modulo (* a x) m) 1) x)
          (else (search (+ x 1)))))
  (search 1))

;; Фильтрует строку, оставляя только буквы и цифры, и переводит буквы в нижний регистр
;; Возвращает список символов
(define (clean-text text)
  (filter (lambda (c) (or (char-alphabetic? c) (char-numeric? c)))
          (map char-downcase (string->list text))))

;; Группирует список элементов по N штук, разделяя группы элементом 'sep'
(define (chunk-list lst n sep)
  (cond ((null? lst) '())
        ((<= (length lst) n) lst)
        (else (append (take lst n)
                      (list sep)
                      (chunk-list (drop lst n) n sep)))))

;; Вспомогательные функции take и drop (стандарт для работы со списками)
(define (take lst n)
  (if (or (zero? n) (null? lst)) '() (cons (car lst) (take (cdr lst) (- n 1)))))

(define (drop lst n)
  (if (or (zero? n) (null? lst)) lst (drop (cdr lst) (- n 1))))

;; Основная функция ШИФРОВАНИЯ
(define (encode key text)
  (let ((a (car key))
        (b (cdr key)))
    ;; Проверка ключа 'a' на взаимную простоту с 26
    (if (not (= (gcd a 26) 1))
        (error 'encode "Ключ 'a' и 26 должны быть взаимно простыми")
        
        (let* ((cleaned (clean-text text))
               (processed
                (map (lambda (c)
                       (if (char-numeric? c)
                           c ; Цифры остаются без изменений
                           (let* ((x (- (char->integer c) (char->integer #\a)))
                                  (enc-idx (modulo (+ (* a x) b) 26)))
                             (integer->char (+ enc-idx (char->integer #\a))))))
                     cleaned))
               ;; Группируем по 5 символов через пробел
               (grouped (chunk-list processed 5 #\space)))
          (list->string grouped)))))

;; Основная функция РАСШИФРОВАНИЯ
(define (decode key text)
  (let ((a (car key))
        (b (cdr key)))
    ;; Проверка ключа 'a'
    (if (not (= (gcd a 26) 1))
        (error 'decode "Ключ 'a' и 26 должны быть взаимно простыми")
        
        (let* ((a-inv (modular-inverse a 26))
               ;; При расшифровании просто убираем пробелы
               (cleaned (filter (lambda (c) (not (char-whitespace? c))) (string->list text)))
               (processed
                (map (lambda (c)
                       (if (char-numeric? c)
                           c ; Цифры остаются без изменений
                           (let* ((y (- (char->integer c) (char->integer #\a)))
                                  ;; Формула: (a^-1 * (y - b)) mod 26
                                  (dec-idx (modulo (* a-inv (- y b)) 26)))
                             (integer->char (+ dec-idx (char->integer #\a))))))
                     cleaned)))
          (list->string processed)))))
