retryButton.onclick = function() {restartGame()};

function restartGame() {
    startButton.style.display = "block";

    retryButton.style.display = "none";
    congratulationHeader.style.display = "none";
    congratulationText.style.display = "none";

    isInMenu = true;
    isInRetry = false;
}