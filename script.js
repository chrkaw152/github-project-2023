// An array of quotes from Genshin Impact characters
const quotes = [
  "Only innocent children and timid adults are scared of thunder. But you're not either of those... are you? - Yelan",
  "I'm not a god. I'm just an ordinary human who chose to become a chef. - Xiangling",
  "I'm not here to cause trouble, I swear. I just want to borrow some books. - Lisa",
  "I'm not a bad slime! I'm a good slime! - Paimon",
  "I will have order. - Zhongli",
];

function generate() {
  var index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

var quote = document.getElementById("q");
var button = document.getElementById("btn");


button.addEventListener("click", function() {
  quote.textContent = generate();
});
