import axios from "axios";
interface User {
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string;
        }
    },
    phone:string;
    website:string;
    company:{
        name:string;
        catchPhrase:string;
        bs:string;
    }
}

axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then(res=>{
    console.log("Good!!!")
    res.data.forEach(printUser);
}).catch(err=>{
    console.log("Error",err);
})

function printUser(user:User):void{
    console.log(user.name,user.email,user.phone)
}