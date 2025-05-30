
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: division by zero.";
  }
  return a / b;
}

console.log("Add:", add(20, 5));
console.log("Subtract:", subtract(15, 5));
console.log("Multiply:", multiply(12, 5));
console.log("Divide:", divide(12, 5));