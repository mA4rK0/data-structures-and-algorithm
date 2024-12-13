/*
 *1. add (function) = This function takes two arguments, a key and a value. The key is the index for the value element.
 *2. find (function) = This function takes a key as its argument and returns the value associated with it.
 *3. remove (function) = The function deletes both the key and the associated value.
 *4. showAll (function) = to be able to view all the key-value pairs in a dictionary.
 *5. total (function) = to know how many entries there are in a dictionary.
 *6. clear (function) = this function removes all the key-value pairs from a dictionary.
 *7. sort (function) = to sort a dictionary by key or value.
 */

class Dictionary {
  constructor() {
    this.dataStore = new Map();
  }

  add(key, value) {
    this.dataStore.set(key, value);
  }

  find(key) {
    return this.dataStore.get(key);
  }

  remove(key) {
    this.dataStore.delete(key);
  }

  showAll() {
    for (let [key, value] of this.dataStore) {
      console.log(`${key} -> ${value}`);
    }
  }

  total() {
    return this.dataStore.size;
  }

  clear() {
    this.dataStore.clear();
  }

  sort(by = "key") {
    const sortedArray = [...this.dataStore.entries()].sort((a, b) => {
      if (by === "key") {
        return a[0] > b[0] ? 1 : -1;
      } else if (by === "value") {
        return a[1] > b[1] ? 1 : -1;
      } else {
        throw new Error("Invalid sort criteria. Use 'key' or 'value'.");
      }
    });
    this.dataStore = new Map(sortedArray);
  }
}

let dict = new Dictionary();
dict.add("one", 1);
dict.add("two", 2);
dict.add("three", 3);
dict.add("four", 4);
dict.add("five", 5);
dict.add("six", 6);
dict.add("seven", 7);
dict.add("eight", 8);
dict.add("nine", 9);
dict.add("ten", 10);
dict.showAll();

dict.sort("key");
dict.showAll();
