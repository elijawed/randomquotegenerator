/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of quotes
const quotes = [
  {
    quote:
      'Some people can’t believe in themselves until someone else believes in them first.”',
    source: 'Sean Maguire',
    actor: 'Robin Williams',
    citation: 'Good Will Hunting',
    year: 1997
  },
  {
    quote:
      "It's only after we've lost everything that we're free to do anything.",
    source: 'Tyler Durden',
    actor: 'Brad Pitt',
    citation: 'Fight Club',
    year: 1999
  },
  {
    quote:
      'It is not our abilities that show what we truly are.. it is our choices',
    source: 'Dumbledore',
    actor: 'Richard Harris',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: 2002
  },
  {
    quote:
      "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: 'Ferris Bueller',
    actor: 'Matthew Broderick',
    citation: "Ferris Bueller's Day Off",
    year: 1986
  },
  {
    quote: 'Do, or do not. There is no try.',
    source: 'Yoda',
    actor: undefined,
    citation: 'Star Wars: The Empire Strikes Back',
    year: 1980
  }
];

// Using the length of array quotes to generate a random number.
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Handles the HTML and shows the quote from the quote array.
const printQuote = () => {
  let randomQuote = getRandomQuote(quotes);
  let colors = ['red', 'orange', 'blue', 'green', 'black'];
  let html = '';
  html += `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  // Checking whether the actor property has a value in the quote object.
  randomQuote.actor ? (html += `(${randomQuote.actor})</p>`) : (html += '</p>');
  // Checking whether the citation property has a value in the quote object.
  randomQuote.citation
    ? (html += `<span class="citation">${randomQuote.citation}</span>`)
    : null;
  // Checking whether the year property has a value in the quote object.
  randomQuote.year
    ? (html += `<span class="year">${randomQuote.year}</span>`)
    : null;
  html += '</p>';

  document.querySelector('#quote-box').innerHTML = html;
  document.querySelector('body').style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
};

// Set an interval that calls printQuote if button isn't pressed to automatically change quote shown.
setInterval(printQuote, 20000);

// When the "show another quote button is clicked, show random quote"
document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);
