(ns annalyns-infiltration)

(defn can-fast-attack?
  "Возвращает true, если рыцарь спит (не бодрствует)."
  [knight-awake?]
  (not knight-awake?))

(defn can-spy?
  "Возвращает true, если хотя бы один из персонажей бодрствует."
  [knight-awake? archer-awake? prisoner-awake?]
  (or knight-awake? archer-awake? prisoner-awake?))

(defn can-signal-prisoner?
  "Возвращает true, если узник бодрствует, а лучник спит."
  [archer-awake? prisoner-awake?]
  (and (not archer-awake?) prisoner-awake?))

(defn can-free-prisoner?
  "Возвращает true, если:
   1. Есть собака, и лучник спит.
   2. Собаки нет, узник бодрствует, а рыцарь и лучник спят."
  [knight-awake? archer-awake? prisoner-awake? dog-present?]
  (if dog-present?
    (not archer-awake?)
    (and prisoner-awake? (not knight-awake?) (not archer-awake?))))
