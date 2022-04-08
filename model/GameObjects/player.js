class Player extends Node {
    constructor() {
        super();
        this.x = 300;
        this.y = 300;
        this.w = 100;
        this.h = 100;   

        this.img = document.getElementById("player");
    }

    move() {

        if(keys[87]) this.changePos(0, -100); //up
        else if(keys[65]) this.changePos(-100, 0); //left
        else if(keys[83]) this.changePos(0, 100); // down
        else if (keys[68]) this.changePos(100, 0); // rightx
    }

    changePos(x, y) {
        let newX = this.x + x;
        let newY = this.y + y;
        
        if((0 <= newX && newX < canvas.width) && (0 <= newY && newY < canvas.height)) {
            this.x = newX;
            this.y = newY;
        } 
        this.draw();

        //check if player proceed to next level
        if(this.x === nextLevel.x && this.y === nextLevel.y) {
            levelProceed();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        
        //randomstep sound
        let stepNumber = Math.floor(Math.random() * 3) + 1;
        if(!stopSFX) {
            document.getElementById(`step${stepNumber}`).play();
        }
    }

    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}

const player = new Player();