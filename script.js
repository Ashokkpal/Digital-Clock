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
    
    document.getElementById("digital-clock")?.innerText = timeString;
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
    document.getElementById("kolkata-time")?.innerText = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    document.getElementById("london-time")?.innerText = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    document.getElementById("tokyo-time")?.innerText = now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
    document.getElementById("newyork-time")?.innerText = now.toLocaleString("en-US", { timeZone: "America/New_York" });
}
setInterval(updateWorldClock, 1000);
updateWorldClock();

// Alarm System (Fixed)
let alarmTimeout;
function setAlarm() {
    let alarmTime = document.getElementById("alarm-time").value;
    if (!alarmTime) {
        alert("Please set a valid time!");
        return;
    }
    let now = new Date();
    let [hours, minutes] = alarmTime.split(":");
    let alarm = new Date(now);
    alarm.setHours(hours, minutes, 0, 0);
    let timeToAlarm = alarm.getTime() - now.getTime();
    if (timeToAlarm < 0) timeToAlarm += 86400000;

    alarmTimeout = setTimeout(() => document.getElementById("alarm-sound").play(), timeToAlarm);
    alert("Alarm set!");
}
function pauseAlarm() {
    document.getElementById("alarm-sound").pause();
}
function stopAlarm() {
    document.getElementById("alarm-sound").pause();
    document.getElementById("alarm-sound").currentTime = 0;
    clearTimeout(alarmTimeout);
}
