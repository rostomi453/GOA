//შექმენით ფუნქცია რომელიც იღებს key-ების და value-ების მასივს. თქვენი მიზანია დააბრუნოთ ობიექტი შესაბამისი key-value-ბით.



function arrayToObject(keys, values) {
    let obj = {};
    keys.forEach((key, index) => {
        obj[key] = values[index] !== undefined ? values[index] : null;
    });
    return obj;
}


const keys = ["name", "age", "city"];
const values = ["John", 30, "New York"];

console.log(arrayToObject(keys, values));

