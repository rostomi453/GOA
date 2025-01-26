//1) შექმენით ადამიანის კონტრუქტორი, და შექმენით მისგან სამი ობიექტი, თითოეულს უნდა ჰქონდეს: სახელი, ასაკი, სიმაღლე და ID



class Human {
    constructor(name, age, height, id) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.id = id;
    }
  }
  
  
  const human1 = new Human("გიორგი", 30, 180, 1);
  const human2 = new Human("მარიამი", 25, 165, 2);
  const human3 = new Human("ალექსანდრე", 35, 175, 3);
  
  console.log(human1);
  console.log(human2);
  console.log(human3);

  


//2) შექმენით მანქანის კონსტრუქტორი, და შექმენით მისგან 3 ობიექტი და გამოიტანეთ ისინი, თითოეულს უნდა ქონდეს, სახელი, გამოშვების წელი, ძრავა, ცხენის ძალა და ფერი, ისევე როგორც მფლობელი ( მფლობელი უნდა იყოს ადამიანის ტიპის ობიექტი )



class Car {
    constructor(name, year, engine, horsepower, color, owner) {
      this.name = name;
      this.year = year;
      this.engine = engine;
      this.horsepower = horsepower;
      this.color = color;
      this.owner = owner;
    }
  }
  
  
  const car1 = new Car("Toyota Camry", 2020, "2.5L", 203, "შავი", human1);
  const car2 = new Car("BMW X5", 2022, "3.0L", 335, "თეთრი", human2);
  const car3 = new Car("Mercedes-Benz C-Class", 2021, "2.0L", 255, "ლურჯი", human3);
  
  console.log(car1);
  console.log(car2);
  console.log(car3);
  