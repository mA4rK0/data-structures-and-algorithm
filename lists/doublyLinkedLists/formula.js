/*
  Node Class
  *1. element (property) = Value of node
  *2. next (property) = Reference to next node
  *3. previous (property) = Reference to previous node
*/

/*
  LList Class
  *1. head (property) = Reference to head node
  *2. find (function) = returns a node that contains the item specified by the user
  *3. insert (function) = inserts a new node after the node that contains the item specified by the user
  *4. display (function) = displays all nodes in the list
  *5. remove (function) = removes the node that contains the item specified by the user
  *6. findLast (function) = returns the last node in the list
  *7. dispReverse (function) = displays the list in reverse
*/

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  remove(item) {
    let currNode = this.find(item);
    if (!(currNode.next === null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  findLast() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  dispReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous === null)) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}
