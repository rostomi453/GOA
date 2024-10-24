// მომხმარებლის სახელის მოთხოვნა prompt()-ის საშუალებით
let userName = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");

// თუ მომხმარებელი არ შეიყვანს ან დააჭერს Cancel-ს, ნაგულისხმევი მნიშვნელობა იქნება "მომხმარებელი"
if (!userName || userName.trim() === "") {
  userName = "მომხმარებელი";
}

// სახელი ვებგვერდზე ზემოთა მარჯვენა კუთხეში გამოჩნდება
document.querySelector('.user-name').innerText = `მოგესალმებით, ${userName}!`;

// რეზულტატის საწყისი მნიშვნელობა არის 0
let result = 0;

// რეზულტატის გამოჩენა ეკრანზე
function updateResult(newResult) {
  document.getElementById('result').innerText = newResult;
}

// ღილაკების EventListener-ები
document.getElementById('add-button').addEventListener('click', function () {
  const inputValue = parseFloat(document.getElementById('number-input').value);
  if (!isNaN(inputValue)) {
    result += inputValue;
    updateResult(result);
  } else {
    alert("გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.");
  }
});

document.getElementById('subtract-button').addEventListener('click', function () {
  const inputValue = parseFloat(document.getElementById('number-input').value);
  if (!isNaN(inputValue)) {
    result -= inputValue;
    updateResult(result);
  } else {
    alert("გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.");
  }
});

document.getElementById('multiply-button').addEventListener('click', function () {
  const inputValue = parseFloat(document.getElementById('number-input').value);
  if (!isNaN(inputValue)) {
    result *= inputValue;
    updateResult(result);
  } else {
    alert("გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.");
  }
});
