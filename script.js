const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    let val = e.target.value;

    // Only allow digits
    if (!/^[0-9]$/.test(val)) {
      input.value = "";
      return;
    }

    // Move forward automatically
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // important for tests

      // Always clear current box
      input.value = "";

      // Move focus backward AND clear that one too
      if (index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
      }
    }
  });

});

// Focus first box initially
inputs[0].focus();

