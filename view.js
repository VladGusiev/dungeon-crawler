//inicializing of all variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 800;
const HEIGHT = 600;
const DPI_WIDTH = WIDTH*2;
const DPI_HEIGHT = HEIGHT*2;

canvas.style.width = WIDTH+"px";
canvas.style.height = HEIGHT+"px";

canvas.width = DPI_WIDTH;
canvas.height = DPI_HEIGHT;

//startButton
var startButton = document.getElementById("start-button");

//Congratulation Screen variables
var retryButton = document.getElementById("retry-button");
var congratulationHeader = document.getElementById("complete-level-header");
var congratulationText = document.getElementById("complete-level-text");


//music/SFX buttons, sounds
var musicButton = document.getElementById("music-button");
var sfxButton = document.getElementById("sfx-button");

var mainSound = document.getElementById("menuIntro");


//controlling game state
var isInMenu = true;
var isInGame = false
var isInRetry = false;


//temporarly here
function levelProceed() {
    isInMenu = false;
    isInGame = false;
    isInRetry = true;

    retryButton.style.display = "block";
    congratulationHeader.style.display = "block";
    congratulationText.style.display = "block";

    //removing objects from scene
    nextLevel.x = 20000;
    nextLevel.y = 20000;


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
}
