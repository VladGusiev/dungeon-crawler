class Player {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;   

        this.img = document.getElementById("player");

        this.steps = 0;
    }

    move() {
        if(keys[87]) this.isCollision(0, -100, "up"); //up
        else if(keys[65]) this.isCollision(-100, 0, "left"); //left
        else if(keys[83]) this.isCollision(0, 100, "down"); // down
        else if (keys[68]) this.isCollision(100, 0, "right"); // right
    }

    isCollision(x, y, direction) {

        let newX = this.x + x;
        let newY = this.y + y;

        //checking for walls
        for(let i in wallCollection) {
            if(wallCollection[i][0] == newX && wallCollection[i][1] == newY) return
        }

        //checking for runes
        for(let i in runesCollection) {
            if(runesCollection[i].x == newX && runesCollection[i].y == newY) {
                
                let xAfterRune = newX + x;
                let yAfterRune = newY + y;

                //if there is wall after rune
                for(let j in wallCollection) {
                    if(wallCollection[j][0] == xAfterRune && wallCollection[j][1] == yAfterRune) return; 
                }

                //if there is 2 runes in a row
                for(let h in runesCollection) {
                    if(runesCollection[h].x == xAfterRune && runesCollection[h].y == yAfterRune) return; 
                }

                //if there is 'nextLevel' after rune
                if(nextLevel.x == xAfterRune && nextLevel.y == yAfterRune) return; 

                //if there is runeSpot with rune on it
                if(runesCollection[i].placedOn) return;

                //if not we can move
                runesCollection[i].move(direction);
            }
        }

        //check if player proceed to next level
        if(newX === nextLevel.x && newY === nextLevel.y) {
            if(allRunesPlaced) {
                game.levelProceed();
                return;
            } else return;
        }

        //if player will be located on runeSpot
        for(let i in runeSpotsCollection) {
            if(newX === runeSpotsCollection[i].x && newY === runeSpotsCollection[i].y) {
                runeSpotsCollection[i].playerOn = true;
            } else {
                runeSpotsCollection[i].playerOn = false;
            }
        }

        //if no obstacles, can move
        this.changePos(newX, newY);
    }

    changePos(x, y) {

        //draw tile where he was, so no duplicates will be left
        ctx.drawImage(document.getElementById("tile"), this.x, this.y, this.w, this.h);
        
        this.x = x;
        this.y = y;

        this.draw();
        
        //random step sound
        let stepNumber = Math.floor(Math.random() * 3) + 1;
        if(!stopSFX) {
            document.getElementById(`step${stepNumber}`).play();
        }
        this.steps++;
    }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}