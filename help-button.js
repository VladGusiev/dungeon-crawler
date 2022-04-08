//assigning function to help button
document.getElementById("help-button").onclick = function() {showHelpMenu()};

//help menu variables
var helpMenuX = 50;
var helpMenuY = 50;
var helpMenuW = 700;
var helpMenuH = 450;


function showHelpMenu() {

    //checking if we are in menu
    if(isInMenu) {
        if(startButton.style.display === "block") {
            startButton.style.display = "none";
            displayInfo();
        } else {
            ctx.clearRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);
            startButton.style.display = "block";
        }
    } else if(isInRetry) {
        if(retryButton.style.display === "block") {
            retryButton.style.display = "none";
            congratulationHeader.style.display = "none";
            congratulationText.style.display = "none";
            displayInfo();
        } else {
            ctx.clearRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);
            retryButton.style.display = "block";
            congratulationHeader.style.display = "block";
            congratulationText.style.display = "block";
        }
    }
    // document.getElementById("start-button").style.display = none;
}


function displayInfo() {
    //menu background color
    ctx.fillStyle = "#7F0D0D";
    ctx.fillRect(helpMenuX, helpMenuY, helpMenuW, helpMenuH);

    //font setting
    ctx.fillStyle = "black";
    ctx.font = '25px MedievalSharp';

    //main goal
    ctx.fillText('Main goal: Push all runes to thier spots and go to next level', helpMenuX+20, helpMenuX+40);

    //movement guide
    ctx.fillText('Movement:', helpMenuX+20, helpMenuY+80);
    ctx.fillText('"w" to move upwards', helpMenuX+20, helpMenuX+120);
    ctx.fillText('"a" to move left', helpMenuX+20, helpMenuX+160);
    ctx.fillText('"s" to move downwards', helpMenuX+20, helpMenuX+200);
    ctx.fillText('"d" to move right', helpMenuX+20, helpMenuX+240);

    // providing visual examples

    ctx.fillText('Legend:', helpMenuX+20, helpMenuX+300);

    //player
    ctx.fillText('Player:', helpMenuX+20, helpMenuX+340);
    var playerPic = new Image();
    playerPic.src = "./visual/player.png";
    ctx.drawImage(playerPic, helpMenuX+20, helpMenuX+360, 50, 50);

    //Rune
    ctx.fillText('Rune:', helpMenuX+150, helpMenuX+340);
    var runePic = new Image();
    runePic.src = "./visual/rune.png";
    ctx.drawImage(runePic, helpMenuX+150, helpMenuX+360, 50, 50);

    //Rune spot
    ctx.fillText('Rune Spot:', helpMenuX+270, helpMenuX+340);
    var runeSpotPic = new Image();
    runeSpotPic.src = "./visual/runeSpot.png";
    ctx.drawImage(runeSpotPic, helpMenuX+270, helpMenuX+360, 50, 50);

    //level exit
    ctx.fillText('Next Level:', helpMenuX+450, helpMenuX+340);
    var nextLevelPic = new Image();
    nextLevelPic.src = "./visual/NextLevelWall.png";
    ctx.drawImage(nextLevelPic, helpMenuX+450, helpMenuX+360, 50, 50);
}

