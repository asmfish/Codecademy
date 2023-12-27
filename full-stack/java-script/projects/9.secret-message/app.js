let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log('Initial length: ' + secretMessage.length);
//Remove last
secretMessage.pop();
console.log(secretMessage.length);

//Add
secretMessage.push('to', 'program');
console.log(secretMessage.length);

//Change
secretMessage[7] = 'right';

//Remove first
secretMessage.shift();
console.log(secretMessage.length);

//Add first
secretMessage.unshift('Programming');
console.log(secretMessage.length);

//Remove multiple
secretMessage.splice(6, 5, "know");
console.log(secretMessage.length);

//Print
console.log(secretMessage.join(' '));


