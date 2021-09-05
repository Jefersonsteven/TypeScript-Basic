import { ID } from './ID.js';

export abstract class User {
    protected readonly _id: ID;
    protected username: string;
    protected firstName?: string;
    protected lastName?: string;
    protected password: string;
    protected readonly email: string;
    protected age?: number;

    public constructor(id: ID, username: string, email: string, password: string ){
        this._id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get id(): ID {
        return this._id;
    }

    public toString(): string {
        return `[ id: ${this.id} username:${this.username}]`;
    }
}