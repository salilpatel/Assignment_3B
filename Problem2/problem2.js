function showtipValue(){
  document.getElementById("tipValue").innerHTML = document.getElementById("tip").value + "%";
}
showtipValue();


function calculateTip(){
  let bill = parseInt(document.getElementById("bill").value);
  let tip = document.getElementById("tip").value;
  
  let tipAmount = (tip*bill)/100;
  let totalBill = bill + tipAmount;
  
  document.getElementById("tipAmount").innerHTML = `Tip amount: <strong>${tipAmount}</strong>`;         
  document.getElementById("totalBill").innerHTML = `Total bill with tip: <strong>${totalBill}</strong>`;
}
