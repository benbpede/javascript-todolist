const quotes = [
  { quote: "삶이 있는 한 희망은 있다.", author: "키케로" },
  { quote: "산다는 것, 그것은 치열한 전투다.", author: "로망 로랑" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  { quote: "신은 용기 있는 자를 절대 버리지 않는다.", author: "켄러" },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

function selectQuote() {
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todayQuote.quote;
  author.innerText = ` - ${todayQuote.author}`;
}

selectQuote();
