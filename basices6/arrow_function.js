// arrow function

const greet = () => {
    console.log('Hello World');
}
const sum = (a, b) => {
    return a + b;
}
const squre = num => num * num;


function person(name,age) {
    return "Name: " + name + " , Age: " + age
}

const person2 = (name,age) => "Name: " + name + " , Age: " + age

greet();
console.log('ผลลบวกเท่ากับ ' + sum(10, 20));
console.log('ผลคูณเท่ากับ ' + squre(10));

console.log(person('John', 20));
console.log(person2('Jany', 17));

