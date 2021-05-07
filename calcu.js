const inputButtons = document.querySelectorAll('.inputNumber');
const inputDecimal = document.querySelector('.inputDecimal');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const times = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
let screenNumber;
let storage = 0;

inputButtons.forEach(button => button.addEventListener('click', e => {
    screen.textContent += (button.value);
    screenNumber = parseFloat(screen.textContent);
}));

inputDecimal.addEventListener('click', () => {
    if (screen.textContent.includes('.')) return;
    if (screen.textContent === '') screen.textContent = '0.';
    else screen.textContent += '.';
    screenNumber = parseFloat(screen.textContent);
    console.log(screenNumber);
});

clear.addEventListener('click', () => {
    screen.textContent = '';
});

const backSpace = del.addEventListener('click', () => {
    let string = screen.textContent;
    screen.textContent = string.slice(0, string.length - 1);
    screenNumber = parseFloat(screen.textContent);
})

function inputFunction(e) {
    const value = document.querySelector(`.inputNumber[value = '${e.key}']`);
    if (!value) return;
    screen.textContent += value.value;
    screenNumber = parseFloat(screen.textContent);
}

function inputDec(e) {
    const value = document.querySelector(`.inputDecimal[value = '${e.key}']`);
    if (!value) return;
    if (screen.textContent.includes('.')) return;
    if (screen.textContent === '') screen.textContent = '0.';
    else screen.textContent += '.';
    screenNumber = parseFloat(screen.textContent);
}

function screenDelete(e) {
    const screenDel = document.querySelector(`.delete[value = '${e.key}']`);
    if (!screenDel) return;
    let string = screen.textContent;
    screen.textContent = string.slice(0, string.length - 1);
    screenNumber = parseFloat(screen.textContent);
}

operators.forEach(operator => operator.addEventListener('click', () => {
    operate(operator.value, screenNumber, storage);
}));

function add (a,b) {return a + b;}
function subtract (a,b) {return a - b;}
function multiply (a,b) {return a * b;}
function division (a,b){return a / b;}

function operate (operator, a, b) {
    if (operator === '+') add(a,b);
    else if (operator === '-') subtract(a,b);
    else if (operator === '*') multiply(a,b);
    else division(a,b);
}


window.addEventListener('keydown', inputFunction);
window.addEventListener('keydown', screenDelete);
window.addEventListener('keydown', inputDec);