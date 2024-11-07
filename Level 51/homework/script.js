function findMinMax(arr) {
    if (arr.length === 0) return [null, null]; // თუ მასივი ცარიელია, დააბრუნებს [null, null]
  
    let max = Math.max(...arr); // უდიდესი რიცხვის პოვნა
    let min = Math.min(...arr); // უმცირესი რიცხვის პოვნა
  
    return [max, min]; // დააბრუნებს მასივს [max, min]
  }
  
  // გამოყენების მაგალითი
  console.log(findMinMax([10, 5, 3, 22, 8])); // [22, 3]
  