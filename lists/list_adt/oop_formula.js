//* List Abstract Data Type (ADT) in Object Oriented Programming (OOP) Formula
/*
 *1. listSize (property) = Number of elements in list
 *2. pos (property) = Current position in list
 *3. length (property) = Returns the number of elements in list
 *4. clear (function) = Clears all elements from list
 *5. toString (function) = Returns string representation of list
 *6. getElement (function) = Returns element at current position
 *7. insert (function) = Inserts new element after existing element
 *8. append (function) = Adds new element to end of list
 *9. remove (function) = Removes element from list
 *10. front (function) = Sets current position to first element of list
 *11. end (function) = Sets current position to last element of list
 *12. prev (function) = Moves current position back one element
 *13. next (function) = Moves current position forward one element
 *14. currPos (function) = Returns the current position in list
 *15. moveTo (function) = Moves the current position to specified position
 *16. find (function) = The find function simply iterates through dataStore ([]) looking for the specified element. If the element is found, the function returns the position where the element was found. If the element wasn’t found, the function returns -1, which is a standard value to return when an element can’t be found in an array.
 *17. contains (function) = The contains() function is useful when you want to check a list to see if a particular value is part of the list.
 *18 traverse (function) = Traverses the list from front to end
 *19 traverseBackwards (function) = Traverses the list from end to front
 */

class List {
  constructor() {
    this.pos = 0;
    this.dataStore = [];
  }

  clear() {
    this.dataStore = [];
    this.pos = 0;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  toString() {
    return this.dataStore.toString();
  }

  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore.push(element);
  }

  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.dataStore.length - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.dataStore.length - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  length() {
    return this.dataStore.length;
  }

  moveTo(position) {
    if (position >= 0 && position < this.dataStore.length) {
      this.pos = position;
    } else {
      throw new RangeError("Position out of range.");
    }
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  traverse() {
    for (this.front(); this.currPos() < this.length(); this.next()) {
      console.log(this.getElement());
    }
  }

  traverseBackwards() {
    for (this.end(); this.currPos() >= 0; this.prev()) {
      console.log(this.getElement());
    }
  }
}
