/* 
  Node Class
 *1. element (property) = Value of node
 *2. next (property) = Reference to next node
 */

/*
  LList Class
  *1. head (property) = Reference to head node
  *2. find (function) = returns a node that contains the item specified by the user
  *3. insert (function) = inserts a new node after the node that contains the item specified by the user
  *4. display (function) = displays all nodes in the list
  *5. findPrevious (function) = returns the node before the node that contains the item specified by the user
  *6. remove (function) = removes the node that contains the item specified by the user
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
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
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

//exm:

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Beni", "Russellville");
cities.insert("Alma", "Beni");
cities.display();

// head -> Conway -> Russellville -> Beni -> Alma -> null

cities.remove("Russellville");
cities.display();

// head -> Conway -> Beni -> Alma -> null
