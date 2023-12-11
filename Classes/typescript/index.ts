class Player {
    //  
    // #score: number = 0;

    constructor(
        public first:string,
        public last:string,
        protected _score:number){
    }

    private secretMethod():void {
        console.log("SECRET METHOD");
    }
    get fullName(): string{
        return `${this.first} ${this.last}`
    }
    get score():number {
        return this._score;
    }

    set score(newScore: number){
        if(newScore<0){
            throw new Error("Score can not negative")
        }
        this._score = newScore;
    }

}

class SuperPlayer extends Player {
   public isAdmin: boolean = true;
   maxScore() {
    this._score = 99999;
   }
}

const elton = new Player("Elton","Stee",100);
console.log(elton.fullName);
elton.score = 99;

interface Colorful {
    color:string;
}

interface Printable {
    print():void;
}

interface Payable {
    getPay():number;
}

class Jacket implements Colorful,Printable {
    constructor(public brand:string,public color:string){}
    print(): void {
        console.log(`${this.brand}-${this.color} jacket`);
    }
}

class Bike implements Colorful {
    constructor(public color:string){}
}

const jacket1 = new Jacket("Prada","blue")
const bike1 =new Bike("red");
 
abstract class Employee{
    constructor(public first:string,public last:string){}
    abstract getPay():number;
    greet() {
        console.log(`Hello`)
    }
}
class FulltimeEmployee extends Employee {
    constructor(first:string,last:string,private salary:number){
        super(first,last);
    }
    getPay(): number {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first:string,last:string,
        private hourlyRate:number,private hourlyWorked:number){
        super(first,last);
    }
    getPay(): number {
        return this.hourlyRate*this.hourlyWorked;
    }
}

const betty = new FulltimeEmployee("Betty","WHite",9500);

const bill = new PartTimeEmployee("Bill","Sorrow",20,4);