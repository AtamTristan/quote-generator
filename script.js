const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const autherTecxt = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = []; //when using an api

/* For getting it from quotes.js
// Show new Quote
const localQuotes = require('./quotes');
*/


function newQuote(){
    // Pick a random quote from apiQuotes array, localQuotes with quotes.js
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    autherTecxt.textContent = quote.author;
    quoteText.textContent = quote.text;
}

//newQuote();



// Get quotes From Api
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await  fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here, optional alert(error);
    }
}

// On Load
getQuotes();
