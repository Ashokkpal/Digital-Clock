let is24HourFormat = true;
let alarmTime = null;
let alarmActive = false;
let alarmAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

// Theme Toggle
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

    checkAlarm(hours, minutes, ampm);
}
setInterval(updateClock, 1000);

// Toggle 12-hour / 24-hour format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

// Set Alarm
function setAlarm() {
    let inputTime = document.getElementById("alarm-time").value;
    if (!inputTime) {
        alert("Please enter a valid alarm time!");
        return;
    }
    alarmTime = inputTime;
    alarmActive = true;
    alert("Alarm set for " + inputTime);
}

// Check Alarm
function checkAlarm(hours, minutes, ampm) {
    if (!alarmActive || !alarmTime) return;

    let [alarmHours, alarmMinutes] = alarmTime.split(":");
    alarmHours = parseInt(alarmHours, 10);
    alarmMinutes = parseInt(alarmMinutes, 10);

    if (!is24HourFormat && ampm === "PM" && alarmHours !== 12) {
        alarmHours += 12;
    }

    if (hours === alarmHours && minutes === alarmMinutes) {
        alarmAudio.play();
        alarmActive = false;  // Stop further checks
    }
}

// Stop Alarm
function stopAlarm() {
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    alarmActive = false;
}

// Get World Clock Times
function updateWorldClock() {
    let now = new Date();
    let kolkataTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: !is24HourFormat }).format(now);
    let londonTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: !is24HourFormat }).format(now);
    let newYorkTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: !is24HourFormat }).format(now);
    let tokyoTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: !is24HourFormat }).format(now);

    document.getElementById("kolkata-time").innerText = kolkataTime;
    document.getElementById("london-time").innerText = londonTime;
    document.getElementById("newyork-time").innerText = newYorkTime;
    document.getElementById("tokyo-time").innerText = tokyoTime;
}
setInterval(updateWorldClock, 1000);
