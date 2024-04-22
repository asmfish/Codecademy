const { quotes } = require("./data");

//method to get random quote
const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

//method to get quotes by person
const getQuoteByPerson = (quotes, person) => {
  return quotes.filter(q =>  q.person === person);
}

//get quote by id
const getQuoteByID = (quotes, quoteId) => {
  const quote = quotes.find(q => q.id == quoteId);
  return quote;
}

//method to add new quote
const addNewQuote = (quotes, quoteData) => {
  const newQuoteId = quotes[quotes.length - 1].id + 1;//generate id for the new quote
  const {quote, person, year } = quoteData;
  quotes.push({id: newQuoteId, quote, person, year});
  return quotes[quotes.length - 1];
}

//method to update a quote
const updateQuote = (quotes, quoteId, quoteData) =>{
  const quoteToUpdate = quotes.find(q => q.id == quoteId);
  const {quote, person, year} = quoteData;
  if(quoteToUpdate){
      quoteToUpdate.quote = quote;
      quoteToUpdate.person = person;
      quoteToUpdate.year = year;
      return quoteToUpdate;
  }
  else{
      return undefined;
  }
}

//method to delete a quote by id
const deleteQuote = (quotes, quoteId) =>{
  const quoteIndex = quotes.findIndex(q => q.id == quoteId);
  if (quoteIndex !== -1) {
    quotes.splice(quoteIndex, 1);//splice modifies the array, slice creates a new copy
    return true;
  } else {
    return false;
  }
}


module.exports = {
  getRandomElement,
  getQuoteByPerson,
  addNewQuote,
  updateQuote,
  deleteQuote,
  getQuoteByID
};
