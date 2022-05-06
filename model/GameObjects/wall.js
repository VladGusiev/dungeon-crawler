class Wall extends Node{
    constructor(x ,y) {
        super();
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;

        this.img = document.getElementById("wall");
        this.img2 = document.getElementById("wall2");
        this.img3 = document.getElementById("torch");
    }

    notify() {
        this.draw();
    }

    draw() {
        let wallPic = Math.floor(Math.random() * 3);

        //drawing random wall texture;
        if(wallPic == 0) ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        else if(wallPic == 1) ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);
        else ctx.drawImage(this.img3, this.x, this.y, this.w, this.h);
    }
}