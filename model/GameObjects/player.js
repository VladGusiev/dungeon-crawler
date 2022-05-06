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
        if(keys[87]) this.isAtWall(0, -100); //up
        else if(keys[65]) this.isAtWall(-100, 0); //left
        else if(keys[83]) this.isAtWall(0, 100); // down
        else if (keys[68]) this.isAtWall(100, 0); // rightx
    }

    isAtWall(x, y) {

        let newX = this.x + x;
        let newY = this.y + y;

        for(let i in wallCollection) {
            if(wallCollection[i][0] == newX && wallCollection[i][1] == newY) return
        }
        this.changePos(newX, newY);

    }

    changePos(x, y) {

        ctx.drawImage(document.getElementById("tile"), this.x, this.y, this.w, this.h);
        
        this.x = x;
        this.y = y;

        this.draw();

        //check if player proceed to next level
        if(this.x === nextLevel.x && this.y === nextLevel.y) {
            game.levelProceed();
        }
        
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