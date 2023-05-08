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

4. Paddle and keyboard controls

// paddle
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

Here we're defining the height and width of the paddle and its starting point on the x axis for use in calculations further on down the code. Let's create a function that will draw the paddle on the screen. Add the following just below your drawBall() function:

function drawPaddle() {
ctx.beginPath();
ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle = '#0095dd';
ctx.fill();
ctx.closePath();
}

// the user to control the paddle

Allowing the user to control the paddle
We can draw the paddle wherever we want, but it should respond to the user's actions. It's time to implement some keyboard controls. We will need the following:

Two variables for storing information on whether the left or right control button is pressed.
Two event listeners for keydown and keyup events. We want to run some code to handle the paddle movement when the buttons are pressed.
Two functions handling the keydown and keyup events the code that will be run when the buttons are pressed.
The ability to move the paddle left and right
Pressed buttons can be defined and initialized with boolean variables like in the example. Add these lines somewhere near the rest of your variables:

let rightPressed = false;
let leftPressed = false;
Copy to Clipboard
The default value for both is false because at the beginning the control buttons are not pressed. To listen for key presses, we will set up two event listeners. Add the following lines just above the setInterval() line at the bottom of your JavaScript:

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
Copy to Clipboard
When the keydown event is fired on any of the keys on your keyboard (when they are pressed), the keyDownHandler() function will be executed. The same pattern is true for the second listener: keyup events will fire the keyUpHandler() function (when the keys stop being pressed). Add these to your code now, below the addEventListener() lines:

function keyDownHandler(e) {
if (e.key === "Right" || e.key === "ArrowRight") {
rightPressed = true;
} else if (e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = true;
}
}

function keyUpHandler(e) {
if (e.key === "Right" || e.key === "ArrowRight") {
rightPressed = false;
} else if (e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = false;
}
}
Copy to Clipboard
When we press a key down, this information is stored in a variable. The relevant variable in each case is set to true. When the key is released, the variable is set back to false.

Both functions take an event as a parameter, represented by the e variable. From that you can get useful information: the key holds the information about the key that was pressed. Most browsers use ArrowRight and ArrowLeft for the left/right cursor keys, but we need to also include Right and Left checks to support IE/Edge browsers. If the left cursor is pressed, then the leftPressed variable is set to true, and when it is released, the leftPressed variable is set to false. The same pattern follows with the right cursor and the rightPressed variable.

// The paddle moving logic

We've now set up the variables for storing the info about the pressed keys, event listeners, and relevant functions. Next we'll get into the code to use all the things we just set up and to move the paddle on the screen. Inside the draw() function, we will check if the left or right cursor keys are pressed when each frame is rendered. Our code might look like this:

if (rightPressed) {
paddleX += 7;
} else if (leftPressed) {
paddleX -= 7;
}
Copy to Clipboard
If the left cursor is pressed, the paddle will move seven pixels to the left, and if the right cursor is pressed, the paddle will move seven pixels to the right. This currently works, but the paddle disappears off the edge of the canvas if we hold either key for too long. We could improve that and move the paddle only within the boundaries of the canvas by changing the code like this:

if (rightPressed) {
paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
paddleX = Math.max(paddleX - 7, 0);
}
Copy to Clipboard
The paddleX position we're using will move between 0 on the left side of the canvas and canvas.width-paddleWidth on the right-hand side, which will work exactly as we want it to.

Add the above code block into the draw() function at the bottom, just above the closing curly brace.

The only thing left to do now is call the drawPaddle() function from within the draw() function, to actually print it on the screen. Add the following line inside your draw() function, just below the line that calls drawBall():
