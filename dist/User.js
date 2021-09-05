export class User {
    constructor(id, username, email, password) {
        this._id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    get id() {
        return this._id;
    }
    toString() {
        return `[ id: ${this.id} username:${this.username}]`;
    }
}
