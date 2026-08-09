(defun egg-count (number)
  "Count the number of 1s in the binary representation of NUMBER."
  (let ((count 0))
    (while (> number 0)
      (setq count (+ count (logand number 1)))
      (setq number (lsh number -1)))
    count))
