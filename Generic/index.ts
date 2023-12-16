interface Cat {
    name:string;
    breed:string;
}

function identity<T>(item:T):T{
    return item;
}

function getRandomElement<T>(list:T[]):T {
    return list[Math.floor(Math.random()*list.length)]
}

// identity<string>("Hi");
// identity<boolean>(true);
// identity<number>(5.4);
// identity<Cat>()

getRandomElement<string>(["a","b","c"]);
getRandomElement<number>([2,3,1,5,6]);

function merge<T extends object,V extends object>(obj1:T,obj2:V){
    return {
        ...obj1,
        ...obj2
    }
}
const comboObj = merge({name:'Scort'},{pets:["blue","Elton"]});
console.log(comboObj);

interface Lengthy {
    length:number;
}

function printDoubleLength<T extends Lengthy>(thing:T):number{
    return thing.length*2;
}

printDoubleLength("Hello");

function makeEmptyArray<T=number>():T[]{
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
    title:string;
    artirs:string;
};
interface Video {
    title:string;
    creator:string;
    resolution:string;
}

class Playlist<T> {
    public queue: T[];
    add(el:T){
        this.queue.push(el);
    }
}

const songs =  new Playlist<Song>();
const videos = new Playlist<Video>();