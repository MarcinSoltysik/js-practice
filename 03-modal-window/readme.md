# Modal Window Interaction

## Description

A modal window in JavaScript (also known as a modal dialog or a modal popup) is a user interface element that appears on top of the main content and requires the user to interact with it before they can continue interacting with the rest of the page. It is commonly used to display important information, prompt for user input, or confirm an action.

## What I Learned

This JavaScript code demonstrates how to interact with the DOM (Document Object Model) to create a modal window. The code performs the following actions:

1. Selects the modal element and the overlay element from the DOM using the querySelector method.
2. elects all elements with the class "btn\_\_show-modal" and assigns them to a variable.
3. Selects the close button element with the class "btn\_\_close-modal" and assigns it to another variable.
4. Defines functions to open and close the modal window by manipulating CSS classes.
5. Adds event listeners to the "click" event for buttons with the class "btn\_\_show-modal" using a loop.
6. Adds event listeners to the "click" event of the close button and the overlay to close the modal window.
7. Adds an event listener to the "keydown" event on the document to close the modal when the Escape key is pressed.

By utilizing this code, you can easily show and hide a modal window in response to user interactions. The modal window becomes visible by removing the "hidden" class, and it is hidden by adding the "hidden" class to the modal and overlay elements.
