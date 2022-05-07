class Level3 extends Node {
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
        player.x = 600;
        player.y = 300;

        nextLevel.x = 600;
        nextLevel.y = 900;

        runesCollection[0].x = 700; //
        runesCollection[0].y = 300;

        runesCollection[1].x = 800;//
        runesCollection[1].y = 400;

        runesCollection[2].x = 800;
        runesCollection[2].y = 500;

        runesCollection[3].x = 900;
        runesCollection[3].y = 700;

        runesCollection[4].x = 800;
        runesCollection[4].y = 700;

        runesCollection[5].x = 500;
        runesCollection[5].y = 700;

        wallCollection = [];
        runeSpotsCollection = [];


        //tiles LATER
        for(var i = 500; i < 1100; i+=100){
            for(var j = 200; j < 900; j += 100) {
                var b1 = new Tile(i,j);
                this.addObserver(b1);
            }
        }

        //walls
        for(var i = 600; i<1100; i+=100){
            var w1 = new Wall(i,100);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 200; i<700; i+=100){
            var w1 = new Wall(1000,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 600; i<1000; i+=100){
            var w1 = new Wall(1100,i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 400; i<1200; i+=100){
            var w1 = new Wall(i,900);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 200; i<900; i+=100){
            var w1 = new Wall(400, i);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 500; i<700; i+=100){
            var w1 = new Wall(i, 200);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 500; i<700; i+=100){
            var w1 = new Wall(i, 400);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 600; i<800; i+=100){
            var w1 = new Wall(i, 500);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(var i = 600; i<700; i+=100){
            var w1 = new Wall(i, 600);
            this.addObserver(w1);
            wallCollection.push([w1.x, w1.y]);
        }

        for(let i in wallCollection) {
            if(wallCollection[i][0] == nextLevel.x && wallCollection[i][1] == nextLevel.y) wallCollection.splice(i, 1);
        }

        var rs1 = new RuneSpot(500, 300);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(900, 400);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(800, 600);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(1000, 700);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(800, 800);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);

        var rs1 = new RuneSpot(500, 500);
        this.addObserver(rs1);
        runeSpotsCollection.push(rs1);


        this.notifyObservers();
        this.observerCollection = [];

    }
}