class Node {
    constructor() {
        this.observerCollection = [];
    }
    
    addObserver(obs) {
        this.observerCollection.push(obs);
    }

    removeObserver(obs) {
        let index = this.observerCollection.indexOf(obs);
        delete this.observerCollection[index];
    }

    notify(event, argument) {
        for(let index in this.observerCollection) {
            let node = this.observerCollection[index];
            if(typeof(node[event]) === "function")
                node[event](argument);
        }
    }
}