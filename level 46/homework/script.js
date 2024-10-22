// საიტზე შესვლისას მომხმარებლის სახელი მოითხოვება prompt()-ის მეშვეობით
window.onload = function () {
    const userName = prompt("გთხოვთ, შეიყვანოთ თქვენი სახელი:");
    document.getElementById("user-info").textContent = `გამარჯობა, ${userName}!`;
  };
  
  // საწყისი რიცხვი
  let currentNumber = 0;
  
  // ფუნქცია, რომელიც აბრუნებს input-ში შეყვანილ მნიშვნელობას
  function getInputValue() {
    const inputValue = document.getElementById("number-input").value;
    return parseFloat(inputValue) || 0; // თუ არ არის რიცხვი, აბრუნებს 0-ს
  }
  
  // რიცხვის ეკრანზე განახლება
  function updateDisplay() {
    document.getElementById("number-display").textContent = currentNumber;
  }
  
  // დამატების ფუნქცია
  function add() {
    currentNumber += getInputValue();
    updateDisplay();
  }
  
  // გამოკლების ფუნქცია
  function subtract() {
    currentNumber -= getInputValue();
    updateDisplay();
  }
  
  // გამრავლების ფუნქცია
  function multiply() {
    currentNumber *= getInputValue();
    updateDisplay();
  }
  