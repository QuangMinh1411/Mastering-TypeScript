function greet(name:string="Anymounous"):string{
    return `Hi ${name}!`
}
greet();
function square(num:number):number{
    return num*num;
}

const add = (x:number,y:number):number=>{
    return x+y;
}

const colors = ['green','red','blue'];
console.log(colors.map(color=>color.toUpperCase()));

const printTwice = (msg:string):void=>{
    console.log(msg);
    console.log(msg);
}
function makeError(msg:string):never{
    throw new Error(msg)
}