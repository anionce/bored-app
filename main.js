// Selectors

let randomButton = document.querySelector(".random");
let dropType = document.querySelector("#type");
let dropPeople = document.querySelector("#people");
let dropPrice = document.querySelector("#price");
let dropAccess = document.querySelector("#accessibility");
let resultDiv = document.querySelector(".result");
let spinner = document.querySelector(".spinner");
let selectors = document.querySelectorAll("select");

// Logic

function fetchData(url) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        displaydata(json);
      });
  } catch (error) {
    console.log(error);
  }
}

function displaydata(data) {
  spinner.classList.toggle("hidden");
  resultDiv.innerHTML = `<span>${data.activity}</span>`;
}

// Event listeners

dropType.addEventListener("change", (e) => {
  const select = e.target;
  const value = select.value;
  if (value === "nothing") return;
  spinner.classList.toggle("hidden");

  fetchData(`http://www.boredapi.com/api/activity?type=${value}`);
});

dropPeople.addEventListener("change", (e) => {
  const select = e.target;
  const value = select.value;
  if (value === "nothing") return;
  spinner.classList.toggle("hidden");

  fetchData(`http://www.boredapi.com/api/activity?participants=${value}`);
});

dropPrice.addEventListener("change", (e) => {
  const select = e.target;
  const valuePrice = select.value;

  const value = valuePrice === "free" ? 0 : 1;
  if (value === "nothing") return;
  spinner.classList.toggle("hidden");

  fetchData(`http://www.boredapi.com/api/activity?price=${value}`);
});

dropAccess.addEventListener("change", (e) => {
  const select = e.target;
  const valueAccess = select.value;
  const value = valueAccess === "easy" ? 0 : 1;
  if (value === "nothing") return;
  spinner.classList.toggle("hidden");

  fetchData(`http://www.boredapi.com/api/activity?accessibility=${value}`);
});

randomButton.addEventListener("click", function () {
  spinner.classList.toggle("hidden");
  fetchData("http://www.boredapi.com/api/activity/");
});
