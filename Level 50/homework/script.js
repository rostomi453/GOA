document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

function addText() {
  const textInput = document.getElementById("textInput").value;
  const output = document.getElementById("output");
  output.textContent = textInput;
}

function changeColor() {
  const colorInput = document.getElementById("colorInput").value;
  const output = document.getElementById("output");
  output.style.color = colorInput;
}

function changeSize() {
  const sizeInput = document.getElementById("sizeInput").value;
  const output = document.getElementById("output");
  output.style.fontSize = sizeInput + "px";
}
