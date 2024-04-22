class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
    
    /**
     * To add new node to a tree first we need to make sure that the input is normal data or TreeNode object
     * 1. If the input data is instance of TreeNode then push it to the children array
     * 2. If the data is other than TreeNode object for example string, then create a new TreeNode object and add it to the children
     */
    addChildToTree(child) {
      if (child instanceof TreeNode) {
        this.children.push(child);
      } else {
        this.children.push(new TreeNode(child));
      }
    }
    
    /**
     * Removing a child involves the following
     * 1. First filter the children array based on the childToremove and assign it back to the children array.
     * 2. To make sure that an element is removed, we keep track of the original children length and compare it to the length of filtered children.
     * 3. If the length match, that means the element was not removed, i.e not found, so we need to further dive to each children and 
     * remove the childToRemove. we used recursion.
     */
    removeChildFromTree(childToRemove){//removes duplicates also
      const length = this.children.length;
      this.children = this.children.filter(child => {
        if (childToRemove instanceof TreeNode) {
          return childToRemove !== child;
        } else {
          return child.data !== childToRemove;
        }
      });
      
      //i.e, childToRemove was not removed by the above filter, so we need loop each child and remove
      //this continues until we remove the child or reach the end of the tree.
      if(length === this.children.length){
        this.children.forEach(child => child.removeChildFromTree(childToRemove));
      }
    }

    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
          result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }

    /**
     * In depth first traversal we first visit the first child and its children before visiting its siblings.
     */
    traverseByDepthFirst(){
        console.log(this.data);
        this.children.forEach(child => child.traverseByDepthFirst());
    }

    /**
     * 
     */
    traverseByBreadthFirst(){
        let queue = [this];//array of current node
        while(queue.length > 0){
          const current = queue.shift();
          console.log(current.data);
          queue = queue.concat(current.children);
        }
    }
  };
  
  module.exports = TreeNode;