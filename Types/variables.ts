let movieTitle:string = "Amadeous";
movieTitle="Arrival";
// movieTitle=9;
movieTitle.toUpperCase();

let numCatLives:number = 9;
numCatLives+=1;
// numCatLives = "zero"
let gameOver:boolean = false;
gameOver=true;
// gameOver="true"

//Type reference
let tvShow = "Olive Kitteridge";
tvShow = "The other two";
// tvShow = false;
let isFunny = false;
isFunny = true;
// isFunny ="ads";

//anyType
let thing:any = "hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase()

const movies = ["Arrival","The things","Aliens","Amadeus"];
let foundMovie: string; 
for(let movie of movies){
    if(movie ==="Amadeus"){
        foundMovie="Amadeous";
    }
}

