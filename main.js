const quoteText = document.querySelector('.quote-text');
const newQuoteBtn = document.querySelector('.new-quote-btn');

// Load quotes from your local .txt file
fetch('quotes.txt')
    .then(response => response.text())
    .then(data => {
        const quotes = data.split('\n')
            .map(line => line.replace(/^\d+\.\s/, '')) // Remove serial numbers
            .filter(quote => quote.trim() !== ''); // Remove empty lines

        newQuoteBtn.addEventListener('click', () => {
            if (quotes.length > 0) {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];
                quoteText.textContent = randomQuote;
            } else {
                quoteText.textContent = "No quotes available";
            }
        });
    })
    .catch(error => {
        console.error('Error loading quotes:', error);
    });
