# Graphs

A graph consists of a set of _vertices_ (similar to nodes) and a set of _edges_. Think of a map of a US state. Each town is connected with other towns via some type of road. A map is a type of graph where each town is a vertex, and a road that connects two towns is an edge. Edges are defined as a pair (v1, v2), where v1 and v2 are two vertices in a graph. A vertex can also have a weight, which is sometimes called a cost. A graph whose pairs are ordered is called a _directed graph_, or just a _digraph_. When pairs are ordered in a directed graph, an arrow is drawn from one pair to another pair. Directed graphs indicate the flow direction from vertex to vertex. If a graph is not ordered, it is called an _unordered graph_, or just a graph. A _path_ is a sequence of vertices in a graph such that all vertices in the path are connected by edges. The length of a path is the number of edges from the first vertex in the path to the last vertex. A path can also consist of a vertex to itself, which is called a loop. Loops have a length of 0. A _cycle_ is a path with at least one edge whose first and last vertices are the same. A _simple cycle_ is one with no repeated edges or vertices for both directed and undirected graphs. Paths that repeat other vertices besides the first and last vertices are called _general cycles_. Two vertices are considered _strongly_ connected if there is a path from the first vertex to the second vertex, and vice versa. If the graph is a directed graph, and all its vertices are strongly connected, then the directed graph is considered strongly connected.

There are two methods to representing the edges of a graph :

1. adjacency list,
2. adjacency matrix

There are two ways to use the search algorithm for traversing a graph data structure :

1. Depth First Search
2. Breadth First Search

The difference between DFS and BFS :

| Depth First Search                                     | Breadth First Search                               |
| ------------------------------------------------------ | -------------------------------------------------- |
| Traverse a graph branch by branch                      | Traverse a graph level by level                    |
| Utilizes a stack                                       | Utilizes a queue                                   |
| Better if destination is on average far from the start | Better if destination is on average close to start |
| Children are visited before siblings                   | Siblings are visited before children               |
| More popular for games / puzzles                       | Effective for finding the shortest paths           |
