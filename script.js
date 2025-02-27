// script.js
let is24HourFormat = true;
let alarmTime = null;
const alarmSound = document.getElementById('alarm-sound');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour format to 12-hour
    }

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    updateWorldClock();
    checkAlarm(hours, minutes, ampm);
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.querySelector('#format-toggle button').textContent = is24HourFormat ? '24-hour' : '12-hour';
    updateClock();
}

function updateWorldClock() {
    const now = new Date();
    document.getElementById('kolkata-time').textContent = formatTime(new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })));
    document.getElementById('london-time').textContent = formatTime(new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" })));
    document.getElementById('newyork-time').textContent = formatTime(new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" })));
    document.getElementById('tokyo-time').textContent = formatTime(new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })));
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function setAlarm() {
    alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime) {
        alert(`Alarm set for ${alarmTime}`);
    }
}

function checkAlarm(hours, minutes, ampm) {
    if (alarmTime) {
        const [alarmHours, alarmMinutes] = alarmTime.split(':');
        const formattedHours = is24HourFormat ? alarmHours : (alarmHours % 12 || 12);
        if (formattedHours == hours && alarmMinutes == minutes) {
            alarmSound.play();
            alert("⏰ Time's up!");
            alarmTime = null; // Reset alarm
        }
    }
}

setInterval(updateClock, 1000);
updateClock();
