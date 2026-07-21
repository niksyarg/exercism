class RnaComplement
  def self.of_dna(strand : String) : String
    strand.tr("GCTA", "CGAU")
  end
end
