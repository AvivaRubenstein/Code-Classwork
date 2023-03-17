const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    //throughout the array, we add the previous value to the currentValue and return that
    let sum = accumulator + currentValue;
//check if this is the last item in the array -- bc then we actually want to divide by arrays length to get the average
//and return that number instead
    if(index === array.length -1){
        return sum / array.length;
    }
    return sum;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
