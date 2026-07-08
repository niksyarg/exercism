export class House {
  static DATA = [
    { subject: 'the house that Jack built.' },
    { subject: 'the malt', action: 'lay in' },
    { subject: 'the rat', action: 'ate' },
    { subject: 'the cat', action: 'killed' },
    { subject: 'the dog', action: 'worried' },
    { subject: 'the cow with the crumpled horn', action: 'tossed' },
    { subject: 'the maiden all forlorn', action: 'milked' },
    { subject: 'the man all tattered and torn', action: 'kissed' },
    { subject: 'the priest all shaven and shorn', action: 'married' },
    { subject: 'the rooster that crowed in the morn', action: 'woke' },
    { subject: 'the farmer sowing his corn', action: 'kept' },
    { subject: 'the horse and the hound and the horn', action: 'belonged to' }
  ];

  static verse(num) {
    let res = [];
    for (let i = num - 1; i >= 0; i--) {
      const item = this.DATA[i];
      if (i === num - 1) {
        res.push(`This is ${item.subject}`);
      } else {
        const nextItem = this.DATA[i + 1];
        res.push(`that ${nextItem.action} ${item.subject}`);
      }
    }
    return res;
  }

  static verses(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(...this.verse(i));
      if (i !== end) result.push(''); // Пустая строка между куплетами
    }
    return result;
  }
}
