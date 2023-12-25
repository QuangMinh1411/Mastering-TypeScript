export default class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    logout() {
        console.log(`${this.name} log out`);
    }
}
export function UserHelper() {
    console.log("USER HELPER");
}
