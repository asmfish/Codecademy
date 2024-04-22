const TreeNode = require('./TreeNode');

const techStack = new TreeNode('TechStack');

const data = {
  'Frontend' : [ 'HTML', 'CSS', 'Java', 'React' ],
  'Backend ' : [ 'PHP', 'Python', 'Java Script', 'Node JS' ]
};

const stacks = Object.keys(data);
for (let i=0; i < stacks.length; i++){
    techStack.addChildToTree(stacks[i]);
  const languages = data[stacks[i]];
  languages.forEach( lang => {
    techStack.children[i].addChildToTree(lang);
  });
}

console.log('----Incorrect Tech Stack----');
techStack.print();

/**
 * Java and Java script are not in the correct place, so we need to arrange the tree
 */


/**
 * 1. First remove Java from Frontend
 * 2. Then add Java to Backend
 */
techStack.removeChildFromTree("Java");
techStack.children[1].addChildToTree("Java");

/**
 * 1. First remove Java Script from Backend
 * 2. Then add Java Script to Frontend
 */
techStack.removeChildFromTree("Java Script");
techStack.children[0].addChildToTree("Java Script");

console.log('----Corrected Tech Stack----');
techStack.traverseByDepthFirst();
