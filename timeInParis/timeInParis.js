// Get the time element

function updateTime() {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' });
    const timeArray = now.split(' ')[1].split(':');
    let hours = timeArray[0];
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = timeArray[1].padStart(2, '0');
    const seconds = timeArray[2].padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById('time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);