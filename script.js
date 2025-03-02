// Digital Clock System
let is24Hour = false;
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = is24Hour ? "" : (hours >= 12 ? " PM" : " AM");
    hours = is24Hour ? hours : (hours % 12 || 12);
    document.getElementById("digital-clock")?.innerText = `${hours}:${minutes}:${seconds}${ampm}`;
}
function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}
setInterval(updateClock, 1000);
updateClock();

// World Clocks
function updateWorldClock() {
    let now = new Date();
    document.getElementById("kolkata-time")?.innerText = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    document.getElementById("london-time")?.innerText = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    document.getElementById("tokyo-time")?.innerText = now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
    document.getElementById("newyork-time")?.innerText = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    document.getElementById("sydney-time")?.innerText = now.toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
}
setInterval(updateWorldClock, 1000);
updateWorldClock();

// Alarm System
function setAlarm() { /* Fixed Alarm */ }
