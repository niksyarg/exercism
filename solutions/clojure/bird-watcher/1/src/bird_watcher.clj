(ns bird-watcher)

;; Task 1: Вектор с данными за прошлую неделю
(def last-week [0 2 5 3 7 8 4])

;; Task 2: Количество птиц за сегодняшний день (последний элемент вектора)
(defn today [birds]
  (last birds))

;; Task 3: Увеличить сегодняшнее число на 1
(defn inc-bird [birds]
  (conj (pop birds) (inc (last birds))))

;; Task 4: Проверить, был ли день без птиц (есть ли 0 в векторе)
(defn day-without-birds? [birds]
  (boolean (some zero? birds)))

;; Task 5: Посчитать сумму птиц за первые n дней
(defn n-days-count [birds n]
  (reduce + (take n birds)))

;; Task 6: Посчитать количество «напряженных» дней (где птиц >= 5)
(defn busy-days [birds]
  (count (filter #(>= % 5) birds)))

;; Task 7: Проверить, является ли неделя «нечетной» (чередование 1 и 0)
(defn odd-week? [birds]
  (= birds [1 0 1 0 1 0 1]))
