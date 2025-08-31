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
            message.remove();
        let userInput = this.id;
        playRound(userInput);
      });
    });
}
let humanScore = 0;
let computerScore = 0;
function playRound (userInput)
{
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
    }
    else if (computerChoice == "rock" && humanChoice == "paper")
    {
        humanScore++;
        message.textContent = "You won! and paper always beats rock";
    }
    else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        humanScore++;
        message.textContent = "You won! you are ROCKING!";
    }
    else if (computerChoice == "scissors" && humanChoice == "paper")
    {
        computerScore++;
        message.textContent = "auh you lost, you could've won that!";
    }
    else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        humanScore++;
        message.textContent = "You win, FATALITY!";
    }
    else if (computerChoice == "paper" && humanChoice == "rock")
    {
        computerScore++;
        message.textContent = "You lost,He folded you like a paper!";
    }
    else
    {
        message.textContent = "It's a tie!, who would've thought that?";
    }
    body = document.querySelector("body");
    document.body.prepend(message);
}
//run the game
getHumanChoice();