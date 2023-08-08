
 
// This function display values
function display(value) {
    document.getElementById("display").value += value;
}

// This function clear all the values
function clearDisplay() {
    document.getElementById("display").value = "";
}
 
// This function evaluates the expression and returns result
function calculate() {
    try {
        var p = document.getElementById("display").value;
        var q = eval(p);
        document.getElementById("display").value = q;
    } catch (error) {
        document.getElementById("display").value = error;
    }
}