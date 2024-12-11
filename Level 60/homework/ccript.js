function checkNumber(num) {
    if (num % 2 === 0 && num > 10) {
      console.log("რიცხვი არის ლუწი და 10-ზე მეტი");
    } else if (num % 2 !== 0 && num < 5) {
      console.log("რიცხვი არის კენტი და 5-ზე ნაკლები");
    } else if (num > 20 || num < 5) {
      console.log("რიცხვი არის 20-ზე დიდი ან 5-ზე ნაკლები");
    } else if (!(num > 10 || num < 5)) {
      console.log("რიცხვი არ არის არც 10-ზე მეტი და არც 5-ზე ნაკლები");
    }
  }
  
  // მაგალითი
  checkNumber(12); // ეს დაბეჭდავს "რიცხვი არის ლუწი და 10-ზე მეტი"

  

  function checkAge(age, hasParentalConsent) {
    if (age >= 18) {
      console.log("თქვენ სრულწლოვანი ხართ");
    } else if (age < 18 && hasParentalConsent) {
      console.log("თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი");
    } else {
      console.log("თქვენ ვერ გამოიყენებთ ამ სერვისს");
    }
  }
  
  // მაგალითი
  checkAge(16, true); // ეს დაბეჭდავს "თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი"

  

  function checkTriangle(side1, side2, side3) {
    if (side1 > 0 && side2 > 0 && side3 > 0 &&
        side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      console.log("ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს");
    } else {
      console.log("ეს სამი გვერდი არ შეიძლება წარმოადგენდეს სამკუთხედს");
    }
  }
  
  // მაგალითი
  checkTriangle(3, 4, 5); // ეს დაბეჭდავს "ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს"
  