(define (dna->rna dna)
  (list->string
    (map (lambda (char)
           (cond
             ((char=? char #\G) #\C)
             ((char=? char #\C) #\G)
             ((char=? char #\T) #\A)
             ((char=? char #\A) #\U)
             (else char)))
         (string->list dna))))
