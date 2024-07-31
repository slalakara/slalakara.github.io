let infoBox = [];
let checkbox = document.querySelectorAll('.checkbox');
const boxesContainer = document.querySelector('.boxes');
let defaulttype = "monthly"
function createBoxesHtml(name, price, features, type) {

  const _price = price.replace("$", "")
  return `<div class="boxItem">
    <h5>${name}</h5>
    <h1>$${type == "annually" ? _price : (Number(_price)*10).toFixed(2)}</h1>
    <hr>
    <h3>${features[0]}</h3>
    <hr>
    <h3>${features[1]}</h3>
    <hr>
    <h3>${features[2]}</h3>
    <hr class="sonHr">
    <a href="#" class="learnMore" id="learnMore">LEARN MORE</a>
  </div>`;
}

function render(renderData) {
  boxesContainer.innerHTML = renderData.map(
    x => createBoxesHtml(
      x.name,
      x.price,
      x.features,
      defaulttype
    )
  ).join('');
}

function handleToggleClick(e) {
  e.preventDefault();
  
  defaulttype = defaulttype == "annually" ? "monthly" : "annually";
  render(infoBox);
}


function renderAnnually() {
  boxesContainer.innerHTML = infoBox.map(
    x => createAnnuallyHtml(
      x.name,
      x.price,
      x.features,
      x.features,
      x.features
    )
  ).join('');
}
document.querySelectorAll(".switch").forEach((x) => x.addEventListener('change', handleToggleClick));

function createAnnuallyHtml(name, price, features) {
  return `<div class="boxItem">
    <h5>${name}</h5>
    <h1>${price}</h1>
    <hr>
    <h3>${features[0]}</h3>
    <hr>
    <h3>${features[1]}</h3>
    <hr>
    <h3>${features[2]}</h3>
    <hr class="sonHr">
    <a href="#">LEARN MORE</a>
  </div>`;
}

function init() {
  fetch('https://dummyjson.czaylabs.com.tr/api/exam/pricing-plans')
    .then(res => res.json())
    .then(data => {
      infoBox = data;
      render(infoBox);
    });
}

init();

// Number("$19.99".replace('$', ''))