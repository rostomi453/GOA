// მანქანის კონსტრუქტორი
class Car {
    constructor(brand, model, year, engineVolume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
    }

    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}

// წიგნის კონსტრუქტორი
class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }

    getDailyReadingPages() {
        return Math.ceil(this.pages / 7); 
    }
}

// სპორტსმენის კონსტრუქტორი
class Athlete {
    constructor(name, age, sport, trainingHours) {
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.trainingHours = trainingHours;
    }

    getWeeklyTrainingWithIncrease() {
        return Math.ceil(this.trainingHours * 7 * 1.2); 
    }
}

// ტესტი
const car = new Car("Toyota", "Prius", 2018, 1.8);
console.log(car.getDescription());

const book = new Book("1984", "George Orwell", 328, 1949);
console.log(`ყოველდღიურად უნდა წაიკითხო: ${book.getDailyReadingPages()} გვერდი`);

const athlete = new Athlete("John Doe", 25, "Running", 2);
console.log(`კვირაში უნდა ივარჯიშოს: ${athlete.getWeeklyTrainingWithIncrease()} საათი`);
