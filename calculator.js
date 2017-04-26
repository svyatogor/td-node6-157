const Multiplier = require('./multiplier')

class Calculator {
  multiply(x, y) {
    return new Multiplier(x, y).result()
  }
}

module.exports = Calculator