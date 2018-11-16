// Your code here
$(document).ready(function() {

pacificTimeClock();
setInterval(pacificTimeClock,1000);

});

function lessThanTen(number) {
  if (number < 10) {
    number = `0${number}`;
    return number;
  }
  return number;
}

function pacificTimeClock() {
  let currentTime = new Date();
  let hours = lessThanTen(currentTime.getHours());
  let minutes = lessThanTen(currentTime.getMinutes());
  let seconds = lessThanTen(currentTime.getSeconds());
  let timePeriod = "AM"

  if (hours >= 12) {
    hours = lessThanTen(hours - 12);
    timePeriod = "PM"
  }

  $('#clock').html(`${hours}:${minutes}:${seconds} ${timePeriod}`);
}
