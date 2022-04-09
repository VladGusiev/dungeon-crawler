//assigning function to start button
startButton.onclick = function() {startGame()};

function startGame() {
    startButton.style.display = "none";

    retryButton.style.display = "none";
    congratulationHeader.style.display = "none";
    congratulationText.style.display = "none";

    game.startGame();
}