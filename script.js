// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

// Digital Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

// World Clock
function updateWorldClock() {
    document.getElementById('kolkata-time').textContent = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" });
    document.getElementById('london-time').textContent = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" });
    document.getElementById('newyork-time').textContent = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
    document.getElementById('tokyo-time').textContent = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
}

setInterval(updateWorldClock, 1000);

// Alarm
let alarmTime = null;
let alarmTimeout = null;
let alarmAudio = document.getElementById('alarm-sound');

function setAlarm() {
    alarmTime = document.getElementById('alarm-time').value;
    if (!alarmTime) {
        alert("Please set a valid alarm time!");
        return;
    }

    let now = new Date();
    let alarmDate = new Date(now.toDateString() + " " + alarmTime);

    let timeDiff = alarmDate - now;
    if (timeDiff < 0) {
        alert("Set a future time!");
        return;
    }

    alarmTimeout = setTimeout(() => {
        alarmAudio.play();
    }, timeDiff);

    alert("Alarm set for " + alarmTime);
}

function pauseAlarm() {
    if (!alarmAudio.paused) {
        alarmAudio.pause();
    }
}

function stopAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
}
