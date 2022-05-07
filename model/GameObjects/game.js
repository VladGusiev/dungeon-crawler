class Game extends Node {
    constructor() {
        super();

        this.movesAmount;

        this.currentLevel = 1;

        this.observerCollection = [];
        this.inicializeLevel();
    }

    addObserver(level){
        this.observerCollection.push(level);
    }

    removeObserver(level){
        var index = this.observerCollection.indexOf(level);
        delete this.observerCollection[index];
    }

    notifyObservers(){
        for(var i in this.observerCollection){
            this.observerCollection[i].notify();
        }
    }

    //move to congrat screen with statistic after level is completed
    levelProceed() {
        isInMenu = false;
        isInGame = false;
        isInRetry = true;

        retryButton.style.display = "block";
        retryButton.innerHTML = "Next Level";

        congratulationHeader.innerHTML = "Congratulation!";
        congratulationHeader.style.display = "block";

        congratulationText.innerHTML = `You completed level in ${player.steps} steps!`;
        congratulationText.style.display = "block";
        ctx.clearRect(0, 0, canvas.width, canvas.height);

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

        this.currentLevel++;
    }

    //if player fails to complete level, move to retry screen
    levelFailed() {

        isInMenu = false;
        isInGame = false;
        isInRetry = true;

        retryButton.style.display = "block";
        retryButton.innerHTML = "Retry";

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

    //start of game
    startGame() {
        player.steps = 0;

        isInMenu = false;
        isInGame = true;
        isInRetry = false;

        //drawing of level itself
        this.inicializeLevel();

        //steps counter
        ctx.fillStyle = "black";
        ctx.font = '50px MedievalSharp';
        ctx.fillText(`Steps Left: ${this.movesAmount - player.steps}`, 1250, 50);

        //music
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

    //main game loop
    playLoop() {
        if((this.movesAmount - player.steps) > 0) {
            player.move();

            if(isInGame) {
                ctx.clearRect(1250, 0, canvas.width, 90);
                ctx.fillText(`Steps Left: ${this.movesAmount - player.steps}`, 1250, 50);
            } else ctx.clearRect(1250, 0, canvas.width, 90);

            for(let i in runeSpotsCollection) {
                runeSpotsCollection[i].draw();
            }
            
            nextLevel.draw();

            //check for main game purpose
            allRunesPlaced = runeSpotsCollection.every(rs => rs.placedOn == true);
            if(allRunesPlaced) if(!stopSFX) levelProceedSound.play();
            // console.log(allRunesPlaced);
        } else {
            this.levelFailed()
        }
    }

    //drawing of level
    inicializeLevel(){
        //reset positions of all runes ti later let levels determine their position
        for(let i in runesCollection) {
            runesCollection[i].placedOn = false;
            runesCollection[i].x = -1000;
            runesCollection[i].y = -1000;
        }

        //clearing all garbage before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        //determining whch level to draw
        if (this.currentLevel === 1) {
            this.movesAmount = 10;
            var level1 = new Level1();
            this.addObserver(level1);
        } else if (this.currentLevel === 2) {
            this.movesAmount = 15;
            var level1 = new Level2();
            this.addObserver(level1);
        } else if (this.currentLevel === 3) {
            this.movesAmount = 40;
            var level1 = new Level3();
            this.addObserver(level1);
        } else {
            this.movesAmount = 10;
            this.currentLevel = 1;
            var level1 = new Level1();
            this.addObserver(level1);
        }
        
        //notifying level to draw itself (new levels are added here)
        this.notifyObservers();
        
        //drawing other game objects
        player.draw();
        nextLevel.draw();
        
        for(let i in runesCollection) {
            runesCollection[i].draw();
        }
        this.observerCollection = [];
    }
}

//declaring of game needed game objects
for(let i = 0; i < 10; i++) {
    var r1 = new Rune(-1000,-1000);
    runesCollection.push(r1);
}

const nextLevel = new NextLevel();
const player = new Player();
const game = new Game(1);

//initial clear
ctx.clearRect(0, 0, canvas.width, canvas.height);