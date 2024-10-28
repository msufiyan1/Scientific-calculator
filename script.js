// let display = document.getElementById("display");
// let currentInput = ''




// const appendValue = (value) => {
//     currentInput += value;
//     display.value = currentInput;
// }


// const clearDisplay = () => {
//     currentInput = '';
//     display.value = '';
// }

// const deleteChar = () => {
//     currentInput = currentInput.slice(0, -1);
//     display.value = currentInput;
// }  
// const calculate = () => {
//     try {
//         display.value = eval(currentInput);
//         currentInput = display.value;

//     }
//     catch (error) {
//         display.value = "ERROR"
//     }
// }


// let history = [];



// const operate = (operations) => {
//     let results;
//     switch (operations) {
//         case 'sin':
//             display.value = Math.sin(eval(currentInput));
//             break;
//         case 'cos':
//             display.value = Math.cos(eval(currentInput));
//             break;
//         case 'tan':
//             display.value = Math.tan(eval(currentInput));
//             break;
//         case 'sqrt':
//             display.value = Math.sqrt(eval(currentInput));
//             break;
//         case 'log':
//             display.value = Math.log10(eval(currentInput));
//             break;
//         case 'exp':
//             display.value = Math.exp(eval(currentInput));
//             break;
//         case 'pow':
//             currentInput = "**";
//             display.value = currentInput;
//             break;
//         case 'fact':
//             display.value = factorial(eval(currentInput));
//             break;
//             case 'e':
//                 display.value = Math.E; 
//                 currentInput = display.value;
//                 break;
//                 case 'π':
//                     display.value = Math.PI;  
//                     currentInput = display.value;
//                     break;
//                     case 'square':
//             display.value = Math.pow(eval(currentInput), 2);  
//             currentInput = display.value;
//             break;
//             case 'reciprocal':
//                 display.value = 1 / eval(currentInput);  
//                 currentInput = display.value;
//                 break;
//             case 'abs':
//                 display.value = Math.abs(eval(currentInput)); 
//                 currentInput = display.value;
//                 break;
//                 case 'mod':
//                     let parts = currentInput.split('%');
//                     if (parts.length === 2) {
//                         display.value = eval(parts[0]) % eval(parts[1]);
//                         currentInput = display.value;
//                     }
//                     break;
//                     case 'powerOfTen':
//                         display.value = Math.pow(10, eval(currentInput)); 
//                         currentInput = display.value;
//                         break;
//                         default:
//                             results = eval(currentInput);
//     }
    
// display.value = results;
// addToHistory(`${currentInput} = ${results}`);
// currentInput = results.toString();
    
// }

// const addToHistory = (entry) => {

//     history.push(entry);
//     const historyDiv = document.getElementById('history');
//     const entryElement = document.createElement("div");
//     entryElement.textContent = entry;
//     historyDiv.appendChild(entryElement);



// }

// function clearHistory() {
//     history = [];
//     document.getElementById("history").innerHTML = "";
// }

// const factorial = (n) => {
//     return n ? n * factorial(n - 1) : 1;
// }

// document.getElementById('dropdownButton').addEventListener('click', function() {
//     const dropdownMenu = document.getElementById('dropdownMenu');
//     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//   });

 
//   window.addEventListener('click', function(e) {
//     if (!e.target.matches('#dropdownButton')) {
//       document.getElementById('dropdownMenu').style.display = 'none';
//     }
// });



let display = document.getElementById("display");
let currentInput = '';

const appendValue = (value) => {
    currentInput += value;
    display.value = currentInput;
}

const clearDisplay = () => {
    currentInput = '';
    display.value = '';
}

const deleteChar = () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}  

const calculate = () => {
    try {
        let result = eval(currentInput);
        display.value = result;
        addToHistory(`${currentInput} = ${result}`);
        currentInput = result.toString();
    } catch (error) {
        display.value = "ERROR";
    }
}

let history = [];

const operate = (operations) => {
    let result;
    switch (operations) {
        case 'sin':
            result = Math.sin(eval(currentInput));
            break;
        case 'cos':
            result = Math.cos(eval(currentInput));
            break;
        case 'tan':
            result = Math.tan(eval(currentInput));
            break;
        case 'sqrt':
            result = Math.sqrt(eval(currentInput));
            break;
        case 'log':
            result = Math.log10(eval(currentInput));
            break;
        case 'exp':
            result = Math.exp(eval(currentInput));
            break;
        case 'pow':
            result = Math.pow(eval(currentInput), 2); // Example: using 2 as default exponent for demo
            break;
        case 'fact':
            result = factorial(eval(currentInput));
            break;
        case 'e':
            result = Math.E;
            break;
        case 'π':
            result = Math.PI;
            break;
        case 'square':
            result = Math.pow(eval(currentInput), 2);
            break;
        case 'reciprocal':
            result = 1 / eval(currentInput);
            break;
        case 'abs':
            result = Math.abs(eval(currentInput));
            break;
        case 'mod':
            let parts = currentInput.split('%');
            if (parts.length === 2) {
                result = eval(parts[0]) % eval(parts[1]);
            }
            break;
        case 'powerOfTen':
            result = Math.pow(10, eval(currentInput));
            break;
        default:
            result = eval(currentInput);
    }

    if (result !== undefined) {
        display.value = result;
        addToHistory(`${operations}(${currentInput}) = ${result}`);
        currentInput = result.toString();
    }
}

const addToHistory = (entry) => {
    history.push(entry);
    const historyDiv = document.getElementById('history');
    const entryElement = document.createElement("div");

    entryElement.id = 'myNewDiv';

    entryElement.textContent = entry;
    historyDiv.appendChild(entryElement);
}

const clearHistory = () => {
    history = [];
    document.getElementById("history").innerHTML = "";
}

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
}

document.getElementById('dropdownButton').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(e) {
    if (!e.target.matches('#dropdownButton')) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
});

