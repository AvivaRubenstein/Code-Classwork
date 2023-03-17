// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
return {
    displayCount: function() {
        count = count + 1;
        console.log(`you have seen ${count} students today.`)
    }
}
}


const myCount = counter();
myCount.displayCount();
// Check the console and expand the given object -> displayFunds -> Scope and then you should be able to visually see your closures.
console.dir(myCount);

console.log(count);

module.exports = counter;
