const message = document.createElement("h1");
function getComputerChoice()
{
    // declare the string domain
    const string = ["rock", "paper", "scissors"];
    // return “rock”, “paper” or “scissors” randomly
    let randomNumber = Math.floor(Math.random() * string.length);
    // return computer's choice
    return string[randomNumber];
}
function getHumanChoice()
{
    //ask user to enter one of “rock”, “paper” or “scissors”
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", function() {
        // reset all buttons to default before coloring new one
        buttons.forEach(btn => btn.style.backgroundColor = "");
            if (roundsLeft > 0) {
                let userInput = this.id;
                playRound(userInput, this);
            }
      });
    });
}
let humanScore = 0;
let computerScore = 0;
let roundsLeft = 5;  // total rounds
function playRound (userInput, clickedButton)
{
    //disable all buttons to prevent the player from choosing until the text is gone after every click
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // getting computer's choice from getComputerChoice function
    let computerChoice = getComputerChoice();
    // getting human's choice from getHumanChoice function
    let humanChoice = userInput;
    message.style.cssText = 'color: white';
    // comparing the two choices with all possible possibilities
    if(computerChoice == "rock" && humanChoice == "scissors")
    {
        computerScore++;
        message.textContent = "You lose! rock always beats scissors!";
        clickedButton.style.cssText = 'background-color: red';
    }
    else if (computerChoice == "rock" && humanChoice == "paper")
    {
        humanScore++;
        message.textContent = "You won! and paper always beats rock";
        clickedButton.style.cssText = 'background-color: green';
    }
    else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        humanScore++;
        message.textContent = "You won! you are ROCKING!";
        clickedButton.style.cssText = 'background-color: green';
    }
    else if (computerChoice == "scissors" && humanChoice == "paper")
    {
        computerScore++;
        message.textContent = "auh you lost, you could've won that!";
        clickedButton.style.cssText = 'background-color: red';
    }
    else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        humanScore++;
        message.textContent = "You won, FATALITY!";
        clickedButton.style.cssText = 'background-color: green';
    }
    else if (computerChoice == "paper" && humanChoice == "rock")
    {
        computerScore++;
        message.textContent = "You lost,He folded you like a paper!";
        clickedButton.style.cssText = 'background-color: red';
    }
    else
    {
        message.textContent = "It's a tie!, who would've thought that?";
        clickedButton.style.cssText = 'background-color: yellow';
    }
    body = document.querySelector("body");
    document.body.prepend(message);
    // Delay 1 second before clearing button colors
    setTimeout(() => {
        document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = "");
        message.remove();
        //re color the buttons to transparent to acknowledge the player that he cant psh them, then re enable the buttons after the timeout is off.
        document.querySelectorAll('button').forEach(btn => {
            btn.style.backgroundColor = "";
            btn.disabled = false; // Re-enable buttons here
        });
    }, 2000);
    roundsLeft--;

    if (roundsLeft === 0) {
        setTimeout(() => {
            if (humanScore > computerScore) {
                alert(`Game Over! You win ${humanScore} to ${computerScore}`);
            } else if (computerScore > humanScore) {
                alert(`Game Over! Computer wins ${computerScore} to ${humanScore}`);
            } else {
                alert(`Game Over! It's a tie ${humanScore} to ${computerScore}`);
            }
            // reset for a new game
            humanScore = 0;
            computerScore = 0;
            roundsLeft = 5;
            message.textContent = "New game started! Choose Rock, Paper, or Scissors.";
            // reset all buttons back to default
            document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = "");
        }, 200); // small delay so last message shows before alert
    }
}
function playGame ()
{
    getHumanChoice();
}
//run the game
playGame();