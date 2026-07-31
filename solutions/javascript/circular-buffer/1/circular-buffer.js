class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = [];
  }

  write(value) {
    if (value === undefined || value === null) return;
    if (this.buffer.length >= this.capacity) {
      throw new BufferFullError();
    }
    this.buffer.push(value);
  }

  read() {
    if (this.buffer.length === 0) {
      throw new BufferEmptyError();
    }
    return this.buffer.shift();
  }

  forceWrite(value) {
    if (this.buffer.length >= this.capacity) {
      this.read(); // Discard oldest element
    }
    this.write(value);
  }

  clear() {
    this.buffer = [];
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message = 'Buffer is full') {
    super(message);
  }
}

export class BufferEmptyError extends Error {
  constructor(message = 'Buffer is empty') {
    super(message);
  }
}