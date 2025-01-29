// ბანკის კონსტრუქტორი
class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`${amount} ₾ დაემატა ანგარიშზე.`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("არასაკმარისი თანხა!");
      } else {
        this.balance -= amount;
        console.log(`${amount} ₾ გამოტანილია.`);
      }
    }
  
    showBalance() {
      console.log(`${this.owner}: ${this.balance} ₾`);
    }
  }
  
  // ცხოველის კონსტრუქტორი
  class Animal {
    constructor(name, species, age) {
        this.name = name;      
        this.species = species; 
        this.age = age;         
    }

    makeSound() {
        return `${this.name} გამოსცემს ბგერას!`;
    }
}


const dog = new Animal("ბობი", "ძაღლი", 3);
console.log(dog.makeSound()); 
