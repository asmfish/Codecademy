//Randomly generate runner number between 0 and 1000.
let raceNumber = Math.floor(Math.random() * 1000);

//Input data
/*
  Flag if runner registered early (default=flase)
  early = true, late = false
*/
let isRegisteredEarly = true;
//Runner age
let runnerAge = 28;

if(runnerAge > 18 && isRegisteredEarly){
  raceNumber += 1000;
}

if(runnerAge > 18 && isRegisteredEarly){
  console.log(`Your race number is ${raceNumber} and race time is 9:30 am.`);
}
else if(runnerAge > 18 && !isRegisteredEarly){
   console.log(`Your race number is ${raceNumber} and race time is 11:00 am.`);
}
else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and race time is 12:30 am.`);
}
else {//age = 18
  console.log('Please go to the registration desk!')
}


