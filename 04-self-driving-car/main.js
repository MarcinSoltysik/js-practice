const canvas = document.getElementById('myCanvas');
canvas.height = 700;
canvas.width = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
car.draw(ctx);
