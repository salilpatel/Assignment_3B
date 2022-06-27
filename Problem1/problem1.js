function display(val){
  document.getElementById("result").value += val;
  return val;
}

function clearScreen(){
  document.getElementById("result").value = "";
  document.getElementById("resultText").innerHTML = "";
}

function solve(){
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("resultText").innerHTML = x + " = " + y;
  document.getElementById("result").value = y;
  return y;
}