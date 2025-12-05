class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(12);

head.next = new Node(2);
console.log(head.next);
console.log(head.value);

let temp = head;
while (temp !== null) {
  console.log(temp.value, "");
  temp = temp.next;
}
