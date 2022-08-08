const player = document.getElementById("player");

player.onclick = () => {
  return player.play();
};

player.onmouseleave = () => {
  return player.stop();
};

// TIMER
// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML =
    days + (days > 1 ? " days" : " day");
  document.getElementById("time").innerHTML =
    +hours +
    (hours > 1 ? " hours : " : " hour : ") +
    minutes +
    (minutes > 1 ? " minutes : " : " minute : ") +
    seconds +
    (seconds > 1 ? " seconds" : " second");

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("modal").style.display = "none";
  }
}, 1000);
