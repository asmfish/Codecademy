//My human age
var myAge = 36;

//Early 2 year of a human are 10.5 dog years each
var earlyYears = 2;
earlyYears *= 10.5;

//Later years equals MyAge minus early years
var laterYears = myAge - 2;

//Each later year is considered as 4 dog years
laterYears *= 4;

console.log('EarlyYears: ' + earlyYears);
console.log('LaterYears: ' + laterYears);

//My human age in dog years
var myAgeInDogYears = earlyYears + laterYears;

//My name as capital letters
var myName = 'Asmerom'.toUpperCase();

//Output results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

