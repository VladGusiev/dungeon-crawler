class Tile extends Node{
    constructor(x ,y) {
        super();
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;

        this.img = document.getElementById("tile");
    }

    notify() {
        this.draw();
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}