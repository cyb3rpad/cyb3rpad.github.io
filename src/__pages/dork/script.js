function generalSearch() {
    // Execute a general Google search with the input text
    const query = document.getElementById('queryInput').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    } else {
        alert('Please enter a search term or domain.');
    }
}

function runDork(dork) {
    const domain = document.getElementById('queryInput').value;
    if (domain) {
        // Replace 'example.com' with the entered domain and open the dork query in a new tab
        const finalDork = `site:${domain} ${dork}`;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
    } else {
        alert('Please enter a domain in the search bar first.');
    }
}

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