class Rune {
    constructor(x ,y) {
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;

        this.onPlace = false;

        this.img = document.getElementById("rune");
    }


    move(direction) {
        if(!this.placedOn) {
            if(direction == "up") this.isAtWall(0, -100); //up
            else if(direction == "left") this.isAtWall(-100, 0); //left
            else if(direction == "down") this.isAtWall(0, 100); // down
            else if (direction == "right") this.isAtWall(100, 0); // right
        }
        // console.log('run was moved');
    }

    isAtWall(x, y) {

        let newX = this.x + x;
        let newY = this.y + y;

        for(let i in wallCollection) {
            if(wallCollection[i][0] == newX && wallCollection[i][1] == newY) return;
        }

        for(let j in runesCollection) {
            if(runesCollection[j].x == newX && runesCollection[j].y == newY) return; 
        }

        this.changePos(newX, newY);

    }

    changePos(x, y) {

        ctx.drawImage(document.getElementById("tile"), this.x, this.y, this.w, this.h);
        
        this.x = x;
        this.y = y;

        this.draw();

        //TODO check if rune is on rune spot
        for(let i in runeSpotsCollection) {
            if(this.x == runeSpotsCollection[i].x && this.y == runeSpotsCollection[i].y) {
                runeSpotsCollection[i].placedOn = true;
                this.placedOn = true;
            }
        }

        
        //move sound
        if(!stopSFX) {
            document.getElementById('step1').play();
        }

        
    }


    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}