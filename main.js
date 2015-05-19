
var time = window.setInterval(function() {
var startTime = new Date();
var hours = startTime.getHours();
var minutes = startTime.getMinutes();
var seconds = startTime.getSeconds();

  if (hours < 9) {
    hexH = '0' + hours;
  }
    else {
      hexH = hours.toString();
    }

  if (minutes < 9) {
    hexM = '0' + minutes;
  }
    else {
      hexM = minutes.toString();
    }

  if (seconds < 9) {
    hexS = '0' + seconds;
  }
    else {
      hexS = seconds.toString();
    }

  var hexTime = '#' + hexH + hexM + hexS;

  document.querySelector('#clock').innerText = hexTime;
  var body = document.querySelector('body')
  body.style.backgroundColor= hexTime;

}, 1000);
