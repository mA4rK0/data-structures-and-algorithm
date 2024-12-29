/*
    Adjency List Unordered Graph
    *1. vertices (property) = Number of vertices in graph
    *2. edges (property) = Number of edges in graph
    *3. adj (property) = Array of vertices
    Then add empty array for each vertex
    *4. addEdge (function) = This function adds an edge between two vertices
    *5. showGraph (function) = This function shows the graph
    *6. marked (property) = stores visited vertices and initialize it to all false values.
    
*/

class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
    }
    this.marked = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let output = i + " -> ";
      for (let j = 0; j < this.adj[i].length; j++) {
        output += this.adj[i][j] + " ";
      }
      console.log(output.trim());
    }
  }

  bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      let v = queue.shift();
      if (v !== undefined) {
        console.log(`visited vertex : ${v}`);
      }
      for (let w of this.adj[v]) {
        if (!this.marked[w]) {
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);
