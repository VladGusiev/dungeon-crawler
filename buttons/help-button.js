//assigning function to help button
document.getElementById("help-button").onclick = function() {showHelpMenu()};

var infoDisplayed = false;

//help menu variables
var helpMenuX = 100;
var helpMenuY = 100;
var helpMenuW = 1400;
var helpMenuH = 900;


function showHelpMenu() {

    //checking if we are in menu
    if(isInMenu) {
        if(!infoDisplayed) {
            startButton.style.display = "none";
            currentLevelText.style.display = "none";
            displayInfo();
            infoDisplayed = true;
        } else {
            ctx.clearRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);
            startButton.style.display = "block";
            currentLevelText.style.display = "block";
            infoDisplayed = false;
        }
        //on retry screen
    } else if(isInRetry) {
        if(!infoDisplayed) {
            retryButton.style.display = "none";
            congratulationHeader.style.display = "none";
            congratulationText.style.display = "none";
            displayInfo();

            infoDisplayed = true
        } else {
            ctx.clearRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);
            retryButton.style.display = "block";
            congratulationHeader.style.display = "block";
            congratulationText.style.display = "block";

            infoDisplayed = false;
        }
        //in game
    } else {
        if(infoDisplayed) {
            ctx.clearRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);

            player.steps = 0;
            game.inicializeLevel();
            ctx.fillText(`Steps Left: ${game.movesAmount - player.steps}`, 1250, 50);

            infoDisplayed = false;
        } else {
            displayInfo();
            infoDisplayed= true;
        }

    }
}


function displayInfo() {
    //menu background color
    ctx.fillStyle = "#7F0D0D";
    ctx.fillRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);

    //font setting
    ctx.fillStyle = "black";
    ctx.font = '50px MedievalSharp';

    //main goal
    ctx.fillText('Main goal: Push all runes to thier spots and go to next level', helpMenuX+20, helpMenuX+60);

    //movement guide
    ctx.fillText('Movement:', helpMenuX+20, helpMenuY+200);
    ctx.fillText('"w" to move upwards', helpMenuX+20, helpMenuY+260);
    ctx.fillText('"a" to move left', helpMenuX+20, helpMenuY+320);
    ctx.fillText('"s" to move downwards', helpMenuX+20, helpMenuY+380);
    ctx.fillText('"d" to move right', helpMenuX+20, helpMenuY+440);

    // providing visual examples
    
    //Legend
    ctx.fillText('Legend:', helpMenuX+20, helpMenuY+600);

    //player
    ctx.fillText('Player:', helpMenuX+20, helpMenuY+660);
    var playerPic = new Image();
    playerPic.src = "./visual/player.png";
    ctx.drawImage(playerPic, helpMenuX+20, helpMenuY+660, 100, 100);

    //Rune
    ctx.fillText('Rune:', helpMenuX+220, helpMenuY+660);
    var runePic = new Image();
    runePic.src = "./visual/rune.png";
    ctx.drawImage(runePic, helpMenuX+220, helpMenuY+660, 100, 100);

    //Rune spot
    ctx.fillText('Rune Spot:', helpMenuX+420, helpMenuY+660);
    var runeSpotPic = new Image();
    runeSpotPic.src = "./visual/runeSpot.png";
    ctx.drawImage(runeSpotPic, helpMenuX+420, helpMenuY+660, 100, 100);

    //level exit
    ctx.fillText('Next Level:', helpMenuX+720, helpMenuY+660);
    var nextLevelPic = new Image();
    nextLevelPic.src = "./visual/NextLevelWall.png";
    ctx.drawImage(nextLevelPic, helpMenuX+720, helpMenuY+660, 100, 100);
}

