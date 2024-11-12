// Auto-submit the reverse image search form after selecting a file
document.getElementById('reverseImageUpload').addEventListener('change', function() {
    document.getElementById('reverseImageSearchForm').submit();
});

// Function to update the clock every second
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const formattedHours = hours.toString().padStart(2, "0");
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);