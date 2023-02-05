const quotes = [
    {
        quote: "Cease, every joy, to glimmer on my mind, But leave---oh! leave the light of Hope behind.",
        author: "Thomas Campbell",
    },
    {
        quote: "Common sense is the best sense I know of.",
        author: "Lord Chesterfield",
    },
    {
        quote: "The rest is silence.",
        author: "William Shakespeare",
    },
    {
        quote: "The strictest law sometimes becomes the severest injustice.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Never hold discussions with the monkey when the organ grinder is in the room.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "I hope the leaving is joyful; and I hope never to return.",
        author: "Frida Kahlo",
    },
    {
        quote: "Power corrupts. Absolute power is kind of neat.",
        author: "John Lehman",
    },
    {
        quote: "Energy is eternal delight.",
        author: "William Blake",
    },
    {
        quote: "Endless money forms the sinews of war.",
        author: "Cicero",
    },
    {
        quote: "Change is the constant, the signal for rebirth, the egg of the phoenix.",
        author: "Christina Baldwin",},
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;