# Binary Search Trees

Trees are a commonly used data structure in computer science. A tree is a nonlinear data structure that is used to store data in a hierarchical manner. Tree data structures are used to store hierarchical data, such as the files in a file system, and for storing sorted lists of data. We examine one particular tree structure in this chapter: the _binary tree_. Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array). A tree is made up of a set of _nodes_ connected by _edges_. An example of a tree is a company’s organizational chart each box is a node, and the lines connecting the boxes are the edges. The top node of a tree is called the _root_ node. If a node is connected to other nodes below it, the preceding node is called the _parent_ node, and the nodes following it are called _child_ nodes. A node can have zero, one, or more child nodes connected to it. A node without any child nodes is called a _leaf_ node Special types of trees, called _binary trees_, restrict the number of child nodes to no more than two. Binary trees have certain computational properties that make them very efficient for many operations. A tree can be broken down into _levels_. The root node is at level 0, its children are at level 1, those nodes’ children are at level 2, and so on. A node at any level is considered the root of a _subtree_, which consists of that root node’s children, its children’s children, and so on. We can define the depth of a tree as the number of layers in the tree. Finally, each node in a tree has a value associated with it. This value is sometimes referred to as the key value. a _binary tree_ is one where each node can have no more than two children. By limiting the number of children to two, we can write efficient programs for inserting data, searching for data, and deleting data in a tree. A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes. This property provides for very efficient searches and holds for both numeric data and non-numeric data, such as words and strings.