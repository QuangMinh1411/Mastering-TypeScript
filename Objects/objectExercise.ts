type Movie = {
    readonly title:string;
    originalTitle?:string;
    director:string;
    releaseYear:number;
    boxOffice:{
        budget:number;
        grossUs:number;
        grossWorldwide:number;
    }
}

function getProfit({boxOffice:{grossWorldwide,budget}}:Movie):number{
    return grossWorldwide - budget;
}