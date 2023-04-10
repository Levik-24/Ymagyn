function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('clock').textContent = hours + ':' + minutes;
}

updateClock();
setInterval(updateClock, 1000);