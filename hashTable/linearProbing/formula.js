/*
 *1. table (property) = Array of size 137
 *2. hash (function) = This function hashes the string data type
 *3. showDistro (function) = This function shows the distribution of the hash table
 *4. put (function) = This function puts the data in the hash table
 *5. get (function) = This function gets the data from the hash table
 *6. value (property) = Array of values
 */

class HashTable {
  constructor() {
    this.table = new Array(137);
    this.value = [];
  }

  hash(data) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total = H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  showDistro() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }

  put(key, data) {
    let pos = this.hash(key);
    while (this.table[pos] !== undefined) {
      if (this.table[pos] === key) {
        this.value[pos] = data;
        return;
      }
      pos++;
      if (pos >= this.table.length) pos = 0;
    }
    this.table[pos] = key;
    this.value[pos] = data;
  }

  get(key) {
    let hash = this.hash(key);
    for (let i = hash; this.table[i] !== undefined; i++) {
      if (this.table[i] === key) {
        return this.value[i];
      }
    }
  }
}

let hashTable = new HashTable();
hashTable.put("ma", "value");
hashTable.put("ma", "value2");
hashTable.showDistro();
console.log(hashTable.get("ma"));
