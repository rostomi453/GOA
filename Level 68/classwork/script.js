function main() {
    while (true) {
        
        let input1 = prompt("შეიყვანეთ პირველი რიცხვი:");
        if (input1 === null || input1.toLowerCase() === 'exit') {
            alert("პროგრამა დასრულდა. ნახვამდის!");
            break;
        }
        
        let input2 = prompt("შეიყვანეთ მეორე რიცხვი:");
        if (input2 === null || input2.toLowerCase() === 'exit') {
            alert("პროგრამა დასრულდა. ნახვამდის!");
            break;
        }

        
        let num1 = parseFloat(input1);
        let num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            alert("გთხოვთ, შეიყვანეთ სწორი რიცხვები!");
            continue;
        }

        
        let result = num1 * num2;
        alert(`ნამრავლი: ${result}`);

        
        let userInput = prompt("შეიყვანეთ 'exit' პროგრამიდან გამოსასვლელად ან დააჭირეთ OK-ს გასაგრძელებლად:");
        if (userInput && userInput.toLowerCase() === 'exit') {
            alert("პროგრამა დასრულდა. ნახვამდის!");
            break;
        }
    }
}

// ფუნქციის გაშვება
main();
