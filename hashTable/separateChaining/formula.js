/*
 *1. table (property) = Array of size 137
 *2. hash (function) = This function hashes the string data type
 *3. showDistro (function) = This function shows the distribution of the hash table
 *4. put (function) = This function puts the data in the hash table
 *5. get (function) = This function gets the data from the hash table
 *6. buildChains (function) = This function builds the chains (two dimensional array) for preventing collision
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
      if (this.table[i][0] !== undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }

  put(key, data) {
    let pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] !== undefined) {
      index++;
    }
    this.table[pos][index] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }
}
