(import (rnrs))

(define (clean phone-number)

  (let* ((chars (string->list phone-number))
         (digits (filter char-numeric? chars))
         (len (length digits)))
    

    (let ((nanp-digits
           (cond
             ((= len 10) digits)
             ((and (= len 11) (char=? (car digits) #\1)) (cdr digits))
             (else (error 'clean "invalid number length or country code")))))
      

      (let ((area-code-first (car nanp-digits))
            (exchange-code-first (list-ref nanp-digits 3)))
        (if (and (char>=? area-code-first #\2) (char<=? area-code-first #\9)
                 (char>=? exchange-code-first #\2) (char<=? exchange-code-first #\9))
            (list->string nanp-digits)
            (error 'clean "invalid area or exchange code"))))))
