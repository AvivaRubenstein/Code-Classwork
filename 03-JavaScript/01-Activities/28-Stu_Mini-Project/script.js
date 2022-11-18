var answer;
function askUser() {
    answer = prompt("Choose R, P, or S");
}

askUser();
//console.log(answer);

var computerChoice = "R";
if(answer == computerChoice){
    console.log("It's a tie!");
} else if (answer= "R" && computerChoice == "S") {
    console.log("You win!");
} else if (answer= "R" && computerChoice == "P") {
    console.log("You lose!");
} else if (answer="P" && )

//alert()

//play game function, vars track score, array of options for computer to choose from randomly