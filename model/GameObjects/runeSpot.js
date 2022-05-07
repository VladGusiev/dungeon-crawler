class RuneSpot extends Node{
    constructor(x ,y) {
        super();
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;
        
        this.currentIMG = 1;

        this.placedOn = false;
        this.playerOn = false;

        this.img = document.getElementById("runeSpot1");
        this.img1 = document.getElementById("runeSpot2");
        this.img2 = document.getElementById("runeSpot3");

        this.tileIMG = document.getElementById("tile");
        this.runeIMG = document.getElementById("rune");
        this.playerIMG = document.getElementById("player");

    }

    notify() {
        this.draw();
    }

    draw() {
        if(this.playerOn) {
            if(this.currentIMG == 1) {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.playerIMG, this.x, this.y, this.w, this.h); 

                this.currentIMG = 2;
            } else if(this.currentIMG == 2) {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img1, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.playerIMG, this.x, this.y, this.w, this.h); 

                this.currentIMG = 3;
            } else {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);
                ctx.drawImage(this.playerIMG, this.x, this.y, this.w, this.h); 

                this.currentIMG = 1;
            }
        } else if(!this.placedOn) {
            if(this.currentIMG == 1) {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img, this.x, this.y, this.w, this.h); 

                this.currentIMG = 2;
            } else if(this.currentIMG == 2) {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img1, this.x, this.y, this.w, this.h); 

                this.currentIMG = 3;
            } else {
                ctx.drawImage(this.tileIMG, this.x, this.y, this.w, this.h); 
                ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);

                this.currentIMG = 1;
            }
        } else {
            return;
        }
    }
}