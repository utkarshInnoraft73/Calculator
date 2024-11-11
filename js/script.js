console.log("hello")
// console.log(parseFloat(var1));
function evaluate(operation) {
  const var1 = parseFloat(document.querySelector(".calculator__inputs--number1").value);
  const var2 = parseFloat(document.querySelector(".calculator__inputs--number2").value);
  const resultInput = document.querySelector(".calulator__result--result");
  if(isNaN(var1) || isNaN(var2)) {
    alert("Please enter both the fields.")
  }

  let result;

  switch (operation) {
    case "add":
      result = var1 + var2;
      break;
    case "substract":
      result = var1 - var2;
      break;
    case "multiply":
      result = var1 * var2;
      break;
    case "devide":
      if (var2 === 0) {
        alert("Second number should not be Zero.");
        result = "Invalid input";
        break;
      }
      else {
        result = var1 / var2;
        break;
      }
  
    default:
      alert("Invalid input!")
      break;
  }

  resultInput.value = result;
  console.log(resultInput.value);
}

document.querySelector(".calculator_operations--add").addEventListener("click", ()=>evaluate("add"));
document.querySelector(".calculator_operations--substract").addEventListener("click", ()=>evaluate("substract"));
document.querySelector(".calculator_operations--multiply").addEventListener("click", ()=>evaluate("multiply"));
document.querySelector(".calculator_operations--devide").addEventListener("click", ()=>evaluate("devide"));