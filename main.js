// SET SCREEN
const screen = document.getElementById('entry');
const smallScreen = document.getElementById('smallEntry')

// INITIALIZE VALUE VARIABLES
let currentValue = '', oldValues = [], oldValuesConcatenated = '', number = '', numbers = [0], result = 0;

// CREATE CALCULATOR FUNCTIONALITY

const getValue = value => {
    if(currentValue === '') {
        currentValue = value;
        screen.innerHTML = currentValue

    } else {
        oldValues.push(currentValue);
        currentValue = value;
        for (let i = 0; i < oldValues.length; i++) {
            oldValuesConcatenated = oldValues.join('')
            number = oldValuesConcatenated + currentValue;
            screen.innerHTML = number;
        }
    }   
}

const operations = operator => {
    currentValue = '', oldValues = [];
    screen.innerHTML = '0';
    if (number !== '') {
        numbers.push(parseFloat(number));
        number = '';
    }
    switch(operator) {
        case '+':
        for(let i = 1; i < numbers.length; i++) {
            result += numbers[i];
            numbers[i] = 0;
        }
        
    }
}

const clearScreen = () => {
    currentValue = '', oldValues = [];
screen.innerHTML = '0';
smallScreen.innerHTML = '0'
}

const equal = () => {
currentValue = '', oldValues = [], oldValuesConcatenated = '', number = '', numbers = [0];
console.log(result);
screen.innerHTML = result;
result = 0;
}


// STARTING EFFECTS
ScrollReveal().reveal('body', {delay: 1000})
ScrollReveal().reveal('.calculator', {delay: 1400})