const displayNumber = document.querySelector(".calculator__number");

const reset = document.querySelector("[data-action='reset']");
const negacion = document.querySelector("[data-action='negacion']");
const porcentaje = document.querySelector("[data-action='porcentaje']");
const dividir = document.querySelector("[data-action='dividir']");
const multiplicar = document.querySelector("[data-action='multiplicar']");
const restar = document.querySelector("[data-action='restar']");
const sumar = document.querySelector("[data-action='sumar']");
const igual = document.querySelector("[data-action='igual']");

const numbers = document.querySelectorAll("[data-number]");

let operation = "";
let firstNumber = null;
let secondNumber = null;
let result = 0;

function setNumber() {
  firstNumber = parseInt(this.dataset.number);

  if (firstNumber !== null) {
    displayNumber.textContent = firstNumber;
  } else {
    displayNumber.textContent = "0";
  }
  console.log();
}

numbers.forEach((number) => number.addEventListener("click", setNumber));
