// TODO: What does 'this' refer to?
//it will refer to the window object, because when "this" isn't in an object it refers to the window
console.log(this);

// TODO: What does 'this' refer to?  Also the window
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? this refers to the child object 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? this refers to the investment object 5000 x 1.5
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
