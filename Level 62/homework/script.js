//მომხმარებელს შემოაყვანინეთ ტექსტი -prompt-ის მეშვეობით, თუ ეს ტექსტი შეიცავს რაიმე ნიშანს ან რიცხვს გამოიტანეთ "ერორი", სხვა შემხვევაში სიტყვა "წარმატებული ოპერაცია"ერრორის მესიჯთან ერთად გამოიგტანეთ რა ინდექსებზე შეინიშნა რიცხვ(ები)


function validateInput(input) {
    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

    let matches = [...input.matchAll(regex)];

    if (matches.length > 0) {
      
        let indices = matches.map(match => match.index);
        return `Error: Invalid characters found at indices: ${indices.join(", ")}`;
    } else {
        return "Successful operation";
    }
}


const userInput = prompt("Enter your text: ");
const result = validateInput(userInput);
console.log(result);
