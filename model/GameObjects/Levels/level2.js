class Level2 extends Node {
    constructor() {
        super();

        this.observerCollection = [];
    }

    addObserver(object){
        this.observerCollection.push(object);
    }

    removeObserver(object){
        var index = this.observerCollection.indexOf(object);
        delete this.observerCollection[index];
    }

    notifyObservers(){
        for(var i in this.observerCollection){
            this.observerCollection[i].notify();
        }
    }

    notify() {
        this.draw();
    }

    //level layout itself
    draw() {
        player.x = 800;
        player.y = 600;

        nextLevel.x = 600;
        nextLevel.y = 500;

        runesCollection[0].x = 700;
        runesCollection[0].y = 600;

        runesCollection[1].x = 700;
        runesCollection[1].y = 500;

        runesCollection[2].x = 900;
        runesCollection[2].y = 500;

        runesCollection[3].x = 800;
        runesCollection[3].y = 700;

        wallCollection = [];
        runeSpotsCollection = [];


        //walls
        for(var i = 600; i<900; i+=100){
            var w1 = new Wall(i,200);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 300; i<500; i+=100){
            var w1 = new Wall(800,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 900; i<1200; i+=100){
            var w1 = new Wall(i,400);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 500; i<700; i+=100){
            var w1 = new Wall(1100,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 900; i<1200; i+=100){
            var w1 = new Wall(i,600);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 700; i<1000; i+=100){
            var w1 = new Wall(900,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }
        
        for(var i = 700; i<1000; i+=100){
            var w1 = new Wall(i,900);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 700; i<1000; i+=100){
            var w1 = new Wall(700,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 400; i<700; i+=100){
            var w1 = new Wall(i,700);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 500; i<700; i+=100){
            var w1 = new Wall(400,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 500; i<700; i+=100){
            var w1 = new Wall(i,500);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 300; i<500; i+=100){
            var w1 = new Wall(600,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        //tiles
        for(var i = 300; i<700; i+=100){
            var b1 = new Tile(700,i);
            this.addObserver(b1);
        }

        for(var i = 500; i<900; i+=100){
            var b1 = new Tile(i,600);
            this.addObserver(b1);
        }
        
        for(var i = 500; i<900; i+=100){
            var b1 = new Tile(800,i);
            this.addObserver(b1);
        }

        for(var i = 900; i<1100; i+=100){
            var b1 = new Tile(i,500);
            this.addObserver(b1);
        }

        for(let i in wallCollection) {
            if(wallCollection[i][0] == nextLevel.x && wallCollection[i][1] == nextLevel.y) wallCollection.splice(i, 1);
        }

        var rs1 = new RuneSpot(500, 600);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(700, 300);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(1000, 500);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(800, 800);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);


        this.notifyObservers();
        this.observerCollection = [];

    }
}