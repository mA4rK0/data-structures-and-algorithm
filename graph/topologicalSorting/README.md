# Topological Sorting

Topological sorting puts the vertices of a directed graph into an order such that all the directed edges point from a vertex earlier in the order to a vertex later in the order. The algorithm for topological sorting is similar to the algorithm for depth-first search. However, instead of immediately printing a vertex as it is visited, the algorithm visits all the adjacent vertices to the current vertex, and once that list is exhausted, we push the current vertex onto a stack.
