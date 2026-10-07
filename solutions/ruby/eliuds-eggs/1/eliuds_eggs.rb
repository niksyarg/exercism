class EliudsEggs
  def self.egg_count(number)
    number.to_s(2).count('1')
  end
end
