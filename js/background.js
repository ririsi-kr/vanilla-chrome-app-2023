// const images = ["0.jpg', '1.jpg', '2.jpg'];
const bodyImg = document.getElementById('bd');

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// // const bgImage = document.createElement('img');

// // bgImage.src = `img/${chosenImage}`;

// // document.body.appendChild(bgImage);

// bodyImg.style.backgroundImage = `img/${chosenImage}`;

const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const firstPickColors = colors[Math.floor(Math.random() * colors.length)];
const lastPickColors = colors[Math.floor(Math.random() * colors.length)];

bodyImg.style.backgroundImage = `linear-gradient( to left, ${firstPickColors},${lastPickColors})`;

// ~   if (a === b) {
// ~     return submit();
