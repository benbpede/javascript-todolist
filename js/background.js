const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

function selectImg() {}

const bgImg = document.createElement("img");

// bgImg.src = `img/${randomImg}`;

// document.body.appendChild(bgImg);

document.body.style.background = `url(img/${randomImg}) `;

//다크모드
const body = document.querySelector("body");
const white = document.querySelector("#whiteBtn");
const black = document.querySelector("#blackBtn");

black.addEventListener("click", darkMode);
white.addEventListener("click", whiteMode);

function darkMode() {
  body.style = "";
  body.classList.add("dark");
}

function whiteMode() {
  document.body.style.background = `url(img/${randomImg}) `;
  body.classList.remove("dark");
}
