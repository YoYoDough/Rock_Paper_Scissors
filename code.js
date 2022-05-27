var rock = document.getElementById('rock')
var paper = document.querySelector('#paper')
var scissors = document.querySelector('#scissors')
const score = document.getElementById('score')
const string = document.getElementById('string')
const draw = document.getElementById('tieText')
const finalResult = document.getElementById('finalResult')
rock.addEventListener("click", function() {
    let playerSelection = 'rock'
    let computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
});
paper.addEventListener("click", function() {
    let playerSelection = 'paper'
    let computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
});
scissors.addEventListener("click", function() {
    let playerSelection = 'scissors'
    let computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
});

function computerPlay()
{
    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}
function playRound(playerSelection, computerSelection)
{
    if (computerSelection == playerSelection)
    {
        ++tieAmount;
        tieText.textContent = "Tie-Rounds: " + tieAmount;
    }
    if (computerSelection == 'paper' && playerSelection == 'rock')
    {
        ++computerSelectionCount;
        computerScore.innerHTML = "The computer score is: " + computerSelectionCount;
    }
    else if (computerSelection == "rock" && playerSelection == 'paper')
    {
        ++playerSelectionCount;
        playerScore.innerHTML = "Your score is: " + playerSelectionCount;
    }
    if (computerSelection == "scissors" && playerSelection == 'paper')
    {
        ++computerSelectionCount;
        computerScore.innerHTML = "The computer score is: " + computerSelectionCount;
    }
    else if (computerSelection == "paper" && playerSelection == 'scissors')
    {
        ++playerSelectionCount;
        playerScore.innerHTML = "Your score is: " + playerSelectionCount;
    }
    if (computerSelection == "scissors" && playerSelection == 'rock')
    {
        ++playerSelectionCount;
        playerScore.innerHTML = "Your score is: " + playerSelectionCount;
    }
    else if (computerSelection == "rock" && playerSelection == 'scissors')
    {
        ++computerSelectionCount;
        computerScore.innerHTML = "The computer score is: " + computerSelectionCount;
    }
    if (playerSelectionCount == 5)
    {
        alert("You Win")
        reset();
    }
    else if (computerSelectionCount == 5)
    {
        alert("You Lose, Computer Wins")
        reset();
    }
    else if (tieAmount == 5)
    {
        alert("Its a Draw!")
        reset();
    }
}   
function game(playerSelection, computerSelection)
{
    console.log(playRound(playerSelection, computerSelection))
}
function reset()
{
    computerSelectionCount= 0
    playerSelectionCount = 0;
    tieAmount = 0
    playerScore.innerHTML = "Your score is:" + playerSelectionCount
    computerScore.innerHTML = "The computer score is:" + computerSelectionCount;
    tieText.textContent = "Tie-Rounds: " + tieAmount;
}
var playerSelectionCount = 0;
var computerSelectionCount = 0;
var tieAmount = 0;

