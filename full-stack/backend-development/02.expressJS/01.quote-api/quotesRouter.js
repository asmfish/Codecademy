const express = require('express');

const { quotes } = require('./data');
const { getRandomElement, getQuoteByPerson, getQuoteByID, addNewQuote, updateQuote, deleteQuote } = require('./utils');

//define quotes router
const quotesRouter = express.Router();

/**
 * GET /api/quotes/random
 * GET http://localhost:4001/api/quotes/random
 * This route returns random quote and response should be JSOn format.
 * Response body: { quote: randomQuote }
 */
quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

/**
 * GET /api/quotes
 * GET http://localhost:4001/api/quotes?person=Grace Hopper
 * If no query parameters, returns all quotes.
 * If there is query parameter 'person', return all quotes said by that person.
 * Response body: { quotes: [] }
 */
quotesRouter.get('', (req, res, next) => {
    const { person } = req.query;
    if(person){
        const quotesByPerson = getQuoteByPerson(quotes, person);
        res.send({ quotes: quotesByPerson });
    }
    else{
        res.send({ quotes: quotes });
    }
})

/**
 * GET /api/quotes/:id
 * GET http://localhost:4001/api/quotes/2
 */
quotesRouter.get('/:id', (req, res, next) => {
    const quote = getQuoteByID(quotes, req.params.id);
    if(quote){
        res.send({quote: quote});
    }
    else{
        res.status(404).send();
    }
});

/**
 * POST /api/quotes
 * POST http://localhost:4001/api/quotes?quote=test&person=asmo&year=2024
 * Data is passed using query string quote=&person=
 * If query parameters exist, add the new quote to the list and send back the new quote.
 * Response body: { quote: newQuote }
 * Otherwise return status 400
 */
quotesRouter.post('', (req, res, next) => {
    const { quote, person, year } = req.query;
    if(quote && person){
        const newQuote = addNewQuote(quotes, {quote, person, year})
        res.status(201).send({ quote: newQuote })//new resource created
    }
    else{
        res.status(400).send({error: 'The request data is not valid.'});//bad request
    }
});

/**
 * PUT /api/quotes/:id
 * PUT http://localhost:4001/api/quotes/10?quote=test&person=asmo
 * Updates a specific quote, id from request params and updated quote from query parameters.
 * Send updated quote back
 * Otherwise send 400.
 */
quotesRouter.put('/:id', (req, res, next) => {
    const { quote, person, year } =  req.query;
    const quoteId = req.params.id;

    if(quoteId && quote && person && year){
        const updatedQuote = updateQuote(quotes, quoteId, req.query)
        if(updatedQuote){
            res.send({message: `Quote with id [${quoteId}] updated successfully.`});
        }
        else{
            res.status(401).send({error: `Quote with id [${quoteId}] not found.`});
        }
    }
    else{
        res.status(400).send({error: 'The request data is not valid. Make sure that request includes quote, person and year.'});
    }
});

/**
 * DELETE /api/quotes/:id
 * DELETE http://localhost:4001/api/quotes/10
 * Deletes a quote based on id
 */
quotesRouter.delete('/:id', (req, res, next) => {
  const quoteId = req.params.id;
  if (deleteQuote(quotes, quoteId)) {
    //res.status(204).send();
    res.send({message: `Quote with id [${quoteId}] deleted successfully.`});
  } else {
    res.status(404).send({error: `Quote with id [${quoteId}] not found.`});
  }
});


module.exports = quotesRouter;