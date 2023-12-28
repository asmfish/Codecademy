function getSleepHours (day) {
  let sleepHours = 0;
  switch(day.toLowerCase()){
    case 'monday':
      sleepHours = 8;
      break;
     case 'tuesday':
      sleepHours = 6;
      break;
     case 'wednesday':
      sleepHours = 7;
      break;
     case 'thursday':
      sleepHours = 5;
      break;
     case 'friday':
      sleepHours = 8;
      break;
     case 'saturday':
      sleepHours = 8;
      break;
     case 'sunday':
      sleepHours = 8;
      break;
  }

  return sleepHours;
}

//console.log(getSleepHours('Monday'));

const getActualSleepHours = () => {
  /*return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  */
  let monday = 8, tuesday = 6, wednesday = 7,
    thursday = 5, friday = 8, saturday = 8, sunday = 8;

  return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
}

//console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => idealHours * 7;

//console.log(getIdealSleepHours(8));

function calculateSleepDebt(){
  let actualSleepHours  = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours){
    console.log('You got perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log(`You got more sleep than needed.\nYou slept ${actualSleepHours - idealSleepHours} hours over the ideal sleep, whic is ${idealSleepHours} hours.`);
  }
  else{
    console.log(`You should get some rest.\nYou slept ${idealSleepHours - actualSleepHours} hours lower than the ideal sleep, which is ${idealSleepHours} hours.`)
  }
}

calculateSleepDebt();



