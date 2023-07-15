# practice-js

## My Journey to Becoming a JS Developer

My 'practice-js' repository is a place where I document my journey from the beginning to becoming a JavaScript developer.

It is an online space where I experiment with different JavaScript techniques and learn from my mistakes and accomplishments.

## 'Digital garden'
This is my 'digital garden' where I write about:

- what I have learned,
- what I am currently learning,
- what I do.

As I continue to add to this digital garden, I hope to track my progress and gain new insights that will help me achieve my goals in the IT field.

## My projects

1. [Guess My Number](https://github.com/MarcinSoltysik/practice-js/tree/main/01-guess-my-number) 

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/78354700/230904368-2a345623-6f34-49bb-afba-4e40b7c071d7.gif)


## Description

This is a simple number-guessing game built with JavaScript.
The user has to guess a random number between 1 and 20, 
and the game provides feedback on whether the guess was too high or too low. 
If the user guesses correctly, they win the game.

### What I learned ?

I learned how the Math.random function works, how to use the addEventListener() method in JavaScript to listen for user input, and how to use conditional statements to compare the user's guess with the secret number and provide feedback accordingly. 
I also learned how to control DOM elements by getting data from the user and how to style elements using JavaScript.

### Technologies:

- html
- css
- JS




2. [Pig Game](https://github.com/MarcinSoltysik/practice-js/tree/main/02-pig-game)
  
![gif-pig-game](https://github.com/MarcinSoltysik/practice-js/assets/78354700/3848b817-480e-4aa2-8f11-3a415193c0d0)


## Description
This is a simple JavaScript-based Pig Game, where two players take turns rolling a dice and accumulating scores. The goal is to reach a target score to win the game.

### How to Play

Each player takes turns rolling the dice by clicking the "Roll dice" button.
The dice roll is simulated by generating a random number between 1 and 6.
If a player rolls a 1, their current score is reset to zero, and it becomes the other player's turn.
If a player rolls any other number, it gets added to their current score.
To save the current score and add it to the player's total score, the player can click the "Hold" button.
The first player to reach or exceed the target score wins the game.
Clicking the "New Game" button resets the game and starts a new round.



### What I Learned

The game demonstrates the use of JavaScript's Math.random function to generate random numbers for the dice roll.
I learned how to use the querySelector and getElementById methods to select and manipulate HTML elements using JavaScript.
By using event listeners and the addEventListener method, I learned how to listen for user input and trigger appropriate actions.
Conditional statements are used to check the dice roll and determine the outcome, whether the player's turn continues or switches.
I learned how to dynamically update the content of HTML elements and apply CSS classes using JavaScript.
The game showcases the interaction between HTML, CSS, and JavaScript to create an interactive and visually appealing user experience.


### Technologies Used

- HTML: The structure and layout of the game are defined using HTML.
- CSS: The game's visual styling and presentation are created using CSS.
- JavaScript: The game's logic and interactivity are implemented using JavaScript.

#### Enjoy playing and learning!
Feel free to clone and modify the code to create your own version of the Pig Game! 



3. [modal-window](https://github.com/MarcinSoltysik/practice-js/tree/main/03-modal-window)

![ezgif com-video-to-gif](https://github.com/MarcinSoltysik/practice-js/assets/78354700/32c92773-ec61-4985-9b9a-c08599056d50)


# Modal Window Interaction

## Description

A modal window in JavaScript (also known as a modal dialog or a modal popup) is a user interface element that appears on top of the main content and requires the user to interact with it before they can continue interacting with the rest of the page. It is commonly used to display important information, prompt for user input, or confirm an action.

## What I Learned

This JavaScript code demonstrates how to interact with the DOM (Document Object Model) to create a modal window. 

The code performs the following actions:

1. Selects the modal element and the overlay element from the DOM using the querySelector method.
elects all elements with the class "btn__show-modal" and assigns them to a variable.
2. Selects the close button element with the class "btn__close-modal" and assigns it to another variable.
3. Defines functions to open and close the modal window by manipulating CSS classes.
4. Adds event listeners to the "click" event for buttons with the class "btn__show-modal" using a loop.
5. Adds event listeners to the "click" event of the close button and the overlay to close the modal window.
6. Adds an event listener to the "keydown" event on the document to close the modal when the Escape key is pressed.


By utilizing this code, you can easily show and hide a modal window in response to user interactions. 
The modal window becomes visible by removing the "hidden" class, and it is hidden by adding the "hidden" class to the modal and overlay elements.

