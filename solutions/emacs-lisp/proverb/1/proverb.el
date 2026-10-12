(defun recite (strings)
  "Generate the proverb given a list of STRINGS."
  (if (null strings)
      '()
    (let ((result '())
          (first (car strings)))
      (while (cdr strings)
        (push (format "For want of a %s the %s was lost." (car strings) (cadr strings)) result)
        (setq strings (cdr strings)))
      (push (format "And all for the want of a %s." first) result)
      (nreverse result))))

(provide 'proverb)
;;; proverb.el ends here
