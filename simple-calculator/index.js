const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "x") value = "*"; 
    if (value === "=") {
      try {
        display.value = eval(display.value); 
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

