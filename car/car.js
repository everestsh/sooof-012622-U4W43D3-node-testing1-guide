// Build a Car class!

function makeFive(){
    return 5
}
function makeFour(){
    return 4
}
function makeObj() {
    return {}
  } 
  class Car {
    constructor(model, make) {
        this.make = make
        this.model = model
      }
  }
module.exports = {
    makeFive,
    makeFour,
    makeObj,
    Car
}