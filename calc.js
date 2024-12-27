let cInput = "";
let pInput = "";
let operator = "";

function append(number) {
    if (number === '.' && cInput.includes('.')) return; 
    cInput += number;
    update();
}

function Operator(op) {
    if (cInput === "") 
    {
        return;
    }
        
    if (pInput !== "") {
        calculate();
    }
    operator = op;
    pInput = cInput;
    cInput = "";
    update();
}

function calculate() {
    let result;
    const prev = parseFloat(pInput);
    const current = parseFloat(cInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
        result = prev + current;
        break;
        case "-":
        result = prev - current;
        break;
        case "*":
        result = prev * current;
        break;
        case "/":
        result = current !== 0 ? prev / current : "Error";
        break;
        case "%":
        result = prev % current;
        break;
        default:
            return;
    }

    cInput = result;
    operator = "";
    pInput = "";
    update();
}

function clearInput() {
    cInput = "";
    pInput = "";
    operator = "";
    update();
}

function erase() {
    cInput = cInput.toString().slice(0, -1);
    update();
}

function update() {
    const display = document.querySelector(".display");
    if (operator) {
        display.value = `${pInput} ${operator} ${cInput}`;
    } else {
        display.value = cInput || pInput || "0";
    }
}
