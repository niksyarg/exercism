
(defvar allergen-values
  '(("eggs" . 1)
    ("peanuts" . 2)
    ("shellfish" . 4)
    ("strawberries" . 8)
    ("tomatoes" . 16)
    ("chocolate" . 32)
    ("pollen" . 64)
    ("cats" . 128))
  )


(defun allergic-to-p (score allergen)

  (let ((value (cdr (assoc allergen allergen-values))))
    (if value
        (/= 0 (logand score value))
      nil)))

(defun allergen-list (score)

  
  (let (result)
    (dolist (item allergen-values)
      (let ((name (car item))
            (value (cdr item)))
        (when (/= 0 (logand score value))
          (push name result))))
    (nreverse result)))

(provide 'allergies)
;;; allergies.el ends here
