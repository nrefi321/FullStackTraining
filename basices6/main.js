
// const user = require('./user')  
// const {info} = require('./user') // Destructuring มาแค่ function ที่ต้องการ
// const {plus} = require('./calculator') // Destructuring มาแค่ function ที่ต้องการ

// console.log(user.user('John',20))

// console.log(user.info('Hello World'))
// console.log(info('This is JS')) // ใช้ Destructuring แล้ว
// console.log(plus(10,20)) // ใช้ Destructuring แล้ว

import { person } from './person.js'

console.log(person('John','male'))