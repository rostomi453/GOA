// 1) პირველი ელემენტის ტექსტის შეცვლა
let firstElement = document.getElementById('first');
firstElement.innerText = "New Text for First Element";

// 2) მეორე ელემენტის ფერის შეცვლა
let secondElement = document.getElementById('second');
secondElement.style.color = 'red';

// 3) მესამე ელემენტის ფერის და ფონის შეცვლა
let thirdElement = document.getElementById('third');
thirdElement.style.color = 'white';
thirdElement.style.backgroundColor = 'green';

// 4) მეოთხე ელემენტის ტექსტის, ტექსტის ზომისა და პოზიციის შეცვლა
let fourthElement = document.getElementById('fourth');
fourthElement.innerText = "Modified Fourth Element";
fourthElement.style.fontSize = '24px';
fourthElement.style.textAlign = 'center';

// 5) მეხუთე ელემენტში ორი ახალი ელემენტის შექმნა, სხვადასხვა ფერის
let fifthElement = document.getElementById('fifth');

let child1 = document.createElement('div');
child1.style.backgroundColor = 'blue';
fifthElement.appendChild(child1);

let child2 = document.createElement('div');
child2.style.backgroundColor = 'yellow';
fifthElement.appendChild(child2);