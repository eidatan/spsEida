//Objective SPS human vs computer
// What is the input going to be? scissors, paper, stone
// What should the output be?
//scissors beats paper,
//paper beats stone, and
//stone beats scissors
//same will be draw
// How will the computer's option be randomly generated? math.random
// How many different cases are there?
// Scissors Paper Stone
// 0        0     0 (not possible)
// 0        0     1 (YES, BOTH STONE)
// 0        1     0 (YES, BOTH PAPER)
// 0        1     1 (YES)
// 1        0     0 (YES, BOTH SCISSORS)
// 1        0     1 (YES)
// 1        1     0 (YES)
// 1        1     1 (not possible)

// function to trigger button click on enter key
document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("submit-button").click();
    }
  });

// function to generate random number
var generateRandomNumber = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var randomNumber = randomInteger + 1;

  console.log(`===== random generated number is ${randomNumber} =====`);

  return randomNumber;
};

//set the initial Scissor Paper Stone (SPS) state  as blank
//(??? Q: is this necssary and must it be at global scope?)
var spsState = "";

// depending on the generateRandomNumber's output, the SPS state will toggle
// assign random number to SPS state: 1 or 2 as scissors, 3 or 4 as paper, 5 or 6 as stone
var convertRandomNumberToSpsState = function () {
  var computerRandomNumber = generateRandomNumber();

  if (computerRandomNumber == 1 || computerRandomNumber == 2) {
    spsState = "scissors";
    return spsState;
  }

  if (computerRandomNumber == 3 || computerRandomNumber == 4) {
    spsState = "paper";
    return spsState;
  }
  if (computerRandomNumber == 5 || computerRandomNumber == 6) {
    spsState = "stone";
    return spsState;
  }
};

//initialise counter state
var counterForYouWin = 0;
var counterForComputerWin = 0;

// main function to compare computer's decision v.s. human input
var main = function (input) {
  var computerDecision = convertRandomNumberToSpsState();
  // var computerMode= mainMode(input1);

  console.log("computer decides to show " + computerDecision);
  console.log("You showed " + input);

  // conditional check for draw
  if (input == "scissors" && computerDecision == "scissors") {
    var result = `It's a draw. You showed ${input}, and computer also showed ${computerDecision}`;
    return result;
  }
  if (input == "paper" && computerDecision == "paper") {
    var result = `It's a draw. You showed ${input}, and computer also showed ${computerDecision}`;
    return result;
  }
  if (input == "stone" && computerDecision == "stone") {
    var result = `It's a draw. You showed ${input}, and computer also showed ${computerDecision}`;
    return result;
  }

  // conditional check if you win
  if (input == "paper" && computerDecision == "stone") {
    counterForYouWin = counterForYouWin + 1;
    console.log(
      `you wins ${counterForYouWin}x, computer won ${counterForComputerWin}x`
    );

    var result = `You win! Your ${input} beats computer's ${computerDecision}`;
    return result;
  }

  if (input == "stone" && computerDecision == "scissors") {
    counterForYouWin = counterForYouWin + 1;
    console.log(
      `you wins ${counterForYouWin}x, computer won ${counterForComputerWin}x`
    );

    var result = `You win! Your ${input} beats computer's ${computerDecision}`;
    return result;
  }

  if (input == "scissors" && computerDecision == "paper") {
    counterForYouWin = counterForYouWin + 1;
    console.log(
      `you wins ${counterForYouWin}x, computer won ${counterForComputerWin}x`
    );

    var result = `You win! Your ${input} beats computer's ${computerDecision}`;
    return result;
  }

  // conditional check if you lose
  if (input == "stone" && computerDecision == "paper") {
    counterForComputerWin = counterForComputerWin + 1;
    console.log(
      `computer wins ${counterForComputerWin}x, you won ${counterForYouWin}x`
    );

    var result = `Oops, you lose! Your ${input} is beaten by computer's ${computerDecision}`;
    return result;
  }
  if (input == "scissors" && computerDecision == "stone") {
    counterForComputerWin = counterForComputerWin + 1;
    console.log(
      `computer wins ${counterForComputerWin}x, you won ${counterForYouWin}x`
    );

    var result = `Oops, you lose! Your ${input} is beaten by computer's ${computerDecision}`;
    return result;
  }

  if (input == "paper" && computerDecision == "scissors") {
    counterForComputerWin = counterForComputerWin + 1;
    console.log(
      `computer wins ${counterForComputerWin}x, you won ${counterForYouWin}x`
    );
    var result = `Oops, you lose! Your ${input} is beaten by computer's ${computerDecision}`;
    return result;
  }
};
