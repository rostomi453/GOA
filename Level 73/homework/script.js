///შექმენით მასივი ობიექტების, ობიექტი უნდა შეუცავდეს სახელს, ასაკს, სიმაღლეს და სქესს. თქვენი მიზანი გამოიტანოთ თითოეული ობიექტი შემდეგ ფორმატში:1) ადამიანი:სახელი: (მისი სახელი),ასაკი: (მისი ასაკი), სიმაღლე: (მისი სიმაღლე)… და ასე შემდეგ თითოეულ ადამიანზე (ობიექტზე) და მათ property ებზე.




const people = [
    { name: "თეა", age: 28, height: "170 სმ", gender: "ქალი" },
    { name: "გიორგი", age: 32, height: "180 სმ", gender: "კაცი" },
    { name: "მარიამი", age: 25, height: "165 სმ", gender: "ქალი" },
    { name: "დავით", age: 40, height: "175 სმ", gender: "კაცი" },
  ];
  
  
  people.forEach((person, index) => {
    console.log(
      `${index + 1}) ადამიანი:\n` +
      `სახელი: ${person.name},\n` +
      `ასაკი: ${person.age},\n` +
      `სიმაღლე: ${person.height},\n` +
      `სქესი: ${person.gender}\n`
    );
  });
  