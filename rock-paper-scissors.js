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
    let userInput = prompt("Enter your desired weapon");
    // for debugging purposes
    console.log(userInput);
    userInput = userInput.toLowerCase();
    return userInput;
}
function checkUserInput (userInput)
{
    // declare the string domain
    const string = ["rock", "paper", "scissors"];
    // if the user didn't enter anything or entered something unexpected ask him again for a prompt
    while(userInput === null || userInput === '' || !string.includes(userInput.toLowerCase()))
    {
        userInput = prompt("Another One!");
    }
    return userInput;
}
let humanScore = 0;
let computerScore = 0;
function playRound (getComputerChoice,checkUserInput)
{
    // getting computer's choice from getComputerChoice function
    let computerChoice = getComputerChoice();
    // getting human's choice from getHumanChoice function
    let humanChoice = checkUserInput(getHumanChoice());
    // comparing the two choices
    if(computerChoice == "rock" && humanChoice == "scissors")
    {
        computerScore++;
        console.log("You lose! rock always beats scissors!")
    }
    else if (computerChoice == "rock" && humanChoice == "paper")
    {
        humanScore++;
        console.log("You won! and paper always beats rock")
    }
    else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        humanScore++;
        console.log("You won! you are ROCKING!")
    }
    else if (computerChoice == "scissors" && humanChoice == "paper")
    {
        computerScore++;
        console.log("auh you lost, you could've won that!")
    }
    else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        humanScore++;
        console.log("You win, FATALITY!");
    }
    else if (computerChoice == "paper" && humanChoice == "rock")
    {
        computerScore++;
        console.log("You lost,He folded you like a paper!");
    }
    else
    {
        console.log("It's a tie!, who would've thought that?");
    }
}