class orderPizza{
  function(topping,crust,size,number,totalPrice) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.number = number;
  this.totalPrice = totalPrice;
  }
}

var pizzaPrice
var pizzaToppings
var pizzaCrust
var pizzaSize
var pizzaNumber
var totalCharge

$(document).ready(function(){
  $("#order").click(function(e){
    pizzaToppings = parseInt($("form input[name='topping']:checked").val());
    pizzaCrust = parseInt($("form input[name='crust']:checked").val());
    pizzaSize= parseInt($("form input[name='size']:checked").val());
    pizzaNumber = parseInt($("form input[name='number']").val());

    pizzaPrice =  (pizzaToppings + pizzaCrust + pizzaSize ) * pizzaNumber;
    alert("The total charge for your pizza is"  +  " " + "Ksh"+ pizzaPrice);
    
    totalCharge = (pizzaPrice) + 300 ;
    console.log(totalCharge);
    e.preventDefault();
  });

   
  
  
  $("#deliver").click(function(e){
    alert("The delivery will cost Ksh 300");
    prompt("Let us know your location in the following order, Constituency/Area/Adress :");
    alert("Your pizza will be delivered to your location ASAP");
    e.preventDefault();
  });


  $("#checkout").click(function(e){
    $("#number").text("Number of pizza:"+ " " + pizzaNumber);
    $("#charge").text("Pizza price:"+" " + pizzaPrice);
    $("#total").text("Total Charge:"+ " "+ totalCharge);
    e.preventDefault();
  })

  var newOrder = new orderPizza(pizzaToppings,pizzaCrust.pizzaSize,pizzaNumber,pizzaPrice);
  console.log(newOrder);
  
});
