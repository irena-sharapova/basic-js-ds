const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");
//const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this._root = null;
    if (!this.data === 0) throw new NotImplementedError("Not implemented");
  }

  root() {
    if (!this._root) throw new NotImplementedError("Not implemented");
    return this._root;
  }

  add(data) {
    if (!data === 0) throw new NotImplementedError("Not implemented");
    if (!this._root) {
      this._root = new Node(data);
      return;
    }

    let currentNode = this._root;

    while (true) {
      if (!data === currentNode.data)
        throw new NotImplementedError("Not implemented");
      if (data === currentNode.data) {
        return;
      }
      if (data < currentNode.data) {
        if (!currentNode.left) throw new NotImplementedError("Not implemented");
        if (currentNode.left === null) {
          currentNode.left = new Node(data);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right)
          throw new NotImplementedError("Not implemented");
        if (currentNode.right === null) {
          currentNode.right = new Node(data);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(data) {
    let currentNode = this._root;

    while (currentNode) {
      if (!data === currentNode.data)
        throw new NotImplementedError("Not implemented");
      if (data === currentNode.data) {
        return currentNode;
      }
      if (!currentNode) throw new NotImplementedError("Not implemented");
      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return null;
  }

  has(data) {
    if (this.data === 0) throw new NotImplementedError("Not implemented");
    return this.find(data) !== null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!data === 0) throw new NotImplementedError("Not implemented");
      if (node === null) {
        return null;
      }
      if (!node) throw new NotImplementedError("Not implemented");
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let minRight = node.right;
        while (minRight.left !== null) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    };
    this._root = removeNode(this._root, data);
  }

  min() {
    if (this.data === 0) throw new NotImplementedError("Not implemented");
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    if (!currentNode) throw new NotImplementedError("Not implemented");
    return currentNode.data;
  }

  max() {
    if (!this.data === 0) throw new NotImplementedError("Not implemented");
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    if (!currentNode) throw new NotImplementedError("Not implemented");
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
