let getComputerChoice = function () {
    const choice = Math.random();
    if (choice < 0.34) {
        return "rock";
    } else if (choice < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
};

let gethumanChoice = function () {
    let choice = prompt("enter rock, paper, scissors");
    return choice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

let playground = function () {
    const humanChoice = gethumanChoice();
    const computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultText = "You win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultText = "You win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultText = "You win!";
    } else if (humanChoice === computerChoice) {
        resultText = "It's a tie!";
    } else {
        computerScore++;
        resultText = "Computer wins!";
    }

    // ✅ YAHI PAR PAGE UPDATE KARO
    document.getElementById("result").innerText =
        `Your choice: ${humanChoice} | Computer choice: ${computerChoice}
${resultText}`;

    document.getElementById("score").innerText =
        `Human score: ${humanScore} | Computer score: ${computerScore}`;
};
