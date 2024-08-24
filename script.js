const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let awaitingNextValue = true;
let result = 0


// functions...
function resetAll() {
  result = 0;
  awaitingNextValue = true;
  calculatorDisplay = document.querySelector('h1');
}

function setNumber(number) {
  if (awaitingNextValue){
    calculatorDisplay.textContent = number;
    awaitingNextValue = false; }
  else{
    calculatorDisplay.textContent += number; }
  result = calculatorDisplay.textContent;
}

function displayResult() {
  try {
    calculatorDisplay.textContent = eval(result);
  } catch (error) {
    calculatorDisplay.textContent = 'Invalid expression'
  } finally {
    awaitingNextValue = true;
    result = 0;
  }
}

// calbacks
clearBtn.addEventListener('click', resetAll)
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.contains('equal-sign')) {
      inputBtn.addEventListener('click', () => displayResult()) }
  else {
      inputBtn.addEventListener('click', () => setNumber(inputBtn.value)); }
});
