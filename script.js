document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
});

// Update Clock
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

// Toggle Format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}
