// Digital Clock System
let is24Hour = false;
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = is24Hour ? "" : (hours >= 12 ? " PM" : " AM");
    hours = is24Hour ? hours : (hours % 12 || 12);

    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${ampm}`;
    
    if (document.getElementById("digital-clock")) {
        document.getElementById("digital-clock").innerText = timeString;
    }
}
function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}
setInterval(updateClock, 1000);
updateClock();

// World Clock System
function updateWorldClock() {
    let now = new Date();
    if (document.getElementById("kolkata-time")) {
        document.getElementById("kolkata-time").innerText = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    }
    if (document.getElementById("london-time")) {
        document.getElementById("london-time").innerText = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    }
    if (document.getElementById("tokyo-time")) {
        document.getElementById("tokyo-time").innerText = now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
    }
    if (document.getElementById("newyork-time")) {
        document.getElementById("newyork-time").innerText = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    }
}
setInterval(updateWorldClock, 1000);
updateWorldClock();

// Alarm System
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
        timeToAlarm += 86400000;
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
