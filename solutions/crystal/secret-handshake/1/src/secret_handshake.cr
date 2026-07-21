module SecretHandshake
  def self.commands(input : Number) : Array(String)
    actions = [] of String

    actions << "wink" if input & 1 != 0
    actions << "double blink" if input & 2 != 0
    actions << "close your eyes" if input & 4 != 0
    actions << "jump" if input & 8 != 0
    
    actions.reverse! if input & 16 != 0

    actions
  end
end
