//_) unshift, shift, splice, slice, concat, sort, reverse, join 1) დაწერეთ თითოეულისთვის კოდი რომელიც აჩვენებეს ის როგორ მუშაობს


//1
let arr = [2, 3, 4];
arr.unshift(1); // 1 არის დამატებული
console.log(arr); // [1, 2, 3, 4]





//2
let arr = [1, 2, 3, 4];
arr.shift(); // ამოაქვს 1
console.log(arr); // [2, 3, 4]






//3
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6); // ამოაქვს 2 და 3 და ჩასვამს 5 და 6
console.log(arr); // [1, 5, 6, 4]





//4
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // აიღებს ელემენტებს 1-დან 3-მდე
console.log(newArr); // [2, 3, 4]




//5
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]





//6
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]






//7
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]





//8
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]





//9
let arr = ['Hello', 'world'];
let str = arr.join(' ');
console.log(str); // "Hello world"










