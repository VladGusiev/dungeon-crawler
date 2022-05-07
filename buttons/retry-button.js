//assigning function to retry function
retryButton.onclick = function() {restartGame()};

function restartGame() {
    startButton.style.display = "block";

    //looping of levels
    if(game.currentLevel == 4) {
        currentLevelText.innerHTML = `Current level: 1`;
    } else currentLevelText.innerHTML = `Current level: ${game.currentLevel}`;

    currentLevelText.style.display = "block";

    retryButton.style.display = "none";
    congratulationHeader.style.display = "none";
    congratulationText.style.display = "none";

    isInMenu = true;
    isInGame = false;
    isInRetry = false;
}
