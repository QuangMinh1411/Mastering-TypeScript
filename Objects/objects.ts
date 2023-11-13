const dog = {
    name:'Eleton',
    breed:'Australian shepherd',
    age:0.5
}
function printName(person:{firstName:string,lastName:string}):void{
    console.log(`Hi ${person.lastName},${person.firstName}`);
}
printName({firstName:'Quang',lastName:'Minh'});

// let coordinate :{x:number,y:number} = {x:34,y:2};
function randomCoordinate():{x:number,y:number}{
    return {
        x:Math.random(),
        y:Math.random()
    };
}

type Point ={
    x:number;
    y:number;
    z?:number
}
type Song = {
    title:string,
    artist:string,
    numStreams:number,
    credits:{
        producer:string,
        writer:string
    }
}

let coordinate: Point = {x:34,y:2};
function doublePoint(point:Point){
    return {
        x:point.x*2,
        y:point.y*2,
    }
}

function calculatePayout(song:Song):number{
    return song.numStreams * 0.333;
}
function printSong(song:Song):void{
    console.log(`${song.title} - ${song.artist}`);
}

type User = {
    readonly id:number;
    username:string;
}
const user:User = {
    id:1234,
    username:'catman'
};
// user.id = 243;

type Circle = {
    radius:number;
}

type Colorful = {
    color:string;
}

type ColorfulCircle = Circle & Colorful;
const happyFace:ColorfulCircle = {
    radius:4,
    color:'yellow'
}

type Cat = {
    numLives:number;
}
type Dog = {
    breed:string;
}

type CatDog = Cat & Dog & {
    age:number;
}
