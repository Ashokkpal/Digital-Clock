// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    this.textContent = document.body.classList.contains("light-theme") ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// Clock Functionality
let is24HourFormat = true;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    if (!is24HourFormat) {
        hours = hours % 12 || 12;
    }

    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    document.getElementById("ampm").innerText = is24HourFormat ? '' : ampm;
}
setInterval(updateClock, 1000);
updateClock();

// Format Toggle
document.getElementById("format-toggle-btn").addEventListener("click", function() {
    is24HourFormat = !is24HourFormat;
    this.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateClock();
});
