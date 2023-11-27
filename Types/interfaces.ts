interface Point {
    x:number;
    y:number;
}

const pt:Point={x:23,y:34};

interface Person {
    readonly id:number;
    first:string;
    last:string;
    nickname?:string;
    sayHi:()=>string;
}
const thomas:Person ={
    id:123,
    first:'thomas',
    last:'hardy',
    nickname:'tom',
    sayHi() {
        return `Hello Mr ${this.nickname}`;
    },
}
thomas.sayHi();

interface Product {
    name:string;
    price:number;
    applyDiscount(discount:number):number;
}

const shoes:Product = {
    name:"Blueshoe",
    price:100,
    applyDiscount(amount:number){
        const newPrice = this.price*(1-amount);
        this.price = newPrice;
        return this.price;
    }
}
shoes.applyDiscount(.4)

interface Dog {
    name:string;
    age:number;
}
interface Dog{
    breed:string;
    bark():string;
}

interface ServiceDog extends Dog{
    job:"drug sniffer"|"bomb"|"guide dog";
}

const chewy: ServiceDog = {
    name:"Chewy",
    age:4.5,
    breed:"Lab",
    bark(){
        return "Bark!"
    },
    job:"guide dog"
}

interface Human{
    name:string;
}

interface Employee{
    readonly id:number;
    email:string;
}

interface Engineer extends Human,Employee{
    level:string;
    languages:string[];
}
const piere:Engineer= {
    name:"Pierce",
    id:123,
    email:"pie@gmail.com",
    level:"senior",
    languages:["Englis","French"]
}