/*
 *1. add (function) = This function takes a value as its argument and adds it to the set. A set cannot contain duplicate values.
 *2. remove (function) = This function takes a value as its argument and removes it from the set.
 *3. contains (function) = This function takes a value as its argument and returns true if the value is in the set, or false if it is not.
 *4. union (function) = This function takes a set as its argument and returns a new set that contains all the elements of both sets, (A U B).
 *5. intersect (function) = This function takes a set as its argument and returns a new set that contains all the members of one set that also exist in a second set, (A n B).
 *6. size (function) = This function returns the number of elements in the set.
 *7. subset (function) = This function takes a set as its argument and returns true if all the members of the first set are contained in the second set, or false if it is not, (A ⊆ B).
 *8. difference (function) = This function takes a set as its argument and returns a new set that contains the elements that are in the first set and second set but not in the both sets, (A U B) - (A n B).
 *9. show (function) = This function returns the elements in the set.
 */

class Set {
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  }

  remove(data) {
    let pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  }

  contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    } else {
      return false;
    }
  }

  union(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i]);
      }
    }
    return tempSet;
  }

  intersect(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }

  size() {
    return this.dataStore.length;
  }

  subset(set) {
    if (this.size() > set.size()) {
      return false;
    } else {
      for (let member in this.dataStore) {
        if (!set.contains(member)) {
          return false;
        }
      }
    }
    return true;
  }

  difference(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }

  show() {
    return this.dataStore;
  }
}
