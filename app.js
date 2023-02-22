const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

let operator = "";
let num1 = "";

const handleClick = (button) => {
  switch (button.id) {
    case "clear-all":
      screen.value = "";
      break;
    case "clear":
      screen.value = screen.value.slice(0, -1);
      break;
    case "divide":
    case "multiply":
    case "minus":
    case "plus":
      operator = button.textContent;
      num1 = +screen.value;
      screen.value = "";
      break;
    case "equal":
      const num2 = +screen.value;
      const result =
        operator === "+"
          ? num1 + num2
          : operator === "-"
          ? num1 - num2
          : operator === "*"
          ? num1 * num2
          : num1 / num2;
      screen.value = result;
      break;
    default:
      screen.value += button.textContent;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", () => handleClick(button))
);
