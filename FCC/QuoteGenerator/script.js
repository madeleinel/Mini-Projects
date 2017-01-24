// create an array containing the quotes to be called upon
var quotes = [
  '\"I haven\'t been everywhere, but it\'s on my list\"',
  '\“For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.\”',
  '\“Traveling – it leaves you speechless, then turns you into a storyteller.\”',
  '\“We travel, some of us forever, to seek other places, other lives, other souls.\”',
  '\'“The gladdest moment in human life, me thinks, is a departure into unknown lands.\”',
  '\“We travel not to escape life, but for life not to escape us.\”',
  '\“The man who goes alone can start today; but he who travels with another must wait till that other is ready.\”',
  '\'“The life you have led doesn’t need to be the only life you have.\”'
]

// create an array containing the author of each quote
var authors = [
  '– Susan Sontag',
  '– Robert Louis Stevenson',
  '– Ibn Battuta',
  '– Anais Nin',
  '– Sir Richard Burton',
  '– Anonymous',
  '– Henry David Thoreau',
  '– Anna Quindlen'
]

// set up function to retrieve the random quotes when clicking the button

function newQuote() {

// generate a random integer, to use to call on the quotes within the array
// 1) .random generates a random decimal (0-1)
// 2) multiplying the decimal with the number of quotes within the array, to get an index for them >> so won't generate index that doesn't exist within the array
// 3) .floor rounds it down to the closest integer
var randomNumber = Math.floor(Math.random() * (quotes.length));

// use the random integer to call on quotes within the array
// 1) direct the function to the 'quoteDisplay' div
// 2) use .innerHTML to pass the retrieved quote as the value to add into the 'quoteDisplay' div
// 3) set .innerHTML to the 'quotes' array, calling on the quote at the index of 'randomNumber'
//  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

  document.getElementById('quoteText').innerHTML = quotes[randomNumber];

  document.getElementById('quoteAuthor').innerHTML = authors[randomNumber];

}
