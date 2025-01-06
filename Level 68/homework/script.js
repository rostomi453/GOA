//1) შექმენით ფუნქცია რომელიც მომხმარებელს შეაყვანინებს ტექსტს, თუ მომხმარებელს ეს ტექსტი უკვე შეყვანილი ექნება მირჩეს პროგრამა 

function textInputChecker() {
    const enteredTexts = new Set();

    while (true) {
        const userInput = prompt("შეიყვანეთ ტექსტი:");
        if (enteredTexts.has(userInput)) {
            alert("თქვენ უკვე შეიყვანეთ ეს ტექსტი. სცადეთ სხვა ტექსტი.");
        } else {
            enteredTexts.add(userInput);
            alert("ტექსტი მიღებულია!");
        }
    }
}

 textInputChecker()


//2) შექმენით პროგრამა რომელიც მომხმარებლის შეტანილი რიხცვს დაუმატებს ერთ ერთს სანამ მოცემული რიცხვი არ შედგება 0-ებისგან ( პირველი რიცხვუს გარდა ), მაგ: 156–> 200, 5678 —> 6000…

function fillWithZeros() {
    let number = parseInt(prompt("შეიყვანეთ რიცხვი:"), 10);

    if (isNaN(number)) {
        alert("გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.");
        return;
    }

    const strNum = number.toString();
    const firstDigit = strNum[0];
    const zerosCount = strNum.length - 1;
    let result = parseInt(firstDigit + "0".repeat(zerosCount), 10);

    if (result < number) {
        result += Math.pow(10, zerosCount);
    }

    alert(`შედეგი: ${result}`);
}

fillWithZeros()


//3) მომხმარებელს შეაყვანინეთ პაროლი. სანამ სწორ პაროკს არ შეიყვანს (12348765 ), იქამდე გააგრძელეთ კითხვა

function passwordChecker() {
    const correctPassword = "12348765";

    while (true) {
        const password = prompt("შეიყვანეთ პაროლი:");
        if (password === correctPassword) {
            alert("პაროლი სწორია!");
            break;
        } else {
            alert("არასწორი პაროლი, სცადეთ კიდევ.");
        }
    }
}

 passwordChecker()
