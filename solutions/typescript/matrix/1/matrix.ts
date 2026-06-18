export class Matrix {
  private readonly _rows: number[][];
  private readonly _columns: number[][];

  constructor(input: string) {
    this._rows = input.split('\n').map((row) => 
      row.split(/\s+/).map(Number)
    );

    this._columns = this._rows[0].map((_, i) => 
      this._rows.map((row) => row[i])
    );
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
