// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    greet: function () {
      console.log(
        //this.name and this.gradeYear returned "undefined" as their values!
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();

module.exports = student;
