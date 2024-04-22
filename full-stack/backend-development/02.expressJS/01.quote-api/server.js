const express = require('express');
const app = express();
const quotesRouter = require('./quotesRouter.js');

const PORT = process.env.PORT || 4001;

//express serves static files in the public folder (index.html will be server at /)
app.use(express.static('public'));

//mount the quotesRouter on /api/quotes
app.use('/api/quotes', quotesRouter);

//start the server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});