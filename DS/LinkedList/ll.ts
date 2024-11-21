class llNode {
  value: number;
  next: llNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  head: llNode | null;
  tail: llNode | null;
  length: number;
  constructor(value: number) {
    const newNode = new llNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value: number) {
    const newNode = new llNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    let temp = this.head;
    let pre = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    while (temp?.next) {
      pre = temp;
      temp = temp.next;
    }
    pre.next = null;
    this.length--;
    return temp;
  }

  prepend(value: number) {
    const newNode = new llNode(value);

    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    let temp = this.head;
    if (!temp) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    if (!temp) return;

    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }
    return temp;
  }
  set(index: number, value: number) {
    let node = myLL.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.prepend(value);
    const newNode = new llNode(value);
    let temp = this.get(index - 1);
    if (!temp) return false;

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();
    let pre = this.get(index - 1);
    let temp = pre?.next;
    if (!temp) return null;
    pre!.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp?.next;
    let pre = null;
    for (let i = 0; i < this.length; i++) {
      if (!temp) return;
      next = temp?.next;
      temp.next = pre;
      pre = temp;
      temp = next;
    }
    return this;
  }
  display() {
    let temp: llNode | null = this.head;
    if (!temp) return null;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const myLL = new LinkedList(0);
myLL.push(1).push(2).push(3).push(4);
myLL.display();
