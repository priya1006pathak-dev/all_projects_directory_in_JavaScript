let quoteText = document.querySelector(".quote-text");
let button = document.querySelector("button");

let quotes = [
  "Believe in yourself.",
  "Never give up on your dreams.",
  "Practice makes perfect.",
  "Every day is a new opportunity.",
  "Success comes from hard work.",
  "Learn something new every day.",
  "Dream big and work hard.",
];

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.textContent = quotes[randomIndex];
});
