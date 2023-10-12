let displayScreen = document.getElementById("display-screen");
let currentInput = "";

function appendToDisplay(value) {
    if (displayScreen.value === "0") {
        displayScreen.value = value;
    } else {
        displayScreen.value += value;
    }
    currentInput += value;
}

function clearDisplay() {
    displayScreen.value = "0";
    currentInput = "";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        displayScreen.value = result;
        currentInput = result.toString();
    } catch (error) {
        displayScreen.value = "Error";
    }
}
