let customerPay = document.querySelector(".customer-pay");
let btns = document.querySelectorAll(".tip-list button");
let tipCustom = document.querySelector(".custom-tip");
let numberPeople = document.querySelector(".number-people-input");
let tipAmount = document.querySelector(".tip-amount-show");
let total = document.querySelector(".total-show");
let reset = document.querySelector(".reset-button");
let customform = document.querySelector(".customform");
let uyari = document.querySelector(".uyari");
let uyari1 = document.querySelector(".uyari1");

let tip = 0;
let totaltip = 0;
let peopletip = 0;
let totalpaytip = 0;
let totalpeopletip = 0;

function handleTipClick() {
  tip += this.innerText;
  totaltip = (customerPay.value * tip) / 100;
  totalpaytip = Number(customerPay.value) + totaltip;
  totalpeopletip = totalpaytip / numberPeople.value;
  total.innerText = "$" + totalpeopletip;
  peopletip = totaltip / numberPeople.value;
  tipAmount.innerText = "$" + peopletip;

  
  if(total.value !== ""){
    reset.style.background = "rgba(38, 194, 174, 1)";
  }
  if(customerPay.value === "" ){
    uyari.innerText = "Sıfır olamaz";
    customerPay.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    uyari.innerText = "";
    customerPay.style.border = "transparent";
  }
  if(numberPeople.value === ""){
    uyari1.innerText = "Sıfır olamaz";
    numberPeople.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    uyari1.innerText = "";
    numberPeople.style.border = "transparent";
  }

  return tip=0;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleTipClick);
}



let tipCustomtotal = 0;
let peoplecustomtip = 0;

function handleCustomClick(e) {
  e.preventDefault();
  tipCustomtotal = (customerPay.value * tipCustom.value) / 100;
  totalpaytip = Number(customerPay.value) + totaltip;
  total.innerText = "$" + totalpaytip;
  peoplecustomtip = tipCustomtotal / numberPeople.value;
  tipAmount.innerText = "$" + peoplecustomtip;
  
  if(total.value !== ""){
    reset.style.background = "rgba(38, 194, 174, 1)";
  }
  if(customerPay.value === "" ){
    uyari.innerText = "Sıfır olamaz";
    customerPay.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    uyari.innerText = "";
    customerPay.style.border = "transparent";
  }
  if(numberPeople.value === ""){
    uyari1.innerText = "Sıfır olamaz";
    numberPeople.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    uyari1.innerText = "";
    numberPeople.style.border = "transparent";
  }
}

customform.addEventListener("submit", handleCustomClick);


function handleResetClick() {
  customerPay.value="";
  tipCustom.value="";
  total.innerText="$0.00";
  numberPeople.value="";
  tipAmount.innerText="$0.00";
  if(total.value !== ""){
    reset.style.background = "rgba(13, 104, 109, 1)";
  } 
  if(total.value !== ""){
    reset.style.background = "rgba(13, 104, 109, 1)";
  }
}

reset.addEventListener("click", handleResetClick);

