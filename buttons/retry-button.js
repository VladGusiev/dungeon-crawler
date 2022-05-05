//assigning function to retry function
retryButton.onclick = function() {restartGame()};

function restartGame() {
    startButton.style.display = "block";

    currentLevelText.innerHTML = `Current level: ${currentLevel}`;
    currentLevelText.style.display = "block";

    retryButton.style.display = "none";
    congratulationHeader.style.display = "none";
    congratulationText.style.display = "none";

    isInMenu = true;
    isInGame = false;
    isInRetry = false;
}