// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here

    // Example: Function to display a welcome message
    function displayWelcomeMessage() {
        alert('Welcome to my webpage!');
    }

    // Call the function to display the message
    displayWelcomeMessage();

    // Example: Add event listener to a button (if you have one)
    const button = document.getElementById('myButton'); // Replace with your button's ID
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});