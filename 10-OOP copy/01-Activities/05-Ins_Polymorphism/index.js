const OverloadDemo = function () {
  //the this.area method is defined within the constructor function
  //we have a conditional check to see if the y value was passed in
  //if it's missing, it'll execute the secondary condition only
  this.area = function (x, y) {
    console.log('x = ', x);
    if (!y) {
      console.log('y is not provided');
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
  };
};

const rectangle = new OverloadDemo();
console.log('rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('rectangle.area(5)', rectangle.area(5));
//the function can take 1 value OR 2 values

//One function that can accept 2 different types of inputs = Polymorphism
//in this case, it's one vs two parameters, and it can perform diff types of math based on that condition