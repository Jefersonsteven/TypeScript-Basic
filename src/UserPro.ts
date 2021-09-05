import { User } from "./User.js";
import { ID } from "./ID.js";

export class UserPro extends User {
    public isPro: boolean;

    public constructor(id: ID, username: string, email: string, password: string, isPro: boolean) {
        super(id, username, email, password);
        this.isPro = isPro;
    }
}
