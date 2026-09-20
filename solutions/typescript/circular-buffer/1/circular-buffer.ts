export default class CircularBuffer<T> {
  private buffer: (T | null)[];
  private capacity: number;
  private readIndex: number = 0;
  private writeIndex: number = 0;
  private size: number = 0;

  constructor(initial: number) {
    if (initial <= 0) {
      throw new Error("Размер буфера должен быть больше 0");
    }
    this.capacity = initial;
    this.buffer = new Array(initial).fill(null);
  }

  write(value: T): void {
    if (this.size === this.capacity) {
      throw new BufferFullError();
    }
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.capacity;
    this.size++;
  }

  read(): T {
    if (this.size === 0) {
      throw new BufferEmptyError();
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null; // Очищаем ячейку после чтения
    this.readIndex = (this.readIndex + 1) % this.capacity;
    this.size--;
    return value as T;
  }

  forceWrite(value: T): void {
    if (this.size < this.capacity) {
      this.write(value);
    } else {
      // Если буфер полон, перезаписываем самую старую ячейку
      this.buffer[this.writeIndex] = value;
      // Сдвигаем оба указателя вперед
      this.readIndex = (this.readIndex + 1) % this.capacity;
      this.writeIndex = (this.writeIndex + 1) % this.capacity;
    }
  }

  clear(): void {
    this.buffer.fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.size = 0;
  }
}

export class BufferFullError extends Error {
  constructor() {
    super("Buffer is full");
    this.name = "BufferFullError";
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty");
    this.name = "BufferEmptyError";
  }
}
