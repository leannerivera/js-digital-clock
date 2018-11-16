// Your code here
$(document).ready(function() {

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let timePeriod = "AM"

    if (hours >= 12) {
      hours = hours -12;
      timePeriod = "PM"
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    $('#clock').append(`${hours}:${minutes}:${seconds} ${timePeriod}`);


    // setInterval(seconds, 1000);
});
