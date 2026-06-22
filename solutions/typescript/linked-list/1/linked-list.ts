class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private length: number = 0;

  public push(element: T): void {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  public pop(): T | undefined {
    if (!this.tail) return undefined;
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail!.next = null;
    }
    this.length--;
    return value;
  }

  public shift(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }
    this.length--;
    return value;
  }

  public unshift(element: T): void {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  public delete(element: T): void {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        if (current === this.head) {
          this.shift();
        } else if (current === this.tail) {
          this.pop();
        } else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
          this.length--;
        }
        return;
      }
      current = current.next;
    }
  }


  public count(): number {
    return this.length;
  }
}

