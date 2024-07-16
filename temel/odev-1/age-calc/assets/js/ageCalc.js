let form = document.querySelector(".form")
let dayInput = document.querySelector('.day');
let monthInput = document.querySelector('.month');
let yearInput = document.querySelector('.year');


let ekleBtn = document.querySelector('.ekleBtn');
ekleBtn.addEventListener('click', calculateAge);

function handleForm(e){
  e.preventDefault();
}
form.addEventListener("submit", handleForm);



function calculateAge() {
  let birthDay = parseInt(dayInput.value);
  let birthMonth = parseInt(monthInput.value);
  let birthYear = parseInt(yearInput.value);


  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  if (ageDays < 0) {
    ageMonths--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let currentlyDaySpan = document.querySelector('.currentlyDay');
  let currentlyMonthSpan = document.querySelector('.currentlyMonth');
  let currentlyYearSpan = document.querySelector('.currentlyYear');

  currentlyDaySpan.innerHTML = `${ageDays} <h1>days</h1>`;
  currentlyMonthSpan.innerHTML = `${ageMonths} <h1>months</h1>`;
  currentlyYearSpan.innerHTML = `${ageYears} <h1>years</h1>`;

  
  if (!birthDay || !birthMonth || !birthYear) {
    if (!birthDay) {
      dayInput.parentElement.classList.add('invalid');
      dayInput.nextElementSibling.textContent = "Lütfen geçerli bir gün giriniz.";
      dayInput.previousElementSibling.classList.add('formItemTitleInvalid');
    } else {
      dayInput.parentElement.classList.remove('invalid');
      dayInput.nextElementSibling.textContent = "";
      dayInput.previousElementSibling.classList.remove('formItemTitleInvalid');
    }

    if (!birthMonth) {
      monthInput.parentElement.classList.add('invalid');
      monthInput.nextElementSibling.textContent = "Lütfen geçerli bir ay giriniz.";
      monthInput.previousElementSibling.classList.add('formItemTitleInvalid');
    } else {
      monthInput.parentElement.classList.remove('invalid');
      monthInput.nextElementSibling.textContent = "";
      monthInput.previousElementSibling.classList.remove('formItemTitleInvalid');
    }


    if (!birthYear) {
      yearInput.parentElement.classList.add('invalid');
      yearInput.nextElementSibling.textContent = "Lütfen geçerli bir yıl giriniz.";
      yearInput.previousElementSibling.classList.add('formItemTitleInvalid');
    } else {
      yearInput.parentElement.classList.remove('invalid');
      yearInput.nextElementSibling.textContent = "";
      yearInput.previousElementSibling.classList.remove('formItemTitleInvalid');
    }

    return;
  }
  
  birthDay = Number(birthDay);
  birthMonth = Number(birthMonth);
  birthYear = Number(birthYear);

 
  if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
    
    dayInput.style.border = "2px solid red";
    dayInput.nextElementSibling.textContent = "Lütfen geçerli bir gün giriniz.";
    dayInput.previousElementSibling.classList.add('.formItemTitleInvalid');

    return;
  }
  
  if (ageDays < 0) {
    ageMonths--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12; 
  }
  
  currentlyDaySpan.innerHTML = `${ageDays} <h1>days</h1>`;
  currentlyMonthSpan.innerHTML = `${ageMonths} <h1>months</h1>`;
  currentlyYearSpan.innerHTML = `${ageYears} <h1>years</h1>`;

  

  if (birthDay > 31 ) {
    dayInput.parentElement.classList.add('invalid');
    dayInput.nextElementSibling.textContent = "Lütfen geçerli bir gün giriniz.";
    dayInput.previousElementSibling.classList.add('formItemTitleInvalid');
  } else {
    dayInput.parentElement.classList.remove('invalid');
    dayInput.nextElementSibling.textContent = "";
    dayInput.previousElementSibling.classList.remove('formItemTitleInvalid');
  }
    if(birthMonth > 12) {
    monthInput.parentElement.classList.add('invalid');
    monthInput.nextElementSibling.textContent = "Lütfen geçerli bir ay giriniz.";
    monthInput.previousElementSibling.classList.add('formItemTitleInvalid');
  } else {
    monthInput.parentElement.classList.remove('invalid');
    monthInput.nextElementSibling.textContent = "";
    monthInput.previousElementSibling.classList.remove('formItemTitleInvalid');
  
  }
  if (birthYear > 2024){
    yearInput.parentElement.classList.add('invalid');
    yearInput.nextElementSibling.textContent = "Lütfen geçerli bir yıl giriniz.";
    yearInput.previousElementSibling.classList.add('formItemTitleInvalid');
 } else {
  yearInput.parentElement.classList.remove('invalid');
  yearInput.nextElementSibling.textContent = "";
  yearInput.previousElementSibling.classList.remove('formItemTitleInvalid');
 }

  
  if (ageDays < 0) {
    ageMonths--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  
  
  currentlyDaySpan.innerHTML = `${ageDays} <h1>gün</h1>`;
  currentlyMonthSpan.innerHTML = `${ageMonths} <h1>ay</h1>`;
  currentlyYearSpan.innerHTML = `${ageYears} <h1>yıl</h1>`;
}
