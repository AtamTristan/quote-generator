const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const autherTecxt = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = []; //when using an api


function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}


function removeLoadingSpinner(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

/* For getting it from quotes.js
// Show new Quote
const localQuotes = require('./quotes');
*/


function newQuote(){
    showLoadingSpinner();

    // Pick a random quote from apiQuotes array, localQuotes with quotes.js
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author){
        autherTecxt.textContent = 'Unknown'
    }else {
        autherTecxt.textContent = quote.author;
    }

    // Check Quote length to determine styling
    if (quote.text.length > 120){{
        quoteText.classList.add('long-quote');
    }} else {
        quoteText.classList.remove('long-quote');
    }

    // Set Quote, Hide Loader

    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

//newQuote();



// Get quotes From Api
async function getQuotes(){
    showLoadingSpinner();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await  fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here, optional alert(error);
    }
}

// Tweet a quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${autherTecxt.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
