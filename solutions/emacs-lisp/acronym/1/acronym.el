(defun acronym (phrase)
  "Convert a PHRASE to its acronym."
  (let* ((clean-phrase (replace-regexp-in-string "-" " " phrase))
         (only-words (replace-regexp-in-string "[^[:alnum:] ]" "" clean-phrase))
         (words (split-string only-words "[ ]+" t))
         (first-letters (mapcar (lambda (word) (substring word 0 1)) words))
         (acronym-str (apply 'concat first-letters)))
    (upcase acronym-str)))
