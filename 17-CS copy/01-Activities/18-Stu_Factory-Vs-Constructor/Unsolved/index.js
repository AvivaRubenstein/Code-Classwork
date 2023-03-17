// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();


const information = (state) => ({
getInfo: () => console.log(state.title, state.description)
});

const Lesson = (title, description) => {
  const state = {
    title,
    description
  };
  return {...information(state)}
}

const week17 = Lesson("Module 17- Computer Science", "CS for JS");
week17.getInfo();