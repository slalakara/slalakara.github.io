let advice = [];

function renderAdvice() {
  document.getElementById('adviceId').innerText = `ADVICE #${advice.slip.id}`
  document.getElementById('adviceText').innerText = advice.slip.advice; 
}


function init() {
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then(res=> {
    advice = res;
    renderAdvice();
  })
}

document.getElementById('zar').addEventListener('click', init)

init();