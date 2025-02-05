// let currentInput = '';
// let operator = null;
// let previousInput = '';

// function appendNumber(number) {
//   currentInput += number;
//   updateDisplay();
// }

// function operate(op) {
//   if (currentInput === '') return;
//   if (operator !== null) calculate();
//   operator = op;
//   previousInput = currentInput;
//   currentInput = '';
// }

// function calculate() {
//   if (operator === null || currentInput === '') return;
//   const num1 = parseFloat(previousInput);
//   const num2 = parseFloat(currentInput);
//   switch (operator) {
//     case '+':
//       currentInput = num1 + num2;
//       break;
//     case '-':
//       currentInput = num1 - num2;
//       break;
//     case '*':
//       currentInput = num1 * num2;
//       break;
//     case '/':
//       currentInput = num1 / num2;
//       break;
//   }
//   operator = null;
//   previousInput = '';
//   updateDisplay();
// }

// function clearDisplay() {
//   currentInput = '';
//   previousInput = '';
//   operator = null;
//   updateDisplay();
// }

// function updateDisplay() {
//   document.getElementById('display').value = currentInput;
// }
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentNumber === '') return; // Don't allow operator without a number
  if (previousNumber !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
}

function calculate() {
  if (currentNumber === '' || previousNumber === '') return;

  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = previousNumber + (operator ? ` ${operator} ` : '') + currentNumber;
}
