// Function to handle button click events
function selectOption(option) {
    // Hide cat-heart.gif
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayhug(); // Display the cat-heart.gif
            displayMessage(); // Display the message after showing the cat-heart
            document.getElementById('cat-heart.gif').style.display = 'none';
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 0); // Flash colors for 2 seconds
}

// Function to display the cat-heart.gif
function displayhug() {
    document.getElementById('image-container').innerHTML = ''; // Clear current image
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'hug.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    catHeartImage.alt = 'hug';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide the options
        
    };
}

function displayMessage() {
    // Create a new paragraph element to display the message
    var message = document.createElement('p');
    message.innerText = "to : my pnsrr"; // Message to display
    message.style.fontSize = '34px'; // Adjust font size
    message.style.fontFamily = '"Brush Script MT", cursive'; // Set font family
    message.style.marginBottom = '20px'; // Add some space between image and text

    // Add the message under the cat-heart.gif
    document.getElementById('image-container').appendChild(message);
}
// Function to move the "No" button randomly on hover

document.getElementById('no-button').addEventListener('onclick', function () {
    const x = Math.random() * (window.innerWidth - this.offsetWidth); // Random X position
    const y = Math.random() * (window.innerHeight - this.offsetHeight); // Random Y position
    this.style.position = 'absolute'; // Make it absolute positioned
    this.style.left = `${x}px`; // Apply random X position
    this.style.top = `${y}px`; // Apply random Y position
});
