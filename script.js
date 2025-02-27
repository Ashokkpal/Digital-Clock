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
        hours = hours % 12 || 12;
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
    const cities = {
        kolkata: "Asia/Kolkata",
        london: "Europe/London",
        newyork: "America/New_York",
        tokyo: "Asia/Tokyo"
    };

    for (let city in cities) {
        const time = new Date(now.toLocaleString("en-US", { timeZone: cities[city] }));
        document.getElementById(`${city}-time`).textContent = formatTime(time, true);
        document.getElementById(`${city}-time-12`).textContent = formatTime(time, false);
    }
}

function formatTime(date, is24) {
    let hours = date.getHours();
    let ampm = '';
    if (!is24) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }
    return `${String(hours).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')} ${ampm}`;
}

function setAlarm() { alarmTime = document.getElementById('alarm-time').value; alert(`Alarm set for ${alarmTime}`); }
function stopAlarm() { alarmSound.pause(); }
function pauseAlarm() { alarmSound.pause(); }
function resetAlarm() { alarmTime = null; alert("Alarm reset"); }

setInterval(updateClock, 1000);
updateClock();
