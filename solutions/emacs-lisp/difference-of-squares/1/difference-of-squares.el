;;; difference-of-squares.el --- Difference of Squares (exercism) -*- lexical-binding: t; -*-

;;; Commentary:

(defun square-of-sum (n)
  "Calculate the square of the sum of the first N natural numbers."
  (let ((sum (/ (* n (+ n 1)) 2)))
    (* sum sum)))

(defun sum-of-squares (n)
  "Calculate the sum of the squares of the first N natural numbers."
  (/ (* n (+ n 1) (+ (* 2 n) 1)) 6))

(defun difference (n)
  "Calculate the difference between square of sum and sum of squares for N."
  (- (square-of-sum n) (sum-of-squares n)))

(provide 'difference-of-squares)
;;; difference-of-squares.el ends here
