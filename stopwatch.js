const timer = document.getElementById('timer');
const reset = document.getElementById('reset');
const startstop = document.getElementById('startstop');
let starttime;
let timerid;
let elapsed = 0;

function updateTimer() {
    const now = Date.now();
    const elapsedTime = now - starttime + elapsed;
    const millisec = Math.floor(elapsedTime % 1000).toString().padStart(3, '0');
    const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
    const min = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, '0');
    const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    timer.textContent = `${hrs}:${min}:${seconds}:${millisec}`;
}

startstop.addEventListener('click', () => {
    if (!timerid) {
        starttime = Date.now();
        timerid = setInterval(updateTimer, 10);
        startstop.textContent = 'Stop';
    } else {
        clearInterval(timerid);
        elapsed += Date.now() - starttime;
        timerid = null;
        startstop.textContent = 'Start';
    }
});

reset.addEventListener('click', () => {
    clearInterval(timerid);
    timerid = null;
    elapsed = 0;
    timer.textContent = '00:00:00:000';
    startstop.textContent = 'Start';
});
