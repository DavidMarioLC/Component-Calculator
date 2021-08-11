const displayNumber = document.querySelector(".calculator__number");
const actions = document.querySelectorAll("[data-action]");
const numbers = document.querySelectorAll("[data-number]");

let operation = null;
let firstNumber = 0;
let secondNumber = 0;
let result = 0;

function chooseAction() {
  operation = this.dataset.action;
  displayNumber.textContent = "0";
}

function getNumber() {
  firstNumber = parseInt(this.dataset.number);
  displayNumber.textContent = firstNumber;
  console.log(firstNumber);
}

function optionActions() {
  switch (operation) {
    case "suma":
      result = firstNumber + secondNumber;
      console.log(result);
      displayNumber.textContent = result;

      break;
    case "resta":
      result = firstNumber - secondNumber;
      displayNumber.textContent = result;
      break;

    default:
      break;
  }
}

function solution() {
  optionActions();
}

actions.forEach((action) => action.addEventListener("click", chooseAction));
numbers.forEach((number) => number.addEventListener("click", getNumber));
