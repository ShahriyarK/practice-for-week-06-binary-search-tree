// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // check if the tree is empty
    // if (!this.root) {
    //   this.root = new TreeNode(val);
    //   return;
    // }
    // // we will check subtrees recursively to identify where to insert the node
    // // base case
    // // we don't need to return anything explicitly as stackframes that pop will return
    // // undefined and thats fine we are only adding nodes recursively
    // if (val < currentNode.val) {
    //   if (!currentNode.left) currentNode.left = new TreeNode(val);
    //   else this.insert(val, currentNode.left);
    // } else {
    //   if (!currentNode.right) currentNode.right = new TreeNode(val);
    //   else this.insert(val, currentNode.right);
    // }


    // Iterative approach
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    const newNode = new TreeNode(val);
    while (currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        else currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        else currentNode = currentNode.right;
      }
    }
  }

  search(val) {
    // Your code here
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
