const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#conputerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player, computer, result;

choiceBtns.forEach(button => {
    button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    });
});

function computerTurn(){
    const randNumber = Math.floor(Math.random() * 3 + 1);

    switch(randNumber){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 2:
            computer = "SCISSOR";
            break;
    }
}

function checkWinner(){
    if (player == computer){
        return "Draw";
    } 
    else if (computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    } 
    else if (computer == "PAPER"){
        return (player == "SCISSOR") ? "You Win!" : "You Lose!";
    }
    else if (computer == "SCISSOR"){
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}
