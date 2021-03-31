// SET SCREEN
const screen = document.getElementById('entry');
const smallScreen = document.getElementById('smallEntry');

// INITIALIZE VALUE VARIABLES
let number = 0, current = [], operationNumbers = [], operatedNumber = 0;

// CREATE CALCULATOR FUNCTIONALITY
const getValue = value => {
    current.push(value); 
    number = current.join('');
    screen.innerHTML = number;
}

const operations = operator => {
    switch(operator){
        // ADD OPERATIONS FUNCTIONALITY
        //operationNumbers have te numbers we were entering before.
        //operatedNumber will recive the corresponding operations with numbers recived from operationNumbers
        case '+': 
        operationNumbers.push(number);
        number = 0, current = [];
        if (operationNumbers.length === 1) {
        smallScreen.innerHTML = operationNumbers[0] + ' +';
        }
        break;

        case '-':
            operationNumbers.push(number);
            number = 0, current = [];
            if (operationNumbers.length === 1) {
            smallScreen.innerHTML = operationNumbers[0] + ' -';
            }
        break;

        case '*':
            operationNumbers.push(number);
            number = 0, current = [];
            if (operationNumbers.length === 1) {
            smallScreen.innerHTML = operationNumbers[0] + ' *';
            }
        break;

        case '/':
            operationNumbers.push(number);
            number = 0, current = [];
            if (operationNumbers.length === 1) {
            smallScreen.innerHTML = operationNumbers[0] + ' /';
            }
        break;
    }
}

const clearScreen = () => {
number = 0, current = [], operationNumbers = [];
screen.innerHTML = '0';
smallScreen.innerHTML = '0'
}

const equal = () => {

}


// STARTING EFFECTS
ScrollReveal().reveal('body', {delay: 1000})
ScrollReveal().reveal('.calculator', {delay: 1400})