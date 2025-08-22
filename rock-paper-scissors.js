function getComputerChoice()
{
    // declare the string domain
    const string = ["rock", "paper", "scissors"];
    // return “rock”, “paper” or “scissors” randomly
    let randomNumber = Math.floor(Math.random() * string.length)
    // print number
    return string[randomNumber];
}