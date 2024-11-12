// Function to update the clock every second
function updateClock() {
    const clockElement = document.getElementById("clock");

    // Get the current local time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, "0");

    // Format time in 12-hour HH:MM:SS AM/PM
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);