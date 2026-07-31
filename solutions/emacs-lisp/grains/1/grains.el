;;; grains.el --- Grains exercise (exercism) -*- lexical-binding: t; -*-

;;; Commentary:

(defun square (n)
  "Calculate the number of grains on a given square N."
  (expt 2 (1- n)))

(defun total ()
  "Calculate the total number of grains on the chessboard."
  (1- (expt 2 64)))

(provide 'grains)
;;; grains.el ends here
