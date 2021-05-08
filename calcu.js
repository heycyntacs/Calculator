const inputButtons = document.querySelectorAll('.inputNumber');
const inputDecimal = document.querySelector('.inputDecimal');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
let operandA, operandB;
let operatorValue = '';
let inputReset = false;

//FOR INPUTTING NUMBERS
//Buttons
inputButtons.forEach(button => button.addEventListener('click', () => input(button.value)));
inputDecimal.addEventListener('click', decimal);
clear.addEventListener('click', reset);
del.addEventListener('click', backSpace);

function input(button) {
    if (inputReset === true) screen.textContent = '';
    screen.textContent += (button);
}

function decimal () {
    if (screen.textContent.includes('.')) return;
    if (screen.textContent === '') screen.textContent = '0.';
    else screen.textContent += '.';
}

function reset () {
    screen.textContent = '';
}

function backSpace () {
    screen.textContent = screen.textContent.slice(0, - 1);
}

//Keyboard-support
window.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') input(e.key);
    else if (e.key === '.') decimal();
    else if (e.key === 'Backspace') backSpace();
    else if (e.key === 'Escape') reset();
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') setOperator(e.key);
})

//FOR OPERATIONS
operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.value)));

function setOperator(operator) {
    if(operatorValue !== '') eval();
    operandA = parseFloat(screen.textContent);
    operatorValue = operator;
    inputReset = true;
}

function eval() {
    if (operatorValue === '') return;
    operandB = parseFloat(screen.textContent);
    if (operatorValue === '+' || operatorValue === '-') screen.textContent = operateA(operatorValue, operandA, operandB);
    else if (operatorValue === '*' || operatorValue === '/') screen.textContent = operateB(operatorValue, operandA, operandB);
    operatorValue = '';
    console.log(operandA, operatorValue, operandB);
    console.log(screen.textContent);
}

function add (a,b) {return a + b;}
function subtract (a,b) {return a - b;}
function multiply (a,b) {return a * b;}
function divide (a,b){return a / b;}

function operateA (operator, a, b) {
    if (operator === '+') return add(a,b);
    return subtract(a,b);
}
function operateB (operator, a, b) {
    if (operator === '*') return multiply(a,b);
    return divide(a,b);
}
