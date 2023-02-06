function rockpaperscissors() {
var choice = prompt("Do you choose rock, paper or scissors?");
while (choice !=="rock" && choice !=="paper" && choice !=="scissors"){
  confirm(choice + " is invalid. Please try again");
  choice = prompt("Do you choose rock, paper or scissors?");
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("You Chose:  "+choice);
console.log("The Computer Chose:  "+computerChoice);

  if (choice === computerChoice) {
    confirm('Sorry, but there was a tie. You and the computer are equals. Try again');
    return rockpaperscissors();
  }
  if (choice === "rock"){
    if (computerChoice === "paper"){
      return "You lost! Better luck next time";
    }
    if (computerChoice === "scissors") {
      return "You won!!!";
    }
  }
  if (choice === "paper"){
    if (computerChoice === "scissors"){
        return "You lost! Better luck next time";
    }
    if (computerChoice === "rock"){
        return "You won!!!";
    }
  }
  if (choice === "scissors"){
    if (computerChoice === "rock"){
        return "You lost! Better luck next time";
    }
    if (computerChoice === "paper"){
        return "You won!!!";
    }
  }
}
confirm(rockpaperscissors());