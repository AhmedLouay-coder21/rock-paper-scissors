function getComputerChoice()
{
    // declare the string domain
    const string = ["Rock", "Paper", "scissors"];
    // return “rock”, “paper” or “scissors” randomly
    let randomNumber = Math.floor(Math.random() * string.length)
    // print number
    return string[randomNumber];
}