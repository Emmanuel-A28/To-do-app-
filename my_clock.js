function updateClock() {
    const clockElement =document.getElementById("clock")
    const now = new Date();
    let hours =String(now.getHours()).padStart(2, '0');
    let minutes =String(now.getMinutes()).padStart(2, '0');
    let seconds =String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);