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
    // Also the insertion in both cases in log(n) because we are moving down the levels only
    // i.e. in worst case, we move down the whole height of the tree which is log(n)
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    const newNode = new TreeNode(val);
    while (currentNode) {
      if (val < currentNode.val) {
        // check the left subtree
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        } else currentNode = currentNode.left;
      } else {
        // check the right subtree
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else currentNode = currentNode.right;
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    if (!currentNode) return false;

    while (currentNode) {
      // if the target is found return true
      if (val === currentNode.val) {
        return true;
      } else if (val < currentNode.val) {
        // if target is less than current node, search the left subtree
        currentNode = currentNode.left;
      } else {
        // if the target is greater than current node, search the right subtree
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  //recursive search
  // search(val, currentNode = this.root) {
  //   if (!currentNode) return false;
  //   if (currentNode.val === val) return true;
  //   // if the target is less than current node, recursively search left subtree
  //   if (val < currentNode.val) return this.search(val, currentNode.left);
  //   // else if target is greater than current node, recursively search right subtree
  //   else return this.search(val, currentNode.right);
  // }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
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
