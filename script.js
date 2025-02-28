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

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

// World Clock
function updateWorldClock() {
    document.getElementById("kolkata-time").innerText = new Date().toLocaleTimeString('en-IN');
    document.getElementById("london-time").innerText = new Date().toLocaleTimeString('en-GB');
    document.getElementById("newyork-time").innerText = new Date().toLocaleTimeString('en-US');
    document.getElementById("tokyo-time").innerText = new Date().toLocaleTimeString('ja-JP');
}
setInterval(updateWorldClock, 1000);

// Alarm
let alarmSound = document.getElementById("alarm-sound");

function setAlarm() {
    alarmSound.play();
}

function pauseAlarm() {
    alarmSound.pause();
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
}
