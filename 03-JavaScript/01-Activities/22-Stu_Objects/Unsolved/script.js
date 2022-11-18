//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Latte",
    sugars: 2,
    orderReady: true
};

if (customerOrder.orderReady == true) {
    console.log("Your drink: " + customerOrder.drinkName + " with " +
    customerOrder.sugars + " sugars is ready for pickup"); 
} else { console.log("Your drink: " + customerOrder.drinkName + " with " + 
customerOrder.sugars + " is still in order queue");

}

var car = {
    tires: "undefined",
};

var wheels = {
    type: "racing",
    color: "black"
};

car.tires=wheels;
//you can store an object within another object