//inicializing of all variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//increasing canvas resolution
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
var congratulationHeader = document.getElementById("endgame-header");
var congratulationText = document.getElementById("endgame-text");
var currentLevelText = document.getElementById("current-level-text");

//music/SFX buttons, sounds
var musicButton = document.getElementById("music-button");
var sfxButton = document.getElementById("sfx-button");

var levelProceedSound = document.getElementById("levelProceed");

var mainSound = document.getElementById("menuIntro");


//controlling game states
var isInMenu = true;
var isInGame = false
var isInRetry = false;

var allRunesPlaced = false;

//keepinng track of positions of game objects;
var wallCollection = [];
var runesCollection = [];
var runeSpotsCollection = [];

var currentLevel = 1;
