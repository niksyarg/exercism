(import (rnrs))


(define (sort-string str)
  (list->string
    (list-sort char<?
      (string->list (string-downcase str)))))

(define (anagram target words)
  (let* ((target-lower (string-downcase target))
         (target-sorted (sort-string target)))
    (filter
      (lambda (word)
        (let ((word-lower (string-downcase word)))
          (and (not (string=? target-lower word-lower))     
               (string=? target-sorted (sort-string word))))) ;
      words)))
