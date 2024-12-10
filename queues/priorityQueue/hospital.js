class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    let priorityIndex = 0;
    for (let i = 1; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code < this.dataStore[priorityIndex].code) {
        priorityIndex = i;
      }
    }
    return this.dataStore.splice(priorityIndex, 1)[0];
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] instanceof Patient) {
        str += `${this.dataStore[i].name} code: ${this.dataStore[i].code}\n`;
      } else {
        str += `${this.dataStore[i]}\n`;
      }
    }
    return str;
  }

  clear() {
    this.dataStore = [];
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  count() {
    return this.dataStore.length;
  }
}

class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

// Eksekusi
let ed = new Queue();
ed.enqueue(new Patient("Smith", 5));
ed.enqueue(new Patient("Jones", 4));
ed.enqueue(new Patient("Fehrenbach", 6));
ed.enqueue(new Patient("Brown", 1));
ed.enqueue(new Patient("Ingram", 1));

console.log("Patients in queue:");
console.log(ed.toString());

let seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen:");
console.log(ed.toString());
