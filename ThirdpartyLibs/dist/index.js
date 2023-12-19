"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
    console.log("Good!!!");
    res.data.forEach(printUser);
}).catch(err => {
    console.log("Error", err);
});
function printUser(user) {
    console.log(user.name, user.email, user.phone);
}
