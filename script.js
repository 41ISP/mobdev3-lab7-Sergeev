const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let currentExpression = '';
let newres= 0
function handleButton(button) {
    const value = button.target.textContent;
    if (value === '=') {
        const res = currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")
        newres = eval(res);
        display.textContent = newres;
        currentExpression = newres;
    } else if (value === 'AC') {
        currentExpression = '';
        display.textContent = '0';
    } else if (value === '%') {
        const res = currentExpression
        newres = eval(res);
        newres = newres / 100;
        display.textContent = newres;
        currentExpression = newres;
    } else if (value === '+/-') {
        const res = currentExpression
        newres = eval(res);
        currentExpression = -newres;
        display.textContent = -newres;
    } else if (display.textContent === '0') {
 display.textContent = value;
 currentExpression = value;
    }
    else {
        display.textContent += value;
        currentExpression += value;
    }
};
buttons.forEach(button => {
    button.addEventListener('click', handleButton);
})