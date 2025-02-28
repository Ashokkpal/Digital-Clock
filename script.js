let is24HourFormat = localStorage.getItem("is24HourFormat") === "true"; 

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
});

// Update Digital Clock
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

    checkAlarm(hours, minutes, ampm);
}
setInterval(updateClock, 1000);

// Toggle Format Globally
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem("is24HourFormat", is24HourFormat); // Store Preference
    updateClock();
    updateWorldClock(); // Apply to World Clock
}

// Update World Clock
function updateWorldClock() {
    let now = new Date();
    document.getElementById("kolkata-time").innerText = formatTime(now, "Asia/Kolkata");
    document.getElementById("london-time").innerText = formatTime(now, "Europe/London");
    document.getElementById("newyork-time").innerText = formatTime(now, "America/New_York");
    document.getElementById("tokyo-time").innerText = formatTime(now, "Asia/Tokyo");
}

function formatTime(now, timeZone) {
    return new Intl.DateTimeFormat('en-US', { 
        timeZone, 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: !is24HourFormat 
    }).format(now);
}

setInterval(updateWorldClock, 1000);
