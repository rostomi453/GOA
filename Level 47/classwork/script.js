// მომხმარებლის სახელის მოთხოვნა prompt()-ის საშუალებით
let userName = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");

// თუ მომხმარებელი არ შეიყვანს ან დააჭერს Cancel-ს, ნაგულისხმევი მნიშვნელობა იქნება "მომხმარებელი"
if (!userName || userName.trim() === "") {
  userName = "მომხმარებელი";
}

// სახელი გამოიტანება მარჯვენა ზემოთ კუთხეში
document.querySelector('.user-name').innerText = `მოგესალმებით, ${userName}!`;

// ღილაკზე დაჭერისას ტექსტის დამატება
document.getElementById('add-button').addEventListener('click', function () {
  const input = document.getElementById('user-input'); // ინფუთი
  const h2 = document.querySelector('h2'); // h2 ელემენტი

  // თუ ტექსტი არ არის ცარიელი, დაამატოს ტექსტი
  if (input.value.trim()) {
    h2.innerText += ' ' + input.value.trim();
    input.value = ''; // ინფუთის გასუფთავება
  } else {
    alert("გთხოვთ, შეიყვანეთ ტექსტი!"); // ცარიელი ინფუთის შემთხვევაში შეტყობინება
  }
});
