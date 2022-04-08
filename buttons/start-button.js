//assigning function to start button
startButton.onclick = function() {startGame()};

function startGame() {
    startButton.style.display = "none";

    retryButton.style.display = "none";
    congratulationHeader.style.display = "none";
    congratulationText.style.display = "none";

    isInMenu = false;
    isInGame = true;
    isInRetry = false;

    //displaying objects (CHANGE!)
    player.x = 300;
    player.y = 300;

    nextLevel.x = 600;
    nextLevel.y = 400;

    player.draw();
    nextLevel.draw();

    if(!stopMusic) {
        mainSound.pause();
        mainSound = document.getElementById("playLoop");
        mainSound.currentTime = 0;
        mainSound.play();
    } else {
        mainSound = document.getElementById("playLoop");
        mainSound.currentTime = 0;
    }
}