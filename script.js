let is24Hour = false;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    if (!is24Hour) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    document.getElementById("digital-clock").innerText =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ampm;
}

function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}

setInterval(updateClock, 1000);
updateClock();

// Alarm Functions
let alarmTimeout;

function setAlarm() {
    let alarmTime = document.getElementById("alarm-time").value;
    if (!alarmTime) {
        alert("Please set a valid time!");
        return;
    }

    let [hours, minutes] = alarmTime.split(":");
    let now = new Date();
    let alarm = new Date();
    alarm.setHours(hours, minutes, 0, 0);

    let timeToAlarm = alarm - now;
    if (timeToAlarm < 0) {
        timeToAlarm += 86400000; // Add 24 hours if time has passed
    }

    alarmTimeout = setTimeout(() => document.getElementById("alarm-sound").play(), timeToAlarm);
    alert("Alarm set!");
}

function pauseAlarm() {
    document.getElementById("alarm-sound").pause();
}

function stopAlarm() {
    document.getElementById("alarm-sound").pause();
    document.getElementById("alarm-sound").currentTime = 0;
}
