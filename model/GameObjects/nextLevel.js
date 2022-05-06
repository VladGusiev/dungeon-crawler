class NextLevel extends Node {
    constructor() {
        super();
        this.x = 600;
        this.y = 400;
        this.w = 100;
        this.h = 100;

        this.img = document.getElementById("nextLevel");
    }

    draw(){
        if(!isInGame) {
            ctx.clearRect(this.img, this.x, this.y, this.w, this.h);
        } else {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        }
    }
}

const nextLevel = new NextLevel();