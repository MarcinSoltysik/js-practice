# 2D-Breakout-game

This is a simple Breakout game written entirely in pure JavaScript and rendered on HTML <canvas>.

### Details:

- Create the Canvas and draw on it
- Move the ball
- Bounce off the walls
- Paddle and keyboard controls
- Game over
- Build the brick field
- Collision detection
- Track the score and win
- Mouse controls
- Finishing up

1. Create the Canvas and draw on it

starts a new path for the shape to be drawn on the canvas.
ctx.beginPath();

defines the rectangle's
the first two arguments (20, 40) specify the top-left corner's position
the last two arguments (50, 50) specify the width and height

ctx.rect(20, 40, 50, 50);

ctx.fillStyle = '#FF0000'; // sets the fill color of the rectangle to red,
ctx.fill(); // fills the rectangle with the fill color specified above.
ctx.closePath(); // ends the path of the rectangle shape.

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI \* 2, false);
ctx.fillStyle = 'green';
// Instead of using fill() and filling the shapes with colors, we can use stroke() to only color the outer stroke.
ctx.fill();
ctx.closePath();

2. Move the ball

The draw() function will be executed within setInterval every 10 milliseconds:

function draw() {
// drawing code
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI \* 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}
setInterval(draw, 10)

First, instead of a hardcoded position at (50,50) we will define a starting point at the bottom center part of the Canvas in variables called x and y, then use those to define the position the circle is drawn at.

You won't notice the ball being repainted constantly at the moment, as it's not moving. Let's change that. First, instead of a hardcoded position at (50,50) we will define a starting point at the bottom center part of the Canvas in variables called x and y, then use those to define the position the circle is drawn at.

First, add the following two lines above your draw() function, to define x and y:

let x = canvas.width / 2;
let y = canvas.height - 30;

Next update the draw() function to use the x and y variables in the arc() method, as shown in the following highlighted line:

Now comes the important part: we want to add a small value to x and y after every frame has been drawn to make it appear that the ball is moving. Let's define these small values as dx and dy and set their values to 2 and -2 respectively. Add the following below your x and y variable definitions:

let dx = 2; // 1 number - spedd
let dy = -2; // 0

The last thing to do is to update x and y with our dx and dy variable on every frame, so the ball will be painted in the new position on every update. Add the following two new lines indicated below to your draw() function:

The ball is leaving a trail because we're painting a new circle on every frame without removing the previous one. Don't worry, because there's a method to clear canvas content: clearRect(). This method takes four parameters: the x and y coordinates of the top left corner of a rectangle, and the x and y coordinates of the bottom right corner of a rectangle. The whole area covered by this rectangle will be cleared of any content previously painted there.

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI \* 2);
ctx.fillStyle = '#0095DD';
ctx.fill();
ctx.closePath();
x += dx;
y += dy;
}
setInterval(draw, 10);

3. Bounce off the walls

There are four walls to bounce the ball off — let's focus on the top one first. We need to check, on every frame, whether the ball is touching the top edge of the Canvas — if yes, we'll reverse the ball movement so it will start to move in the opposite direction and stay within the visible boundaries. Remembering that the coordinate system starts from the top left, we can come up with something like this:

if (y + dy < 0) {
dy = -dy;
}

if (x + dx > canvas.width || x + dx < 0) {
dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
dy = -dy;
}
