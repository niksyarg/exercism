module Gigasecond
  def self.from(start : Time) : Time
    start + 1_000_000_000.seconds
  end
end
