const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

function selectImg() {}

const bgImg = document.createElement("img");

// bgImg.src = `img/${randomImg}`;

// document.body.appendChild(bgImg);

document.body.style.background = `url(img/${randomImg}) `;
