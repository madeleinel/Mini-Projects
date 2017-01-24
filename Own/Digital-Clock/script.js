function setDate () {
  const now = new Date();

  var seconds = now.getSeconds();
  var mins = now.getMinutes();
  var hour = now.getHours();

  // if the number is single-digit, add a 0 in front of the number
  if (seconds < 10) {
    seconds = "0" + seconds;
  } if (mins < 10) {
    mins = "0" + mins;
  } if (hour < 10) {
    hour = "0" + hour;
  }

  // insert the time values into the relevant clock divs
  document.getElementById('hour-print').innerHTML = hour;
  document.getElementById('minute-print').innerHTML = mins;
  document.getElementById('second-print').innerHTML = seconds;

}

setInterval(setDate, 1000);
