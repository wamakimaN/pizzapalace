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
//always return rounded up to nearest 10
Order.prototype.pizzaPrice = function () {
  return Math.ceil(((this.cheese += this.veggies += this.veggiesTwo += this.meat += this.sauce += this.crust) * this.size) / 10) * 10;
}
//add contents of our array together
Order.prototype.finalCost = function () {
  let cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
    cartTotalPrice += totalPriceArray[arrayElement];
  }
  return cartTotalPrice;
}

//user interface logic
$(document).ready(function () {
  $("form#order").submit(function (event) {
    event.preventDefault()
    //gather input from user
    let pizzaSize = $("#size option:selected").text();
    let pizzaCrust = $("#crust option:selected").text();
    let pizzaSauce = $("#sauce option:selected").text();
    let pizzaVeggies = $("#veggies option:selected").text();
    let pveggiesTwo = $("#more-veggies option:selected").text();
    let pizzaCheese = $("#cheese option:selected").text();
    let pizzaMeat = $("#meat option:selected").text();

    let newOrder = new Order(pizzaSize, pizzaCrust, pizzaCheese, pizzaSauce, pizzaVeggies, pveggiesTwo, pizzaMeat);

    //get value of selected ingredients
    let costSize = parseFloat($("#size option:selected").val());
    let costCrust = parseInt($("#crust option:selected").val());
    let costSauce = parseInt($("#sauce option:selected").val());
    let costVeggy = parseInt($("#veggies option:selected").val());
    let costVeggies = parseInt($("#more-veggies option:selected").val());
    let costCheese = parseInt($("#cheese option:selected").val());
    let costMeat = parseInt($("#meat option:selected").val());

    //avoided errors from a blank input
    if ($("#more-veggies option:selected").val() === ("")) {
      costVeggies = 0;
    }

    let pizzaCost = new Order(costSize, costCrust, costCheese, costSauce, costVeggy, costVeggies, costMeat);

    //ensure value is never re-declared!!
    let finalPrice = pizzaCost.pizzaPrice();

    totalPriceArray.push(finalPrice);
    $("#order-details").show();
    $("#holder").hide()
    $("#pizza-details").append("<ul><li>" + pizzaSize + " ksh " + finalPrice + "</li></ul>");
    $("#final-cost").text(pizzaCost.finalCost());
  })
  $("#delivery").click(function (event) {
    event.preventDefault();
    $("#address").show();
  })
  $("form#address").submit(function (event) {
    event.preventDefault();

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let city = $("#cityName").val();
    let streetAddress = $("#streetAddress").val();

    $("#address").hide();
  })
})