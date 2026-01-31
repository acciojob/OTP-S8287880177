//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^\d$/.test(value)) {
      input.value = "";
      return;
    }

    // Move forward
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });
});

// Autofocus first box on load
inputs[0].focus();
