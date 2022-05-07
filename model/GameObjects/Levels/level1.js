class Level1 extends Node {
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
        player.x = 700;
        player.y = 300;

        nextLevel.x = 800;
        nextLevel.y = 500;

        runesCollection[0].x = 800;
        runesCollection[0].y = 400;

        runesCollection[1].x = 800;
        runesCollection[1].y = 600;

        wallCollection = [];
        runeSpotsCollection = [];


        //walls
        for(var i = 600; i<1100; i+=100){
            var w1 = new Wall(i,200);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 300; i<900; i+=100){
            var w1 = new Wall(1000,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 600; i<1100; i+=100){
            var w1 = new Wall(i,800);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 300; i<900; i+=100){
            var w1 = new Wall(600,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        //tiles
        for(var i = 300; i<800; i+=100){
            for(var j = 700; j < 1000; j += 100) {
                var b1 = new Tile(j,i);
                this.addObserver(b1);
            }
        }

        //last 2 walls
        for(var i = 700; i<900; i+=100){
            var w1 = new Wall(i,500);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        
        for(let i in wallCollection) {
            if(wallCollection[i][0] == nextLevel.x && wallCollection[i][1] == nextLevel.y) wallCollection.splice(i, 1);
        }

        var rs1 = new RuneSpot(700, 600);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(900, 700);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);


        this.notifyObservers();
        this.observerCollection = [];

    }
}