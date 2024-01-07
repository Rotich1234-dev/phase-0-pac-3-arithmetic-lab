// add a and b
function add(a, b){
    return a + b;
}
// subtract a and b
function subtract(a, b){
    return a - b;   
}
// multiply a and b
function multiply(a, b){
    return a * b;   
}
// function to divide a and b
function divide(a, b){
    return a / b;
    
}
// function to increament n
function increment(n) {
    return n + 1;
  }
  
 // function to decreament n
  function decrement(n) {
    return n - 1;
  }
  function makeInt(n) {
    const parsedInteger = parseInt(n, 10);
  

    if (isNaN(parsedInteger)) {
      return NaN;
    }
  
    return parsedInteger;
  }
  function preserveDecimal(n) {
    return parseFloat(n);
  }