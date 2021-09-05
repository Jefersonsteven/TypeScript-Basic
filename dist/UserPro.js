import { User } from "./User.js";
export class UserPro extends User {
    constructor(id, username, email, password, isPro) {
        super(id, username, email, password);
        this.isPro = isPro;
    }
}
