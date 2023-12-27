//Constant kelvin value
const kelvin = 293;

//Celsius is kelvin - 273
const celsius = kelvin - 273;

//Fahrenheit is celsius * (9/5) + 32
var fahrenheit = celsius * (9/5) + 32;

//Round down the fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Display result
console.log(`The temprature is ${fahrenheit} degrees Fahrenheit`);

//Newton scale
var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temprature ${celsius} is ${newton} in newtons scale.`)


