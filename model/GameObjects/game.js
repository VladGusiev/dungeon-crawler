class Game extends Node {
    constructor(movesAmount) {
        super();

        this.movesAmount = movesAmount;
    }

    //temporarly
    generatePos() {
        return Math.floor(Math.random()*6)*100+300;
    }

    //temporarly here
    levelProceed() {
        isInMenu = false;
        isInGame = false;
        isInRetry = true;

        retryButton.style.display = "block";

        congratulationHeader.innerHTML = "Congratulation!";
        congratulationHeader.style.display = "block";

        congratulationText.innerHTML = `You completed level in ${player.steps} steps!`;
        congratulationText.style.display = "block";


        if(!stopSFX) levelProceedSound.play();

        //change soundtrack
        if(!stopMusic) {
            mainSound.pause();
            mainSound = document.getElementById("menuIntro");
            mainSound.currentTime = 0;
            mainSound.play();
        } else {
            mainSound = document.getElementById("menuIntro");
            mainSound.currentTime = 0;
        }

        player.steps = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        currentLevel++;

    }

    levelFailed() {
        isInMenu = false;
        isInGame = false;
        isInRetry = true;

        retryButton.style.display = "block";

        congratulationHeader.innerHTML = "Nice Try!";
        congratulationHeader.style.display = "block";


        congratulationText.innerHTML = "you couldnt make it in needed amount of moves";
        congratulationText.style.display = "block";

        //change soundtrack
        if(!stopMusic) {
            mainSound.pause();
            mainSound = document.getElementById("menuIntro");
            mainSound.currentTime = 0;
            mainSound.play();
        } else {
            mainSound = document.getElementById("menuIntro");
            mainSound.currentTime = 0;
        }

        player.steps = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    startGame() {

        isInMenu = false;
        isInGame = true;
        isInRetry = false;

        player.x = this.generatePos();
        player.y = this.generatePos();

        nextLevel.x = this.generatePos();
        nextLevel.y = this.generatePos();

        this.drawGameElements();

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

    playLoop() {
        if((this.movesAmount - player.steps) > 0) {
            tile.draw();
            player.move();

            if(isInGame) {
                ctx.clearRect(1300, 0, canvas.width, 50);
                ctx.fillText(`Steps Left: ${this.movesAmount - player.steps}`, 1300, 50);
            } else ctx.clearRect(1300, 0, canvas.width, 50);
             
            nextLevel.draw();
        } else {
            this.levelFailed()
        }
    }

    drawGameElements() {
        tile.draw();
        player.draw();

        ctx.fillStyle = "black";
        ctx.font = '40px MedievalSharp';
        ctx.fillText(`Steps Left: ${this.movesAmount - player.steps}`, 1300, 50);

        nextLevel.draw();
    }
}

var game = new Game(10);
// game.generatePos();

