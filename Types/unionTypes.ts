let age : number|string|boolean = 21;
age = "24";
age = false;

type Point = {
    x:number;
    y:number;
};

type Loc = {
    lat:number;
    long:number;
};

let coordinates:Point|Loc = {x:1,y:34};
coordinates = {lat:312.23,long:23.334};

function printAge(age:number|string):void{
    console.log(`You are ${age} years old`)
}

function calculateTax(price:number|string,tax:number):number{
    if(typeof price==="string"){
       price= price.replace("$","");
       return parseFloat(price);
    }else{
        return price*tax;
    }
}

const stuff:any[] = [1,23,4,true,'asdf',{}];

const stuff2 :(number|string)[]=[2,'bcd',3,4]

const coords:(Point|Loc)[]= [];
coords.push({lat:123.11,long:111.11});
coords.push({x:222,y:333});

const zero: 0=0;

const giveAnswer = (answer:"yes"|"no"|"maybe"):string{
    return `The answer is ${answer}`
}

let mood:"Happy"|"Sad" = "Happy";
mood = "Sad";

type DayOfWeeks = "Monday"|"Tuesday"|"Wednesday";
let today :DayOfWeeks = "Tuesday";