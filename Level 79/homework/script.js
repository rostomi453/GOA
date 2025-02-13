//1) დაადგინეთ შემოსული წელი ნაკიანია თუ არა. ნაკიანია წელიწადი თუ:1.ის არის 4-ის ჯერადი, მაგრამ არა 100-ის ჯერადი2.თუ ის არის 400-ის ჯერადი.210021042400დაბეჭდეთ "Yes" ან "No" შესაბამისად. (მაგ : 2007 -No, 2000 -Yes,2100 -No,2104 -Yes)ბონუსი.თუ  შემოსული წელი ნაკიანი არ არის დაბეჭდეთ მასთან ყველაზე ახლოს მყოფი ნაკიანი წელი.


function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(year + " - Yes");
    } else {
      console.log(year + " - No");
      let closestLeapYear = year;
      while (true) {
        closestLeapYear++;
        if ((closestLeapYear % 4 === 0 && closestLeapYear % 100 !== 0) || (closestLeapYear % 400 === 0)) {
          console.log("Closest leap year: " + closestLeapYear);
          break;
        }
      }
    }
  }
  
  checkLeapYear(2100);  
  checkLeapYear(2104);  
  checkLeapYear(2400);  

  

//2) შემოდის სამნიშნა რიცხვი. დათვალეთ მისი ციფრთა ჯამი.

function sumOfDigits(number) {
    if (number < 100 || number > 999) {
      console.log("Please enter a three-digit number.");
      return;
    }
  
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    
    console.log("Sum of digits: " + sum);
  }
  
  sumOfDigits(123);  
  sumOfDigits(789);  
  