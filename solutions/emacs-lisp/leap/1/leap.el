(defun leap-year-p (year)
  "Return t if YEAR is a leap year, otherwise nil."
  (and (zerop (% year 4))
       (or (not (zerop (% year 100)))
           (zerop (% year 400)))))
