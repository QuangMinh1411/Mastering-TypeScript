import { add, sample as sampleRandom } from "./utils.js";
import User from "./User.js";
console.log(sampleRandom([12, 3, 45]));
console.log(add(3, 5));
const user = new User("quang", "qm@yahoo.com");
user.logout();
