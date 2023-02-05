const quotes = [
  {
    quote:
      "Cease, every joy, to glimmer on my mind, But leave---oh! leave the light of Hope behind.",
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
    quote:
      "Never hold discussions with the monkey when the organ grinder is in the room.",
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
    quote:
      "Change is the constant, the signal for rebirth, the egg of the phoenix.",
    author: "Christina Baldwin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//* 1. 배열에 담긴 명언을 랜덤 순서로 나태내기 : "Math.random()"
//? Math.random() : 0부터 1 사이의 랜덤한 숫자를 제공 ex) 0.4475088501467208 , 0.800.., 0.2..
//? Math.random() * 숫자 : 명언이 8개 이므로 8을 곱해준 숫자들 사이에서 랜덤을 실행한다.

//* 2. 문제가 있는데 숫자 뒤에 소수점이 길게 붙는다. floatf를 integer을 변환해주자 : "Math.floor(숫자)"
//? Math.round(): *반올림: 0.1~0.4까지는 내림 , 0.5~0.9는 올림 ex) Math.round(1.4)->1, (1.7)->2
//? Math.ceil(): *올림 'ceil':천장 ex) 1.1->2 , 1.9->2
//? Math.floor(): *내임 'floor':마루 ex) 1.9->1, 1.999->1
