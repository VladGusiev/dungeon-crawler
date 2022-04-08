var keys = {};

window.onkeydown = function(event) {
    //process inputs only when in game
    if(isInGame) {
        if(!event.repeat) {
            keys[event.keyCode] = true;
        } else keys[event.keyCode] = false;
    
        player.move();
        nextLevel.draw();
    }
}

window.onkeyup = function(event) {
    keys[event.keyCode] = false;
}