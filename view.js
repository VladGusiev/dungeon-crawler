//inicializing of all variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//startButton
var startButton = document.getElementById("start-button");

//Congratulation Screen variables
var retryButton = document.getElementById("retry-button");
var congratulationHeader = document.getElementById("complete-level-header");
var congratulationText = document.getElementById("complete-level-text");


//music/SFX buttons, sounds
var musicButton = document.getElementById("music-button");
var sfxButton = document.getElementById("sfx-button");

var menuSound = document.getElementById("menuIntro");
// var menuLoopSound = document.getElementById("menuLoop");
// var playLoopSound = document.getElementById("playLoop");


//controlling game state
var isInMenu = true;
var isInRetry = false;
