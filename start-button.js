//assigning function to start button
startButton.onclick = function() {startGame()};

function startGame() {
    startButton.style.display = "none";
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    retryButton.style.display = "block";
    congratulationHeader.style.display = "block";
    congratulationText.style.display = "block";

    isInMenu = false;
    isInRetry = true;

}