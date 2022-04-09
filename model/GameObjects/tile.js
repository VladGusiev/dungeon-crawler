class Tile extends Node{
    constructor(x ,y) {
        super();
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;

        this.img = document.getElementById("tile");
    }
    //drawing of all tiles
    draw() {
        for(let i = 200; i < (canvas.width-300); i+=100) {
            for(let j = 100; j < (canvas.width-600); j+=100) {
                ctx.drawImage(this.img, i, j, this.w, this.h);
            }
        }
    }
}
var tile = new Tile(100, 100);