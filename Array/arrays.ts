const activeUsers:string[] = [];
activeUsers.push("steve");
activeUsers.push("Tony");

const ageList :number[] = [45,50,35];
ageList[0] = 99;

const bools: Array<boolean> = [];

type Point = {
    x:number;
    y:number;
}

const coords: Point[] = []
coords.push({x:23,y:8});
coords.push({x:10,y:15});


const boards:string[][] = [
    ["X","O","X"],
    ["X","X","O"],
    ["O","O","X"]
];

const demo: number[][][] = [[[1],[2],[3]],[[3],[4],[5]]];
console.log(demo[0][0])