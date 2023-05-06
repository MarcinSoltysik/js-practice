'use strict';

const canvas = document.getElementById('myIdCanvas');
const ctx = canvas.getContext('2d');

// // starts a new path for the shape to be drawn on the canvas.
// ctx.beginPath();

// // defines the rectangle's
// // the first two arguments (20, 40) specify the top-left corner's position
// // the last two arguments (50, 50) specify the width and height
// ctx.rect(20, 40, 50, 50);

// ctx.fillStyle = '#FF0000'; // sets the fill color of the rectangle to red,
// ctx.fill(); // fills the rectangle with the fill color specified above.
// ctx.closePath(); // ends the path of the rectangle shape.

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = 'green';
// // Instead of using fill() and filling the shapes with colors, we can use stroke() to only color the outer stroke.
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = 'rgba(0,0,255, 0.5)';
// ctx.stroke();
// ctx.closePath();

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawing code
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);
