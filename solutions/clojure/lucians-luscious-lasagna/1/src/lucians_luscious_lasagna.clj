(ns lucians-luscious-lasagna)

;; Task 1: Ожидаемое время в духовке (40 минут)
(def expected-time 40)

;; Task 2: Оставшееся время в духовке
(defn remaining-time [actual-time]
  (- expected-time actual-time))

;; Task 3: Время на подготовку слоев (по 2 минуты на каждый слой)
(defn prep-time [num-layers]
  (* num-layers 2))

;; Task 4: Общее затраченное время (подготовка + время в духовке)
(defn total-time [num-layers actual-time]
  (+ (prep-time num-layers) actual-time))
