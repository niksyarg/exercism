export class List {
  private values: number[];

  constructor(...values: number[]) {
    this.values = values;
  }

  compare(otherList: List): string {
    const a = this.values;
    const b = otherList.values;


    if (this.isEqual(a, b)) {
      return 'equal';
    }

 
    if (this.isSublist(a, b)) {
      return 'sublist';
    }

   
    if (this.isSublist(b, a)) {
      return 'superlist';
    }


    return 'unequal';
  }


  private isEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
  }


  private isSublist(sub: number[], main: number[]): boolean {
 
    if (sub.length === 0) return true;

    if (sub.length > main.length) return false;


    for (let i = 0; i <= main.length - sub.length; i++) {
      let match = true;
      
    
      for (let j = 0; j < sub.length; j++) {
        if (main[i + j] !== sub[j]) {
          match = false;
          break;
        }
      }
      

      if (match) return true;
    }

    return false;
  }
}
