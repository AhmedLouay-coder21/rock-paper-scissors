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
    if(userInput == null)
    {
        throw new Error("You wanna leave me so soon? what about the rock, paper and scissors? tell them you are going to buy some milk?");;
    }
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
    while(userInput === "" || !string.includes(userInput.toLowerCase()))
    {
        userInput = prompt("Another One!");
        //if the user clicked cancel throw a custom error
        if(userInput == null)
        {
            throw new Error("You wanna leave me so soon? what about the rock, paper and scissors? tell them you are going to buy some milk?");;
        }
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
    // comparing the two choices with all possible possibilities
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
function playGame (playRound, getComputerChoice, checkUserInput)
{
    //make it a five rounds game
    let i = 5;
    // while the round isn't over and the user didn't cancel keep the game on.
    while ( i > 0)
    {
        playRound(getComputerChoice,checkUserInput);
        i--;
    }
    //compare the scores to see who won.
    if (computerScore > humanScore)
    {
        if (confirm("how did that thing beat you? wanna try again?"))
        {
            playGame(playRound, getComputerChoice, checkUserInput);
        }
    }
    else if (computerScore < humanScore)
    {
        if (confirm("I guess that this thing can only sing daisy bell, wanna beat him up again?"))
        {
            playGame(playRound, getComputerChoice, checkUserInput);
        }
    }
    else
    {
        if (confirm("It's a tie, that was unpredictable, wanna see what happens next time?"))
        {
            playGame(playRound, getComputerChoice, checkUserInput);
        }
    }
}
//run the game
playGame(playRound, getComputerChoice, checkUserInput);