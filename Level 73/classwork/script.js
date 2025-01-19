//1) შექმენით ადამიანის, ცხოველის ან მანქანის ობიექტი რომელსაც ექნება 5 property, და გამოიტანეთ მისი ერთ-ერთი property კონსოლში.

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    isElectric: false,
  };
  
  console.log(car.color); 




//2) შექმენით ობიექტი ორი key-value წყვილით ( 2 porpetry-თ ), პირველი key იქნება 'რიგი_0' მეორე key 'რიგი_1', პირველ value-ში შეინახეთ 5 ელემენტიანი მასივი ლუწი რიცხვების, მეორეში კენტი რიცხვების, გადაუყევით ორივე მასივს და გამოიტანეთ თითოეულის ელემენტი ერთდროულად, ( ცალ ცალკე არ გადაუყვეთ პირველს და მეორეს ) 


const numbers = {
    რიგი_0: [2, 4, 6, 8, 10],
    რიგი_1: [1, 3, 5, 7, 9],
  };
  
  const evenArray = numbers.რიგი_0;
  const oddArray = numbers.რიგი_1;
  
  for (let i = 0; i < evenArray.length; i++) {
    console.log(`ლუწი: ${evenArray[i]}, კენტი: ${oddArray[i]}`);
  }
 

  


  //3) შექმენით ფუნქცია რომელიც არგუმენტად იღებს ობიექტს, ამ ობიექტიდან კითხულობს ორ value-ს ( quantity და element ) ( ეს key-ების სახლეებია ), შემდეგ დააბრუნებს მასივს შესაბამისად. ( ის ელემენტი რაც მოცემული იყო იმდენჯერ ჩასმული მასივში რამდენჯერაც quantity-ში იყო მოცემული )



  function createArrayFromObject(obj) {
    const { quantity, element } = obj;
    return Array(quantity).fill(element);
  }
  
  
  const inputObject = {
    quantity: 5,
    element: "apple",
  };
  
  const resultArray = createArrayFromObject(inputObject);
  console.log(resultArray); 
  