//1) შექმენით მანქანის, ცხოველის და მოსწავლის კონტრუქტორები და თითოეულით შექმენით სამ სამი ობიექტი






// მანქანის კონსტრუქტორი
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
      return `${this.year} ${this.make} ${this.model}`;
    };
  }
  
  // სამი მანქანის ობიექტი
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Tesla", "Model 3", 2023);
  const car3 = new Car("Ford", "Mustang", 2019);
  
  console.log(car1.getDetails());
  console.log(car2.getDetails());
  console.log(car3.getDetails());
  
  // ცხოველის კონსტრუქტორი
  function Animal(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.getInfo = function() {
      return `${this.name} არის ${this.age} წლის ${this.species}`;
    };
  }
  
  // სამი ცხოველის ობიექტი
  const animal1 = new Animal("ძაღლი", "ბობი", 4);
  const animal2 = new Animal("კატა", "მიუსი", 2);
  const animal3 = new Animal("სპილო", "ელა", 15);
  
  console.log(animal1.getInfo());
  console.log(animal2.getInfo());
  console.log(animal3.getInfo());
  
  // მოსწავლის კონსტრუქტორი
  function Student(name, grade, subject) {
    this.name = name;
    this.grade = grade;
    this.subject = subject;
    this.getStudentInfo = function() {
      return `${this.name} არის ${this.grade} კლასის მოსწავლე, რომელიც სწავლობს ${this.subject}-ს`;
    };
  }
  
  // სამი მოსწავლის ობიექტი
  const student1 = new Student("ანა", 7, "მათემატიკა");
  const student2 = new Student("გიორგი", 10, "ფიზიკა");
  const student3 = new Student("მარიამი", 12, "ქიმია");
  
  console.log(student1.getStudentInfo());
  console.log(student2.getStudentInfo());
  console.log(student3.getStudentInfo());
  