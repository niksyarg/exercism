(ns squeaky-clean
  (:require [clojure.string :as str]))

(defn clean [s]
  (let [;; Задача 1 & 2: заменяем пробелы на '_' и управляющие символы на "CTRL"
        step1-2 (str/join 
                 (map (fn [c]
                        (cond
                          (Character/isWhitespace c) "_"
                          (Character/isISOControl c) "CTRL"
                          :else c))
                      s))
        
        ;; Задача 3: Преобразуем kebab-case в camelCase
        ;; Ищем дефис и следующий за ним символ, делаем его заглавным
        step3 (str/replace step1-2 #"-(\p{L})" (fn [[_ c]] (str/upper-case c)))
        
        ;; Задача 4 & 5: Оставляем только буквы и подчеркивания,
        ;; при этом полностью исключаем строчные греческие буквы (диапазон α-ω)
        step4-5 (str/replace step3 #"[^\p{L}_]|[\u03B1-\u03C9]" "")]
    
    step4-5))
