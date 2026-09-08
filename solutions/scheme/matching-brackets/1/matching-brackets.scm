(import (rnrs))

(define (balanced? string)
  (let loop ((chars (string->list string))
             (stack '()))
    (cond
      ;; Если строка закончилась, скобки сбалансированы, если стек пуст
      ((null? chars) 
       (null? stack))
      
      ;; Если встретили открывающую скобку, кладем её в стек
      ((member (car chars) '(#\( #\[ #\{))
       (loop (cdr chars) (cons (car chars) stack)))
      
      ;; Если встретили закрывающую скобку, проверяем соответствие с верхушкой стека
      ((char=? (car chars) #\))
       (and (not (null? stack))
            (char=? (car stack) #\()
            (loop (cdr chars) (cdr stack))))
      
      ((char=? (car chars) #\])
       (and (not (null? stack))
            (char=? (car stack) #\[)
            (loop (cdr chars) (cdr stack))))
      
      ((char=? (car chars) #\})
       (and (not (null? stack))
            (char=? (car stack) #\{)
            (loop (cdr chars) (cdr stack))))
      
      ;; Все остальные символы просто игнорируем и идем дальше
      (else 
       (loop (cdr chars) stack)))))
