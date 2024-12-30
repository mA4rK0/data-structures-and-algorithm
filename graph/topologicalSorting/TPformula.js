/*
    *1. vertices (property) = Number of vertices in graph
    *2. edges (property) = Number of edges in graph
    *3. adj (property) = Array of vertices
    Then add empty array for each vertex
    *4. addEdge (function) = This function adds an edge between two vertices
    *5. showGraph (function) = This function shows the graph
    *6. topSort (function) = This function performs topological sort
*/

class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
    }
    this.vertexList = [];
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    let visited = [];
    for (let i = 0; i < this.vertices; i++) {
      let output = this.vertexList[i] + " -> ";
      visited.push(this.vertexList[i]);
      for (let j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] !== undefined) {
          if (visited.indexOf(this.vertexList[j]) < 0) {
            output += this.vertexList[j] + " ";
          }
        }
      }
      console.log(output.trim());
      visited.pop();
    }
  }

  topSort() {
    let stack = [];
    let visited = [];
    for (let i = 0; i < this.vertices; i++) {
      visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i++) {
      if (visited[i] === false) {
        this.topSortHelper(i, visited, stack);
      }
    }
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] !== undefined && stack[i] !== false) {
        console.log(this.vertexList[stack[i]]);
      }
    }
  }

  topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (let w in this.adj[v]) {
      if (!visited[w]) {
        this.topSortHelper(visited[w], visited, stack);
      }
    }
    stack.push(v);
  }
}

g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
g.showGraph();
g.topSort();
