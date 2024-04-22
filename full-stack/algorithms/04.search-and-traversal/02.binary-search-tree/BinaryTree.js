	class BinaryTree {
	  constructor(value, depth = 1) {
		this.value = value;
		this.depth = depth;
		this.left = null;
		this.right = null;
	  }
	  
	  //In binary tree the elemnts which are < than the parent node value are inserted to the left otherwise to the right.
	  //time complexity is O(logN), 
	  //the worst case is O(N) - This worst-case scenario typically occurs when nodes are inserted in sorted order, resulting in a tree with only one branch.
	  insert(value){
		if(value < this.value){//value to insert < than parent node value
		  if(this.left){//then check if left exists, if it exists the call the insert on the left tree to repeat the process
			this.left.insert(value);
		  }
		  else{//if left does not exist then we add new binary tree on the left
			 this.left = new BinaryTree(value, this.depth + 1);
		  }
		}
		else{//if value to insert is > than parent node value
		  if(this.right){//then check if right node exists, if so then call the insert on the right tree
			this.right.insert(value);
		  }
		  else{//if right does not exists then we add new binary tree on the right
			this.right = new BinaryTree(value, this.depth + 1);
		  }
		}
	  }
	  
	  //Search for an element in binary tree - O(logN)
	  getNodeByValue(value){
		if(value === this.value){//if the value is equal to the root value then return that node
		  return this;
		}
		else if(this.left && value < this.value){//if left exists and the value is less than the left node value then call the method with the left node
		  return this.left.getNodeByValue(value);
		}
		else if(this.right){//if left does not exist and right exists then call the method based on the right node
		  return this.right.getNodeByValue(value);
		}
		else{//if no left or right nodes exist then rturn null;
		  return null;
		}
	  }
	  
	 //depth-first-traversal -> inorder (LEFT, ROOT, RIGHT) --results in sorted list from smallest to highest - very important
	 depthFirstTraversal(){
		if(this.left){//if left exists then call the method with the left tree node
		  this.left.depthFirstTraversal();
		}
		console.log(`Depth: ${this.depth} , Value: ${this.value}`);//display traversed values
		if(this.right){//if right exists call the method with the right node
		  this.right.depthFirstTraversal();
		}
	  }
	};

	module.exports = BinaryTree;
	
	/*
	There are two main ways of traversing a binary tree: breadth-first and depth-first. 
	1. With breadth-first traversal, we begin traversing at the top of the tree’s root node,
	displaying its data and continuing the process with the left child node and the right 
	child node. Descend a level and repeat this step until we finish displaying all 
	the child nodes at the deepest level from left to right.
	
	2. With depth-first traversal, we always traverse down each left-side branch of a tree 
	fully before proceeding down the right branch. However, there are three traversal options:

	A. Preorder(ROOT, LEFT, RIGHT) is when we perform an action on the current node first, followed by its left child node and its right child node
	B. Inorder(LEFT, ROOT, RIGHT) is when we perform an action on the left child node first, followed by the current node and the right child node
	C. Postorder(LEFT, RIGHT, ROOT) is when we perform an action on the left child node first, followed by the right child node and then the current node
	*/