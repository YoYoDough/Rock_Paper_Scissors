function computerPlay()
{
    var items = ['Rock', 'Paper', 'Scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}
function playRound(playerSelectionn, computerSelectionn)
{
    var playerSelection = playerSelectionn.toLowerCase();
    var computerSelection = computerSelectionn.toLowerCase();
    if (computerSelection == playerSelection)
    {
        var draw = "Draw, you both picked the same";
        return draw;
    }
    if (computerSelection == "paper" && playerSelection == "rock")
    {
        var lost = "You lose, Paper beats Rock and Computer picked Paper.";
        computerSelectionCount++;
        return lost;
    }
    else if (computerSelection == "rock" && playerSelection == "paper")
    {
        var winner = "You win, Paper beats Rock. Computer picked Rock."
        playerSelectionCount++;
        return winner;
    }
    if (computerSelection == "scissors" && playerSelection == "paper")
    {
        var loser = "You lose, Scissors beats Paper. Computer picked Scissors."
        computerSelectionCount++;
        return loser;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors")
    {
        var winner = "You win, Scissors beats Paper. Computer picked Paper."
        playerSelectionCount++;
        return winner;
    }
    if (computerSelection == "scissors" && playerSelection == "rock")
    {
        var winner = "You win, Rock beats Scissors. Computer picked Scissors."
        playerSelectionCount++;
        return winner;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors")
    {
        var loser = "You lose, Rock beats Scissors. Computer picked Rock."
        computerSelectionCount++;
        return loser;
    }
}
function game(playerSelectionn, computerSelectionn)
{
    console.log(playRound(playerSelectionn, computerSelectionn))
}
var playerSelectionCount = 0;
var computerSelectionCount = 0;
for(i = 0; i < 5; i++)
{
    var playerSelectionn = prompt("Please enter Rock, Paper or Scissors.");
    var computerSelectionn = computerPlay();
    console.log(game(playerSelectionn, computerSelectionn))
}
console.log("Player score To Computer Score");
console.log(playerSelectionCount + " To " + computerSelectionCount);
if (playerSelectionCount > computerSelectionCount)
{
    console.log("You win")
}
else if (playerSelectionCount < computerSelectionCount)
{
    console.log("You lose")
}
else if (playerSelectoinCount == computerSelectionCount)
{
    console.log("Its a Draw")
}
