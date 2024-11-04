// ობიექტი აღწერს ჩემი მეგობრების მონაცემებს
// თითოეულ ობიექტს აქვს შემდეგი კუთვნილებები: სახელი, ასაკი, პროფესია, ჰობი, საყვარელი ფერი
let friend1 = {
    name: "ლაშა",        // სახელი
    age: 29,             // ასაკი
    profession: "პროგრამისტი", // პროფესია
    hobby: "მოგზაურობა",      // ჰობი
    favoriteColor: "მწვანე"  // საყვარელი ფერი
};

let friend2 = {
    name: "ანა",
    age: 27,
    profession: "დიზაინერი",
    hobby: "ხატვა",
    favoriteColor: "ლურჯი"
};

let friend3 = {
    name: "გიორგი",
    age: 31,
    profession: "მუსიკოსი",
    hobby: "გიტარაზე დაკვრა",
    favoriteColor: "წითელი"
};

// დაბეჭდეთ ყველა ობიექტი მთლიანად
console.log(friend1);
console.log(friend2);
console.log(friend3);

// თითოეული ობიექტიდან 2 კონკრეტული კუთვნილების დაბეჭდვა
console.log(friend1.name, friend1.hobby);
console.log(friend2.name, friend2.hobby);
console.log(friend3.name, friend3.hobby);

// კუთვნილების შეცვლა და შედეგის დაბეჭდვა
friend1.favoriteColor = "ცისფერი";
console.log("შეცვლილი ფერი ლაშასთვის:", friend1.favoriteColor);

friend2.hobby = "ცურვა";
console.log("შეცვლილი ჰობი ანასთვის:", friend2.hobby);

friend3.profession = "ფოტოგრაფი";
console.log("შეცვლილი პროფესია გიორგისთვის:", friend3.profession);
