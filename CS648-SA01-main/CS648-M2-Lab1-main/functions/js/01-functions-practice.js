//STEP 1
function halfNumber(x) { 
    return "Half of " + x + " is " + x/2 + ".";
  }
//STEP 2
function squareNumber(x) { 
    return "The result of squaring the number " + x + " is " + x*x + ".";
  }
//STEP 3
function percentOf(x, y) { 
    let val = (x/y)*100;
    return x + " is " +Math.round(val) + "% of " + y + ".";
  }
//STEP 4
function findModulus(x, y) { 
    return y%x + " is the modulus of " + x + " and " + y + ".";
  }
var choice = prompt("Please enter a number to halve");
confirm(halfNumber(choice));
var choice = prompt("Please enter a number to square");
confirm(squareNumber(choice));
var choice1 = prompt("Please enter first number to calculate percent");
var choice2 = prompt("Please enter second number to calculate percent");
confirm(percentOf(choice1, choice2));
var choice1 = prompt("Please enter first number to find modulus");
var choice2 = prompt("Please enter second number to find modulus");
confirm(findModulus(choice1, choice2));
