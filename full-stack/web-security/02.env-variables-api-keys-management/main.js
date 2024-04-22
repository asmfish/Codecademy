//npm install dotenv
//Import the dotenv package
import dotenv from "dotenv";

// Inject your environment variables into `process.env`
//'process.env is an object containig all environment variables as key-value pair
dotenv.config(); 

console.log(process.env);

// Print out your environment variables
console.log(process.env.PROGRAM_NAME); 
console.log(process.env.ZIP_CODE); 