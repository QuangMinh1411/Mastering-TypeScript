import type {Person} from "./types.js";

export default class User implements Person{
    constructor(public name:string,public email:string){}
    logout():void{
        console.log(`${this.name} log out`);
    }
}

export function UserHelper():void{
    console.log("USER HELPER");
}