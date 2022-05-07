class RuneSpot extends Node{
    constructor(x ,y) {
        super();
        this.x = x;
        this.y = y;

        this.w = 100;
        this.h = 100;
        
        //img counter
        this.currentIMG = 1;

        //rune placed on it
        this.placedOn = false;
        //player placed on it
        this.playerOn = false;

        //randomised runeSpots Props
        this.img = document.getElementById("runeSpot1");
        this.img1 = document.getElementById("runeSpot2");
        this.img2 = document.getElementById("runeSpot3");

        //other objects with interract with rune spot
        this.tileIMG = document.getElementById("tile");
        this.runeIMG = document.getElementById("rune");
        this.playerIMG = document.getElementById("player");

        //sound of rune placed on rune
        this.placedOnSound = document.getElementById("runePlaced");
        this.placedOnSound.volume = 0.2;
    }

    notify() {
        this.draw();
    }

    draw() {
        if(this.playerOn) {
            //if player is located on rune
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
            //if no rune is placed on rune spot
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