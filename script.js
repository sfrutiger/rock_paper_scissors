//create scoreboard
var playerScore = 0;
var computerScore = 0;

//create variables
var playerSelection = " ";
var computerSelection = " ";
var outcome = " ";

//random computer selection
function computerPlay () {
    var randomNumber = Math.random()
        if (randomNumber > 0.66666){
            return computerSelection = "rock";
        } else if (randomNumber > 0.33333){
            return computerSelection = "paper";
        } else {
            return computerSelection = "scissors";
        };
        };

//score the round
function gameResult () {
    if (computerSelection === playerSelection){
        return outcome = "round " + " is a tie!";
    } 
    else if (playerSelection === "rock" && computerSelection === "paper"){
        ++computerScore;
        return outcome = "you lose round" + "! " + computerSelection + " beats " + playerSelection + ". ";
    } 
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        ++computerScore;
        return outcome = "you lose round" + "! " + computerSelection + " beats " + playerSelection + ". ";
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        ++computerScore;
        return outcome = "you lose round" + "! " + computerSelection + " beats " + playerSelection + ". ";
    } 
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        ++playerScore;
        return outcome = "you win round" + "! " + playerSelection + " beats " + computerSelection + ". ";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock"){
        ++playerScore;
        return outcome = "you win round" + "! " + playerSelection + " beats " + computerSelection + ". ";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        ++playerScore;
        return outcome = "you win round" + "! " + playerSelection + " beats " + computerSelection + ". ";
    } 
    else {
        ++computerScore;
        return outcome = "not a valid selection. you lose round " + "!";
    }
}

//get player selection from button
const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  return playerSelection = "rock";
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
  return playerSelection = "paper";
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
  return playerSelection = "scissors";
});


//play round on button click and display results
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("container").innerHTML = "";
        computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(gameResult());
        console.log("your score: " + playerScore);
        console.log("computer's score: " + computerScore);
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = outcome + " " + String(playerScore) + " to " + String(computerScore);
        container.appendChild(content);

        //declare winner of 5 round match
        if (playerScore === 5) {
            const container = document.querySelector('#container');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "you win the match!";
            container.appendChild(content);
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            const container = document.querySelector('#container');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "you lose the match!";
            container.appendChild(content);
            playerScore = 0;
            computerScore = 0;
        } else {
            const container = document.querySelector('#container');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "pick again";
            container.appendChild(content);
        }
        
        
    })
});





