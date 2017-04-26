const td = require('testdouble')

MultiplierMock = td.replace('./multiplier')
const Calculator = require('./calculator')

const calculator = new Calculator()
console.log('2x3 = ', calculator.multiply(2, 3))