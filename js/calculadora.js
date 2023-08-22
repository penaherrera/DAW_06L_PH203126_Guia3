let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculateInverse() {
    displayValue = (1 / parseFloat(displayValue)).toString();
    document.getElementById("display").value = displayValue;
}

function calculateSquare() {
    displayValue = (parseFloat(displayValue) ** 2).toString();
    document.getElementById("display").value = displayValue;
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    document.getElementById("display").value = displayValue;
}
