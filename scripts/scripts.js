//business logic
var totalPriceArray = []; //global variable
function Order(size, crust, cheese, sauce, veggies, veggiesTwo, meat) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.sauce = sauce;
  this.veggies = veggies;
  this.veggiesTwo = veggiesTwo;
  this.meat = meat;
}

//create an order from user input
Order.prototype.pizzaDetails = function () {
  return `size:${this.size}
  crust:${this.crust}
  cheese:${this.cheese}
  sauce:${this.sauce}
  toppings:${this.veggies} and ${this.veggiesTwo}
  meat:${this.meat}`
}

