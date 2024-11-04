//1) შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)

function sayHello() {
    console.log("გამარჯობა");
}

sayHello();



//2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")


function greetByName(name) {
    console.log("გამარჯობა, " + name);
}

greetByName("როსტომი");



//3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)



function incrementNumber(number) {
    return number + 1;
}


console.log(incrementNumber(55)); // შედეგი: 56



//4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)


function toNegative(number) {
    return -Math.abs(number);
}

console.log(toNegative(44) + 1); // შედეგი: -43


console.log(toNegative(44) + 1); // შედეგი: -43




//5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" -> document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)

function getElementAndSetAttributes(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.color = "blue";
        element.style.backgroundColor = "yellow";
        element.textContent = "ახალი ტექსტი";
    }
    return element;
}
getElementAndSetAttributes("first");




