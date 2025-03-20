// გაიმეორეთ slicing Js-შიც


let text = prompt("შეიყვანეთ ტექსტი:");
let start = parseInt(prompt("შეიყვანეთ დასაწყისი ინდექსი:"));
let end = parseInt(prompt("შეიყვანეთ საბოლოო ინდექსი:"));

let slicedText = text.slice(start, end);

console.log("ამოჭრილი ტექსტი:", slicedText);



//-------------------------------------------------------------------------


//შეეცადოთ შექმნათ იგივე პროგრამა Js-ის გამოყენებით




let sentence = prompt("შეიყვანეთ წინადადება:");

let reversedWords = sentence
  .split(" ") // ვშლით წინადადებას სიტყვებად
  .map(word => word.split("").reverse().join("")) // ვაბრუნებთ თითოეულ სიტყვას
  .join(" "); // ვაერთიანებთ უკან

console.log("დაბრუნებული სიტყვები:", reversedWords);

