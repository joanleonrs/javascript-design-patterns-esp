class Subject{
    constructor(){
        this.observers = [];
    }

    register(observer){
        this.observers.push(observer);
    }

    unregister(observer){
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notify(){
        for(let o of this.observers)
            o.update();
    }
}

export default Subject;