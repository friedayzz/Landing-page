//------------- Create and display clock ---------------//
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//------------- Change bg and greeting depending on time of day ---------------//
//function changeBgImg() {}

function checkTimeBg() {
  let bgMorning = ["/background/morning/morning001.jpg", "/background/morning/morning002.jpg", "/background/morning/morning003.jpg"];
  let bgAfterNoon = ["/background/afternoon/afternoon001.jpg", "/background/afternoon/afternoon002.jpg", "/background/afternoon/afternoon003.jpg"];
  let bgEvening = ["/background/evening/evening001.jpg", "/background/evening/evening002.jpg", "/background/evening/evening003.jpg"];
  let bgNight = ["/background/night/night001.jpg", "/background/night/night002.jpg", "/background/night/night003.jpg"];

  let hour = new Date().getHours();
  let greeting = document.getElementById("greeting");

  if (hour >= 4 && hour <= 11) {
    document.body.style.backgroundImage = "url(" + bgMorning[Math.floor(Math.random() * 3)] + ")";
    greeting.innerHTML = "Good Morning!";
  }
  if (hour >= 12 && hour <= 16) {
    document.body.style.backgroundImage = "url(" + bgAfterNoon[Math.floor(Math.random() * 3)] + ")";
    greeting.innerHTML = "Good Afternoon!";
  }
  if (hour >= 17 && hour <= 20) {
    document.body.style.backgroundImage = "url(" + bgEvening[Math.floor(Math.random() * 3)] + ")";
    greeting.innerHTML = "Good Evening!";
  }
  if (hour >= 21 && hour <= 3) {
    document.body.style.backgroundImage = "url(" + bgNight[Math.floor(Math.random() * 3)] + ")";
    greeting.innerHTML = "Good Night!";
  }
}
