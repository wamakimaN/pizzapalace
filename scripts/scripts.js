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

//calculate the cost of a pizza
Order.prototype.pizzaPrice = function () {
  return ((this.cheese+=this.veggies+=this.veggiesTwo+=this.meat+= this.sauce+= this.crust)*this.size)
}

//user interface logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault()

    let pizzaSize = $("#size option:selected").text();
    let pizzaCrust = $("#crust option:selected").text();
    let pizzaSauce = $("#sauce option:selected").text();
    let pizzaVeggies = $("#veggies option:selected").text();
    let pveggiesTwo = $("#more-veggies option:selected").text();
    let pizzaCheese = $("#cheese option:selected").text();
    let pizzaMeat = $("#meat option:selected").text();

    let newOrder = new Order(pizzaSize, pizzaCrust, pizzaCheese, pizzaSauce, pizzaVeggies, pveggiesTwo, pizzaMeat);
    console.log(newOrder.pizzaDetails());
  })
})