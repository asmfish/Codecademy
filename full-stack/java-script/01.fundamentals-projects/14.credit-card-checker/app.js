// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCredit(arrCardNum){
  let sum = 0;

  for(let i = arrCardNum.length - 2; i >= 0 ; i -=2 ){
      let double = arrCardNum[i] * 2;
      if(double > 9){
        double -= 9;
      }
      sum += double;
  }

  for(let i = arrCardNum.length - 1; i >= 0 ; i -=2 ){
    sum += arrCardNum[i]
  }

  return sum % 10 === 0 ? true: false;
};

function findInvalidCards(arrCards){
  const invalidCards = arrCards.filter(card =>{
    return validateCredit(card)? false: true;
  });

  return invalidCards;
}

function idInvalidCardCompanies(arrInvalidCards){
  const companyIds = arrInvalidCards
  .map(arrCardNum =>{
    return arrCardNum[0];
  })
  .filter((x, i, a) => a.indexOf(x) == i);//filters unique (value, index, array)
  return companyIds.map(id =>{
    let companyName = ''
    switch(id){
      case 3:
        companyName = 'Amex (American Express)';
        break;
      case 4:
        companyName = 'Visa';
        break;
      case 5:
        companyName = 'MasterCard';
        break;
      case 6:
        companyName = 'Discover';
        break;
      default:
        companyName = 'Company not found';
    }
    return companyName;
  });
}

//Check each card one by one.
console.log('=======Check all cards===========');
batch.forEach(card =>{
  console.log(`Card: ${card.join('')} Valid: ${validateCredit(card)}`);
})

//Show invalid cards
console.log('=======Show invalid cards===========');
findInvalidCards(batch).forEach(card =>{
  console.log(`Card: ${card.join('')}`);
})

//Show companies of invalid companies
console.log('=======Show invalid card companies===========');
console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//Additional challenge
console.log('=========Additional challenge==========');
console.log('=========check valid cards from site==========');
const convertStrToArray = str =>{
  return str.split('').map(Number);

}
const creditCardNumbers = [
  '4532332991067220',
  '5270901962189404',
  '372191005686727',
  '6011925518894417',
]

const batch2 = creditCardNumbers.map(convertStrToArray);
//console.log(batch2)
//Check each card one by one.
batch2.forEach(card =>{
  console.log(`Card: ${card.join('')} Valid: ${validateCredit(card)}`);
})









