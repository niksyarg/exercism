module IsbnVerifier
  def self.valid?(isbn : String) : Bool
    # Удаляем дефисы из строки
    clean_isbn = isbn.delete("-")

    # ISBN-10 должен состоять ровно из 10 символов
    return false if clean_isbn.size != 10

    sum = 0

    # Проверяем первые 9 символов — они должны быть строго цифрами
    0.upto(8) do |i|
      char = clean_isbn[i]
      return false unless char.ascii_number?
      
      # Умножаем цифру на коэффициент от 10 до 2
      sum += char.to_i * (10 - i)
    end

    # Проверяем последний (контрольный) символ
    last_char = clean_isbn[9]
    if last_char == 'X'
      sum += 10 * 1
    elsif last_char.ascii_number?
      sum += last_char.to_i * 1
    else
      return false
    end

    # Номер валиден, если остаток от деления суммы на 11 равен 0
    sum % 11 == 0
  end
end
