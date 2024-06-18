let display = document.getElementById('display');
let currentNumber = '0';
let operator = '';
let previousNumber = '';

function appendToDisplay(value) {
    if (value === '.' && currentNumber.includes('.')) return; // Avoid multiple decimals
    if (currentNumber === '0' && value !== '.' ) {
        currentNumber = value;
    } else {
        currentNumber += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    operator = '';
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentNumber;
}

function selectOperator(value) {
    operator = value;
    previousNumber = currentNumber;
    currentNumber = '0';
}

function calculate() {
    if (operator === '') return; // No operator selected

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case 'x':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = '';
    updateDisplay();
}
