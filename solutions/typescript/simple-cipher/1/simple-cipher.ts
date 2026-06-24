export class SimpleCipher {
  public key: string;
  private readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';

  constructor(key?: string) {
    if (key === undefined) {
      this.key = Array.from({ length: 100 }, () => 
        this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
      ).join('');
    } else {
      this.key = key;
    }
  }

  encode(plainText: string): string {
    return plainText
      .split('')
      .map((char, index) => {
        const shift = this.alphabet.indexOf(this.key[index % this.key.length]);
        const charIndex = this.alphabet.indexOf(char);
        const newIndex = (charIndex + shift) % 26;
        return this.alphabet[newIndex];
      })
      .join('');
  }

  decode(cipherText: string): string {
    return cipherText
      .split('')
      .map((char, index) => {
        const shift = this.alphabet.indexOf(this.key[index % this.key.length]);
        const charIndex = this.alphabet.indexOf(char);
        const newIndex = (charIndex - shift + 26) % 26;
        return this.alphabet[newIndex];
      })
      .join('');
  }
}
