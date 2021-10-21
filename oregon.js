class Traveler {
    constructor(name){
        this._name = name;
        this._food = 1;
        this._isHealthy = true;
    }


    set name(name) {
        this._name = name
    }
    set food(food) {
        this._food = food
    }
    set isHealthy(health){
        this._isHealthy = health
    }


    get name(){
        return this._name;
    }
    get food(){
        return this._food
    }
    get isHealthy(){
        return this._isHealthy
    }

    hunt() {
        this._food = this._food + 2
    }

    eat() {
        if(this._food > 0){
            this._food--
        }else{
            this._isHealthy = false;
        }
    }
}

class Wagon {
   
    constructor(capacity){
        this._capacity = capacity;
        this._passanger = [];
    }

    getAvailableSeatCount() {
        return this._capacity - this._passanger.length;
    }

    join(travaler) {
        if (this.getAvailableSeatCount() > 0) {
            this._passanger.push(travaler)
        }
    }
    shouldQuarantine() {
        let result = false
        for(let i = 0; i < this._passanger.length; i++) {
            if(this._passanger[i].isHealthy === false){
                result = true
                break
            }
        }
        return result
    }
    totalFood() {
        let result = 0
        for(let i = 0; i < this._passanger.length; i++) {
            result += this._passanger[i].food
        }
        return result
    }

}




// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// // Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);