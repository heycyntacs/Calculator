const inputButtons = document.querySelectorAll('.inputNumber');
const inputDecimal = document.querySelector('.inputDecimal');
const screenContainer = document.querySelector('.screenContainer');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator');
let operandA, operandB;
let operatorValue = '';
let screenReset = false;

//FOR INPUTTING NUMBERS
//Buttons
inputButtons.forEach(button => button.addEventListener('click', () => input(button.value)));
inputDecimal.addEventListener('click', decimal);
clear.addEventListener('click', reset);
del.addEventListener('click', backSpace);
equals.addEventListener('click', eval);

function input(button) {
    if (screen.textContent === '' || screenReset) screenResetter();
    screen.textContent += (button);
}

function decimal () {
    if (screen.textContent === '' || screenReset) screenResetter();
    if (screen.textContent.includes('.')) return;
    if (screen.textContent === '') screen.textContent = '0.';
    else screen.textContent += '.';
}

function reset () {
    screen.textContent = '';
    operandA = 0;
    operandB = 0;
}

function screenResetter() {
    screenReset = false;
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
    else if (e.key === 'Enter') setOperator();
})

//FOR OPERATIONS
operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.value)));

function setOperator(operator) {
    if(operatorValue !== '') eval();
    operandA = parseFloat(screen.textContent);
    operatorValue = operator;
    screenReset = true;
}

function eval() {
    operandB = parseFloat(screen.textContent);
    if ((isNaN(operandA) || isNaN(operandB)) || (screenReset || operatorValue === '')) return;
    screen.textContent = operate (operatorValue, operandA, operandB);
    operatorValue = '';
}

function add (a,b) {return a + b;}
function subtract (a,b) {return a - b;}
function multiply (a,b) {return a * b;}
function divide (a,b){return a / b;}

function operate (operator, a, b) {
    if (operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    return divide(a,b);
}