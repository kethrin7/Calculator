const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

let operator = "";
let num1 = "";
let num2 = "";
let result = "";

buttons.forEach((button) => {
  switch (button.id) {
    case "clear-all":
      button.addEventListener("click", () => (screen.value = ""));
      break;
    case "clear":
      button.addEventListener(
        "click", () => (screen.value = screen.value.slice(0, -1))
      );
      break;
    case "divide":
    case "multiply":
    case "minus":
    case "plus":
      button.addEventListener("click", () => {
        operator = button.textContent;
        num1 = parseFloat(screen.value);
        screen.value = "";
      });
      break;
    case "equal":
      button.addEventListener("click", () => {
        num2 = parseFloat(screen.value);
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
          default:
            num1 += num2;
            break;
        }
        screen.value = result;
      });
      break;

    default:
      button.addEventListener(
        "click", () => (screen.value += button.textContent));
    }
});