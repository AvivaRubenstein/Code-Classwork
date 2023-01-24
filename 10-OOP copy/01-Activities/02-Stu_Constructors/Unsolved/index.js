// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
//Note: a function inside of an object is called a Method
//objects make heavy use of "this" so that they can refer to themselves
    this.introduction = () => {
     {
        console.log(`My name is ${this.name} and my favorite technology is ${this.tech}`);
      }
    };
  }


// TODO: Create a new object using the 'Developer' constructor ---this is called and Instance of an object
const aviva = new Developer("Aviva", "javaScript");
// TODO: Call the 'introduction()' method on the new object
aviva.introduction();