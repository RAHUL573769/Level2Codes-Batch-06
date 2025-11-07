class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(19);

head.next = new Node(2);
console.log(head.next);
console.log(head.value);
let temp = head;

while (temp !== null) {
  temp = temp.next;
}
//Implementation of Single Linked LIST

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // this.head = { value: 10, next: null };
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // this.head = { value: 10, next: null };
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  insert(index, value) {}
  remove() {}

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.prepend(29);

linkedList.append(2);
linkedList.append(20);
linkedList.print();
