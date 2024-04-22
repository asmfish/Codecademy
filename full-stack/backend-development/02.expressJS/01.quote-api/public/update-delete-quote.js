const updateQuoteButton = document.getElementById('update-quote');
const deleteQuoteButton = document.getElementById('delete-quote');

const quotesList = document.getElementById('quotes');
const quoteStatus = document.getElementById('quote-status');

const quoteInput = document.getElementById('quote');
const personInput = document.getElementById('person');
const yearInput = document.getElementById('year');

const populateList = () => {
  fetch('/api/quotes')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            renderError(response);
        }
    })
    .then(response => {
        resetInputs();
        if (response.quotes.length > 0) {
            response.quotes.forEach(quote => {
                quotesList.add(new Option(quote.id, quote.id));
            });
          }
    });
}

const resetInputs = () =>{
    quotesList.length = 0;//removes all previous options
    quotesList.add(new Option("Select quote", ""));
    quoteInput.value = "";
    personInput.value = "";
    yearInput.value = "";
}

//populate combobox after document loaded
window.addEventListener("load", populateList());

const renderError = response => {
    response.then(data => {
        quoteStatus.innerHTML = `<p>Your request returned an error from the server: </p>
        <p>Error: ${data.error}</p>`;
    });
}

const renderMessage = response => {
    response.then(data => {
        quoteStatus.innerHTML = `
        <p>Message: ${data.message}</p>
        <p>Go to the <a href="index.html">home page</a> to request and view changes.</p>`;
    })
    populateList();//refresh to get latest updates
}

//api fetch quote by id
quotesList.addEventListener('change', () => {
    const quoteId = quotesList.value;
  
    fetch(`/api/quotes/${quoteId}`)
    .then(response => response.json())
    .then(({quote}) => {
        quoteInput.value = quote.quote;
        personInput.value = quote.person;
        yearInput.value = quote.year;
    });
});

//api delete quote by id
deleteQuoteButton.addEventListener('click', () => {
    const quoteId = quotesList.value;
    if(!quoteId){
        alert('Please select a quote to delete!')
    }
    else{
        fetch(`/api/quotes/${quoteId}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if(response.ok){
                renderMessage(response.json());
                
            }
            else{
                renderError(response.json());
            }
        });
    }
});

//api update quote by id
updateQuoteButton.addEventListener('click', () => {
    const quoteId = quotesList.value;
    const quote = quoteInput.value;
    const person = personInput.value;
    const year = yearInput.value;

    if(!quoteId){
        alert('Please select a quote to delete!')
    }
    else{
        fetch(`/api/quotes/${quoteId}?quote=${quote}&person=${person}&year=${year}`, {
            method: 'PUT',
        })
        .then((response) => {
            if(response.ok){
                renderMessage(response.json());
                
            }
            else{
                renderError(response.json());
            }
        });
    }
});
