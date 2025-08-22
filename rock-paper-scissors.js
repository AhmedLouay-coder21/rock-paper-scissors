function getComputerChoice()
{
    // declare the string domain
    const string = ["rock", "paper", "scissors"];
    // return “rock”, “paper” or “scissors” randomly
    let randomNumber = Math.floor(Math.random() * string.length);
    // print number
    return string[randomNumber];
}
function getHumanChoice ()
{
    //ask user to enter one of “rock”, “paper” or “scissors”
    let userInput = prompt("Enter your desired weapon");
    // for debugging purposes
    console.log(userInput);
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
}