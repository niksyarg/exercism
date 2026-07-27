module ProteinTranslation
  def self.proteins(strand : String) : Array(String)
    proteins = [] of String

   
    strand.scan(/.{1,3}/).map(&.[0]).each do |codon|
      case codon
      when "AUG"
        proteins << "Methionine"
      when "UUU", "UUC"
        proteins << "Phenylalanine"
      when "UUA", "UUG"
        proteins << "Leucine"
      when "UCU", "UCC", "UCA", "UCG"
        proteins << "Serine"
      when "UAU", "UAC"
        proteins << "Tyrosine"
      when "UGU", "UGC"
        proteins << "Cysteine"
      when "UGG"
        proteins << "Tryptophan"
      when "UAA", "UAG", "UGA"
        break 
      else
        raise ArgumentError.new("Invalid codon")
      end
    end

    proteins
  end
end
