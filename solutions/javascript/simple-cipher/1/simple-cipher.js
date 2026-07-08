export class Cipher {
  constructor(key) {
    this._key = key || this.generateRandomKey();
  }

  generateRandomKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: 100 }, () => 
      alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join('');
  }

  encode(plaintext) {
    return plaintext.split('').map((char, index) => {
      const shift = this._key[index % this._key.length].charCodeAt(0) - 97;
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
    }).join('');
  }

  decode(ciphertext) {
    return ciphertext.split('').map((char, index) => {
      const shift = this._key[index % this._key.length].charCodeAt(0) - 97;
      return String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
    }).join('');
  }

  get key() {
    return this._key;
  }
}
