//get player selection
const playerSelectionRaw = prompt ("Select rock, paper, or scissors");
const playerSelection = playerSelectionRaw.toLowerCase()
console.log(playerSelection)

//generate random computer selection
const randomNumber = Math.random()
const computerSelection = () => {
    if (randomNumber > 0.66666){
        return "rock"
    } else if (randomNumber > 0.33333){
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(computerSelection())

//decide winner. rock beats scissors, scissors beats paper, paper beats rock
function gameResult () {
    if (computerSelection() === playerSelection){
        return "tie"
    } else if (playerSelection === "rock" && computerSelection() === "paper"){
        return "you lose! " + computerSelection() + " beats " + playerSelection
    } else if (playerSelection === "paper" && computerSelection() === "scissors"){
        return "you lose! " + computerSelection() + " beats " + playerSelection
    } else if (playerSelection === "scissors" && computerSelection() === "rock"){
        return "you lose! " + computerSelection() + " beats " + playerSelection
    } else if (playerSelection === "rock" && computerSelection() === "scissors"){
        return "you win! " + playerSelection + " beats " + computerSelection()
    } else if (playerSelection === "paper" && computerSelection() === "rock"){
        return "you win! " + playerSelection + " beats " + computerSelection()
    } else if (playerSelection === "scissors" && computerSelection() === "paper"){
        return "you win! " + playerSelection + " beats " + computerSelection() 
    } else {
        return "not a valid selection"
    }
}

//display outcome
console.log(gameResult())