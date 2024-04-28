const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent default behavior (loading the linked page)
    event.preventDefault();
    
    // Get the target URL from the link's href attribute
    const targetUrl = link.getAttribute('href');
    
    // Redirect the browser to the target URL
    window.location.href = targetUrl;
    // Select the welcome section element

  });
});
// Select the welcome section element
// Select LED control buttons
const ledOnButton = document.getElementById('led-on');
const ledOffButton = document.getElementById('led-off');

// (Optional) Select LED image and status elements (if used elsewhere)
// const ledImage = document.getElementById('led-image');
// const ledStatus = document.getElementById('led-status');

// Function to turn LED on (replace with your actual logic)
function turnLedOn() {
  // Simulate LED on (replace with code that sends a signal to Arduino)
  console.log('Turning LED on (replace with actual logic)');
  // (Optional) Update LED image and status if used elsewhere
  // ledImage.src = "led-on.png";
  // ledStatus.textContent = "Activated";
}

// Function to turn LED off (replace with your actual logic)
function turnLedOff() {
  // Simulate LED off (replace with code that sends a signal to Arduino)
  console.log('Turning LED off (replace with actual logic)');
  // (Optional) Update LED image and status if used elsewhere
  // ledImage.src = "led-off.png";
  // ledStatus.textContent = "Deactivated";
}

// Add event listeners to LED control buttons
ledOnButton.addEventListener('click', turnLedOn);
ledOffButton.addEventListener('click', turnLedOff);

// Similar logic can be implemented for buzzer control buttons
// ... existing code for LED control ...

// Select buzzer control buttons
const buzzerOnButton = document.getElementById('buzzer-on');
const buzzerOffButton = document.getElementById('buzzer-off');

// Function to activate buzzer (replace with your actual logic)
function activateBuzzer() {
  // Simulate buzzer activation (replace with code that sends a signal to Arduino)
  console.log('Activating buzzer (replace with actual logic)');
}

// Function to deactivate buzzer (replace with your actual logic)
function deactivateBuzzer() {
  // Simulate buzzer deactivation (replace with code that sends a signal to Arduino)
  console.log('Deactivating buzzer (replace with actual logic)');
}

// Add event listeners to buzzer control buttons
buzzerOnButton.addEventListener('click', activateBuzzer);
buzzerOffButton.addEventListener('click', deactivateBuzzer);

