//Ternary Operator-ის დახმარებით შექმენით პროგრამა რომელიც ამოწმებს მომხამრებლის მიერ შემოტანილი ასაკი მეტია თუ არა 18-ზე

let age = prompt("შეიყვანე ასაკი:");
let message = age >= 18 ? "სრულწლოვანი ხარ!" : "არ ხარ სრულწლოვანი.";
console.log(message);


//მოძიებული მასალის დახმარებით შექმენით ფუნქცია რომელსაც გადაეცემა ორი პარამეტრი და შეამოწმეთ რომელია მეტი, თუ რომელიმე რიცხვი მეტია, დაბეჭდეთ ${num1/num2} მეტია, ხოლო თუ ტოლია გამოიტანეთ "Equal"

function compareNumbers(num1, num2) {
    let result = num1 > num2 
      ? `${num1} მეტია ${num2}-ზე`
      : num2 > num1 
        ? `${num2} მეტია ${num1}-ზე`
        : "Equal";
  
    console.log(result);
  }
  
  // მაგალითი გამოძახება:
  compareNumbers(10, 5);   // 10 მეტია 5-ზე
  compareNumbers(4, 9);    // 9 მეტია 4-ზე
  compareNumbers(7, 7);    // Equal
  