/*
 *1. table (property) = Array of size 137
 *2. hash (function) = This function hashes the string data type
 *3. showDistro (function) = This function shows the distribution of the hash table
 *4. put (function) = This function puts the data in the hash table
 */

class HashTable {
  constructor() {
    this.table = new Array(137);
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

  put(data) {
    let key = typeof data === "number" ? data.toString() : data;
    let pos = this.hash(key);
    this.table[pos] = data;
  }
}
