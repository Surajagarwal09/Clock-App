let currentdate = document.getElementById('date');
let currenttime = document.getElementById('time');
let timezone = document.getElementById('timezone');

let cdate = new Date();
let option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let sdate = cdate.toLocaleDateString('en-us', option);
let fsdate = sdate.replace(/(\d{1,2})\s(\w+)/, ',$1 $2');
document.getElementById('date').textContent = fsdate;

setInterval(() => {
    let time = new Date();
    currenttime.textContent = time.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).replace('AM', 'AM').replace('PM', 'PM');
}, 1000);

let zone = new Date();
timezone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
