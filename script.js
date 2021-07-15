//create scoreboard
var playerScore = 0;
var computerScore = 0;

for (i=1; i<=5; i++){

//get player selection
var playerSelectionRaw = prompt ("Select rock, paper, or scissors");
var playerSelection = playerSelectionRaw.toLowerCase()
console.log(playerSelection)

//generate random computer selection
var randomNumber = Math.random()
var computerSelection = (i) => {
    if (randomNumber > 0.66666){
        return "rock"
    } else if (randomNumber > 0.33333){
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(computerSelection(i))

//decide winner. rock beats scissors, scissors beats paper, paper beats rock

function gameResult (i) {
    if (computerSelection(i) === playerSelection){
        return "round "+ + i + " is a tie!";
    } 
    else if (playerSelection === "rock" && computerSelection(i) === "paper"){
        ++computerScore;
        return "you lose round " + i + "! " + computerSelection(i) + " beats " + playerSelection;
    } 
    else if (playerSelection === "paper" && computerSelection(i) === "scissors"){
        ++computerScore;
        return "you lose round " + i + "! " + computerSelection(i) + " beats " + playerSelection;
    } 
    else if (playerSelection === "scissors" && computerSelection(i) === "rock"){
        ++computerScore;
        return "you lose round " + i + "! " + computerSelection(i) + " beats " + playerSelection;
    } 
    else if (playerSelection === "rock" && computerSelection(i) === "scissors"){
        ++playerScore;
        return "you win round " + i + "! " + playerSelection + " beats " + computerSelection(i);
    } 
    else if (playerSelection === "paper" && computerSelection(i) === "rock"){
        ++playerScore;
        return "you win round " + i + "! " + playerSelection + " beats " + computerSelection(i);
    } 
    else if (playerSelection === "scissors" && computerSelection(i) === "paper"){
        ++playerScore;
        return "you win round " + i + "! " + playerSelection + " beats " + computerSelection(i);
    } 
    else {
        ++computerScore;
        return "not a valid selection. you lose round " + i + "!";
    }
}

//display outcome
console.log(gameResult(i));
console.log("your score: " + playerScore);
console.log("computer's score: " + computerScore);
}

function matchResult() {
    if (playerScore === computerScore){
        return "the match is a tie!";
    }
    else if (playerScore > computerScore){
        return "you won the match!";
    }
    else if (playerScore < computerScore){
        return "you lost the match!";
    }
}
console.log(matchResult());