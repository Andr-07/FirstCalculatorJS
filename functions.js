function clearAll() {
    inputWindow.value = "";
    key = false;
    clearVar();
}

function clearLast() {
    if (inputWindow.value) {
        inputWindow.value = inputWindow.value.substring(0, inputWindow.value.length - 1);
        }
        num1 = inputWindow.value;
    }

function clearVar() {
    num1 = undefined;
    num2 = undefined;
    numberOfButton = "";
    
}

function counting(num1,operator,num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2;
            break;
            
        case "%":
            return num2*100/num1;
            break;   
    }
}