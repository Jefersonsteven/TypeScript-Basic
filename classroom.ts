console.log('Empezando mi app');

const app = document.querySelector('.app');

// ✅ Tipo: Number
let phoneNumber: number;
phoneNumber = 3211458475;
// phoneNumber = true; // error
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// ✅ Tipo: Boolean
let isPro: boolean;
isPro = true;
// isPro = 3; // error

// ✅ Tipo: String
let color: string;
color = 'red';
// color = []; // error

// ✅ String Template
let firstName: string = 'Juan';
let lastName: string = 'Perez';
let fullName: string = `${firstName} ${lastName}`;

// ✅ Tipo: Any
let notSure: any;
notSure = 4;
notSure = 'Hola';
notSure = false;
// no da error porque es una variable de tipo desconocido u de cualquier tipo

// ✅ Tipo Inferido
let otherId;
otherId = 4;
otherId = 'Hola';
// no da error por que al no decirle que tipo de dato es, typescript deduce que tipo de dato es
// es lo mismo que decirle que tipo de dato es: any
//

let grettings: any = 'Hello, World';
//
grettings.substring(7);

//

// ✅ Tipo: void - explicito

let user = {
    firstName: 'Juan',
    age: 32,
    lastName: 'Perez'
}

function showInfo(user: any): any {
    console.log(`User Info, Name: ${user.firstName}, Age: ${user.age}`);
    return 'Hola';
}

showInfo(user);

// Tipo: void - inferido

function showFormattedInfo(user: any) {
    console.log(`User Info, Name: ${user.firstName}, Age: ${user.age}`);
}

showFormattedInfo(user);

// Variable void
let unusable;
unusable = undefined;

//

// ✅ Tipo: never

function handlerError(code: number, message: string): never {

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handlerError(404, 'Not Found');
} catch (error) {
}

//

// function sumNumbers(limit: number): never {
//     let sum: number = 0;
//     while (true) {
//         sum += 1;
//     }
// }

// sumNumbers(10);
// ciclo infinito

//

// ✅ Tipo: Null y Undefined

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;

//

// ✅ Tipo: Object

let user1: object;
user1 = {}; // Object

user1 = {
    id: 1,
    username: 'Pompom',
    firstName: 'Juan',
    isPro: true
}

console.log('User', user1);
// object vs Object(Clase JS vs tipo TS)
const user2 = {
    id: 1,
    username: 'Pompom',
    firstName: 'Juan',
    isPro: true
}
console.log('User Id', user2.id);

const user3: object = new Object();

console.log(user3);

Object.defineProperty(user3, 'id', {
    value: 1,
})

console.log(user3);

//

// ✅ Tipo: Array

// Tipo: Array - explicito
const arrayNumbers: number[] = [1, 2, 3, 4, 5];
const arrayStrings: Array<String> = ['Juan', 'Perez', 'Pompom'];

// Tipo: Array - inferido
const arrayAny = [1, 'Juan', true, { id: 1 }];

// Acceder a los valores en un array
console.log('Array', arrayAny);
console.log('Array', arrayAny[3]);
console.log('lenght', arrayAny.length);
arrayAny.push('Hello World');
arrayAny.sort();
console.log('Array', arrayAny);

//

// ✅ Tipo: Tuple

let user4: [number, string];
user4 = [1, 'Maria'];

// tuplas con mas de dos elementos
// id, username, firstName, isPro

let userInfo: [number, string, string, boolean];
userInfo = [1, 'MariCat23', 'Maria', true];

// arreglo de tuplas
let array2: [number, string][];
array2 = [];
array2.push(user4);
array2.push([2, 'Juan']);
console.log('Array', array2);

// "Juan"  --->  "Juancho"
array2[1][1] = array2[1][1].concat('cho');

//

// ✅ Tipo: Enum

// Orentacion para fotografias

enum PhotoOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Orientacion', landscape);
console.log('Orientacion', PhotoOrientation[11]);


enum Country {
    Bolivia = 'Bol',
    Argentina = 'Ar',
    Chile = 'Chi',
    Uruguay = 'Uru',
    Colombia = 'Col'
}

const country: Country = Country.Colombia;
console.log('Country', country);

//

// ✅ Tipo: Type Alias

type IdUser = number | string;

//

// ✅ Union Types

let id: IdUser;
id = '2';
id = 2;

// Buscar fecha en un arreglo
function getNameById(id: IdUser): string {
    return `${id}: Jefferson`;
}

getNameById(1);
getNameById('1');

//

// ✅ Types Literal
// 100x100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';

console.log('Small', smallPicture);

//

// ✅ Aserciones de Tipo

// <tipo> // Angle-bracket syntax

let username2: any;
username2 = 'Jefferson';

// tenemos una cadena, TS confia en mi!
let message: string = (<string>username2).length > 5 ?
                        `Welcome ${username2}` :
                        `Username is too short`;

console.log('Message', message);

let usernameWithId: any = 'Jefferson 1';
// Como obtener el username?
let username3 = (<string>usernameWithId).substring(0, (<string>usernameWithId).indexOf(' '));
let username3ID = (<string>usernameWithId).substring((usernameWithId as string).indexOf(' '), (usernameWithId as string).length);
console.log('Username', username3);
console.log('Username ID', username3ID);

//

// ✅ Funciones

// Crear una fotografia
function createPicture(title?: string, date?: string, size?: SquareSize) {
    return {
        title,
        date,
        size
    }
}

let firstPicture = createPicture('My First Picture', '2020-01-01', '100x100');
let secondPicture = createPicture('My Second Picture', '2020-01-02');
let thirdPicture = createPicture('My Third Picture');
let fourthPicture = createPicture();

// Flat Array Function

let createPic = (title: string, date: string, size: SquareSize): object => {
    return { title, date, size };
};

const picture = createPic('My First Picture', '2020-01-01', '100x100');
console.log('Picture', picture);

// Tipo de retorno con TypeScript

function handlerError2(code: number, message: string): never | string {
    // Procesamiento del codigo, mesaje
    if (message === 'Error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has ocurred';
    }
}

try {
let result2 = handlerError2(502, 'OK');
console.log('Result', result2);

let result = handlerError2(404, 'Error');
console.log('Result', result);
} catch (error) {}

//

// ✅ Interfaces

interface Car {
    readonly brand: string;
    model: string;
    year: number;
    color?: string;
}

function createCar (car: Car): object {
    return {
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color
    }
}

let car = createCar({
    brand: 'Ford',
    model: 'Mustang',
    year: 2020,
});
console.log('Car', car);

let car2: Car;
car2 = {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2020,
    color: 'Red'
}
console.log('Car', car2);
// car2.brand = 'Ford'; // error


//

enum ID {
    id1 = '1',
    id2 = '2',
    id3 = '3'
}

//

// ✅ Interfaces extendidas

interface USER {
    readonly id: ID;
    username: string;
    firstName?: string;
    lastName?: string;
    password: string;
    email: string;
    age?: number;
}

interface USERPRO extends USER {
    isPro: boolean;
    getName(): string;
}

//

// ✅ Clases

abstract class User {
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

class UserPro extends User {
    public isPro: boolean;

    public constructor(id: ID, username: string, email: string, password: string, isPro: boolean) {
        super(id, username, email, password);
        this.isPro = isPro;
    }
}

const UserPRO = new UserPro(ID.id1, 'Jefferson', 'dev@dev.com', '123456', true);