// script.js
let timerInterval;
let timeElapsed = 0; // in seconds
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', recordLap); // Event listener for lap button

function startTimer() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    document.getElementById('lapBtn').disabled = false; // Enable lap button

    timerInterval = setInterval(() => {
        timeElapsed++;
        display.innerHTML = formatTime(timeElapsed);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('lapBtn').disabled = true; // Disable lap button
}

function resetTimer() {
    clearInterval(timerInterval);
    timeElapsed = 0;
    display.innerHTML = "00:00:00";
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('lapBtn').disabled = true; // Disable lap button
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = formatTime(timeElapsed);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap Time: ${lapTime}`;
    lapList.appendChild(lapItem);
}

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}
