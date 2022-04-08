//adding functions to buttons
musicButton.onclick = function() {musicOff()};
sfxButton.onclick = function() {sfxOff()};

//tracking button status
var stopMusic = true;
var stopSFX = true;


function musicOff() {
    if(!stopMusic) {
        musicButton.style.border = "2px solid #C54B4B";
        musicButton.style.color = "#C54B4B";
        menuSound.pause();
        
        stopMusic = true;
    } else {
        musicButton.style.border = "2px solid black";
        musicButton.style.color = "black";
        menuSound.play();

        stopMusic = false;
    }
}

function sfxOff() {
    if(!stopSFX) {
        sfxButton.style.border = "2px solid #C54B4B";
        sfxButton.style.color = "#C54B4B";
        stopSFX = true;
    } else {
        sfxButton.style.border = "2px solid black";
        sfxButton.style.color = "black";
        stopSFX = false;
    }
}

function menuIntroEnded() {
    menuSound = document.getElementById("menuLoop");
    menuSound.play();
}

