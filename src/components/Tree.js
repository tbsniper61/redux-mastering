class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

class Tree {
  constructor(name) {
    const root = new Node(name);
    this.root = root;
  }
}

Tree.prototype.add = function(name, parentNode) {
  const node = new Node(name);
  const parent = parentNode ? this.findBFSS(parentNode) : null;

  if (parent) parent.push(node);
  else {
    if (!this.root) this.root = node;
    else return 'Error';
  }
}

Tree.prototype.contains = (name) => this.findBFSS(name ? true : false)

Tree.prototype.findBFSS = (name) => {
  console.log('node')
  var queue = [this.root];
  while(queue.length) {
    let node = queue.shift();
    if (node.name === name) return node;
    for (let i = 0; i < node.children.length; i++) queue.push(node.children[i]);
  }
  return null;
}

export default Tree;