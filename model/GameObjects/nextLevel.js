class NextLevel extends Node {
    constructor() {
        super();
        this.x = 600;
        this.y = 400;
        this.w = 100;
        this.h = 100;

        this.img = document.getElementById("nextLevel");
    }

    // notify(){
    //     this.draw(ctx);
    // }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}

const nextLevel = new NextLevel();