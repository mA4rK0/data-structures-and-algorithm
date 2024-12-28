/*
  Node :
  *1. data (property) = Value of node
  *2. left (property) = Reference to left node
  *3. right (property) = Reference to right node
  *4. show (function) = returns the value of node

  BST :
  *1. root (property) = a Node object that represents the root node of the BST
  *2. insert (function) = inserts and make a new node
  *3. getMin (function) = returns the minimum value of the BST
  *4. getMax (function) = returns the maximum value of the BST
  *5. find (function) = returns a Node object that contains the item specified by the user
  *6. remove (function) = removes the node that contains the item specified by the user
  *7. removeNode (function) = removes the node that contains the item specified by the user after a remove function

  insert function is complex and requires explanation. The first step in the function is to create a Node object, passing in the data the node will store. The second step in insertion is to check the BST for a root node. If a root node doesn’t exist, then the BST is new and this node is the root node, which completes the function definition. Otherwise, the function moves to the next step. If the node being inserted is not the root node, then we have to prepare to traverse the BST to find the proper insertion point. This process is similar to traversing a linked list. The function uses a Node object that is assigned as the current node as the function moves from level to level in the BST. The function also has to position itself inside the BST at the root node. Once inside the BST, the next step is to determine where to put the node. This is performed inside a loop that breaks once the correct insertion point is determined. The algorithm for determining the corrent insertion point for a node is as follows:
    *1. Set the root node to be the current node.
    *2. If the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
    *3. If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
    *4. Set the current node to be the right child of the current node.
    *5. If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.

  Traversing :
  We need to be able to traverse the BST so that we can display the data in different orders, such as numeric or alphabetic order. There are three traversal functions used with BSTs: inorder, preorder, and postorder. An inorder traversal visits all of the nodes of a BST in ascending order of the node key values (left -> root -> right). A preorder traversal visits the root node first, followed by the nodes in the subtrees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node (root -> left -> right). A postorder traversal visits all of the child nodes of the left subtree up to the root node, and then visits all of the child nodes of the right subtree up to the root node (left -> right -> root).

  *1. inOrder function = Traverse the left subtree, visit the root node, and then traverse the right subtree.
  *2. preOrder function = Visit the root node, then traverse the left subtree, and finally traverse the right subtree.
  *3. postOrder function = Traverse the left subtree, traverse the right subtree, and then visit the root node.
*/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  getMin() {
    let current = this.root;
    while (!(current.left === null)) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    while (!(current.right === null)) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    let root = removeNode(this.root, data);
    return root;
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let tempNode = getMin(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  }
}

function inOrder(node) {
  if (!(node === null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node === null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node === null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
