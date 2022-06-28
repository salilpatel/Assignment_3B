window.onload = function(){
  var sec = 00; 
  var ms = 00; 
  var appendMs = document.getElementById("ms")
  var appendSec = document.getElementById("sec")
  var Interval ;

  document.getElementById("start").onclick = function(){
    Interval = setInterval(startTimer, 10);
  }
  document.getElementById("stop").onclick = function(){
    clearInterval(Interval);
  }
  document.getElementById("reset").onclick = function(){
    clearInterval(Interval);
    ms = "00";
  	sec = "00";
    appendMs.innerHTML = ms;
  	appendSec.innerHTML = sec;
  }
  
  function startTimer() {
    ms++; 
    if(ms <= 9){
      appendMs.innerHTML = "0" + ms;
    }
    if (ms > 9){
      appendMs.innerHTML = ms; 
    } 
    if (ms > 99) {
      sec++;
      appendSec.innerHTML = "0" + sec;
      ms = 0;
      appendMs.innerHTML = "0" + 0;
    }
    if (sec > 9){
      appendSec.innerHTML = sec;
    }
  }
}
