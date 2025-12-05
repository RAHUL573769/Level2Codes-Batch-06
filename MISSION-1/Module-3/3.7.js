class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
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
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.log("Index out of bound");
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let count = 0;
    let current = this.head;

    while (count !== index - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log("Index out of bound");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    let count = 0;
    let current = this.head;

    while (count !== index - 1) {
      current = current.next;
      count++;
    }

    const nodeToRemove = current.next;
    current.next = nodeToRemove.next;

    if (index === this.length - 1) {
      this.tail = current;
    }

    this.length--;
  }

  // 🌀 Reverse the linked list
  reverse() {
    if (!this.head || !this.head.next) {
      return;
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head; // the old head becomes the new tail

    while (current !== null) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev; // the last node becomes the new head
  }

  print() {
    let currentNode = this.head;
    const values = [];
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
    return values;
  }
}

// ✅ Example usage
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.print(); // 10 -> 20 -> 30 -> 40

linkedList.reverse();
linkedList.print(); // 40 -> 30 -> 20 -> 10
