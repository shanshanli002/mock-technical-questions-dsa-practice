class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find the correct spot for the new node.
    var current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root == null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      } else {
        this.insertRecursively(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      } else {
        this.insertRecursively(val, currentNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val == val) {
        return currentNode;
      }

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (this.root == null) {
      return undefined;
    }

    if (val < currentNode.val) {
      if (current.left === null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.left);
    } else if (val > currentNode.val) {
      if (currentNode.right == null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.right);
    }

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    //visit node, left, then right
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    //left, current, then right

    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
      data.push(node.val); // visit
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
