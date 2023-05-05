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
