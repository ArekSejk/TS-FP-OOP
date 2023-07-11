export { }

let message = 'Welcome back';
console.log(message)

let x = 20;
const y = 20;

let sum;

const title = 'cos tam';

let isBeginner = true;

let total: number = 0;

let name: string = 'Zdzichu';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`; //backticks

console.log(sentence)

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;


//array - Deklarowanie typow tablic. Dwa sposoby, rownoznaczne
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Jan', 22];

//enum 

enum Color { Red = 5, Blue, Green }

let c: Color = Color.Blue;
console.log(c)

// any i unknown

let dupa: unknown = 10; //any nie zglosi bledu gdy ja wywolam jak funkcje, lub nieistnijaca wlasciwosc itd.po prostu tego czego nie ma to nie odpali ale bez wolania o blad. Ale unknown juz tak.

//console.log(dupa.imie)//gdy dupa to any nie wyswietla bledu, tak jesi unknown

//(dupa as Function)(); //z any nie wyswietla bledu, mimo ze nie jest funkcja, z unknown tylko z ( as )

//(dupa as string).toUpperCase()//nie wyswietla bledu jw:)



// user defined type guard

//zrobimy funkcje ktira spr cos tam w mojej zmiennej

let mojaZmienna: unknown = 10;

//f.maImie(param ma byc obj.typ any) i zwraca obj, ktory zawiera wlasciwosc name, ktora jest typu string
function maImie(obj: any): obj is { name: string } {
    return !!obj && //zwroci obj i ..
        typeof obj === 'object' && // ten obiekt bedzie typu object i...
        "name" in obj // w obj istnieje parametr name
}

if (maImie(mojaZmienna)) {
    console.log(mojaZmienna.name)
}

//(mojaZmienna as string).toUpperCase();


// auto wnioskowanie systemu, o tym jaki jest typ

let k;//tylko deklarujemy, dlatego przpisal typ ANY
k = 10;
k = true; //nie wyswietla bledu bo ma przypiany any

let e = 20;
e = 30;//nie ma bledu bo to still numer
//e = 'jajco'; //wyswietla blad bo type ma byc numer


// union type

let kasza: boolean | number;
kasza = 30;
kasza = false;
//kasza = 'tak'; // blad bo to string


// typowwanie w funkcjach


// ? <-oznacza opcjonalny parametr, ktory da undefined,dlatego musimy zrobic instr. warunkowa co w tym przypadku
function dodaj(num1: number, num2?: number) {
    if (num2) return num1 + num2;//jesli istnieje
    else return num1;
}

let test0 = dodaj(5, 10);//15
console.log("test0:", test0)

//let test = dodaj(5, "ddd")//podkresla z bledem

let test2 = dodaj(5);
console.log("test2:", test2)//5

//ta sama funkcja tylko zamiast parametrow opcjonalnych (?) wstawilismy z defaultowa wartoscia w przypadku niewpisania
function dodajX(num1: number, num2: number = 99) {
    if (num2) return num1 + num2;//jesli istnieje
    else return num1;
}

let test3 = dodajX(5)
console.log("test3:", test3) //104



// objekty

function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

const p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

console.log(fullName(p))

//interface
interface Person {
    firstName: string,
    lastName?: string, //opcjonalnie, daje undefined ofc
}
//to samo co powyzej ale z interfacem
function fullName2(person: Person) {
    console.log(`Interface:  ${person.firstName} ${person.lastName}`)
}
const yy = {
    firstName: "Jan",
    // lastName: "matejko"
}
fullName2(yy)



//classy, dziedziczenie i access modifiers(public,private,protected)

class Employee {
/*private*/protected employeeName: string;//gdy ustawie private to nie mozna wywolac tego keysa spoza classy bez bledu!.Dziala jedynie w greet.A Juz w employy1.employyeName nie! Latwo to mozna zaobserwowac gdy sie wywoluje notacją kropkowa metody to wyswietla proponowane metody tylko te ktore mozna. Jak dam private to z  employee1. zniknie (..) .employeeName z tej proponow. listy. Do wlasc.private mamy dostep tylko wewnatrz tej klasy,a do protected dodatkowo z class pochodnych(dziedziczacych).Przy obu nie uda sie wywolac tego calkowicie z zewnatrz

    constructor(name: string) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}!`);
    }
}
const employee1 = new Employee('Janusz');
employee1.greet()//zadziala z privet i protected,bo imie dla metod wew tej klasy sa dostepne, a samo greet jest public
//console.log(employee1.employeeName)// nie zadziala gdy bedzie private i protected bo jest wywolaniem calkowic.z zewn.
console.log('------------')



class Manager extends Employee {//dzidzicze z Employee
    constructor(managerName: string) {
        super(managerName);//super(delegowane wlasc.)
    }
    delegateWork() {//tworze swoja metode
        console.log('Manager delegating tasks')
        console.log(this.employeeName)//zadziala z protected, a z private juz nie
    }
}
const manager1 = new Manager('Ryszard');

manager1.greet();//metoda dziedziczona
manager1.delegateWork()// metoda wlasna
//console.log(employee1.employeeName)//dziedziczona wlasciwosc. wyswietli blad bo employeeName jest private
console.log('------------')



// interface cz2

// const user = { zwykly zapis obiektu
//     name: 'Michał',
//     id: 0,
// }
// console.log(user)

interface User { //Możesz jawnie opisać kształt tego obiektu za pomocą interface deklaracji:
    name: string,
    id: number,
}

//moge deklarować,że obj jest zgodny z kształtem nowego, interface używając składni takiej jak : TypeName
const user: User = {// tworze usera,ktory jest typu Usera, tzn jak szablon User/interface
    name: 'Michał',//gdy podam inny typ value,lub inna nazwe keysa to tez blad!Interface to tak jakby szablon
    id: 0,
}

console.log(user)


//podobnie z klasami i interfacem

class PlayerAccount { //sama klasa.oczywiscie napisana w stylu TS
    name: string;
    id: number;

    constructor(name: string, id: number) {//ale dlaczego dwukrotnie typuje te wlasciwosci?
        this.name = name;
        this.id = id;
    }
}

// tworze interface, do ktorego bede dopasowywal(tworzyl nań?) classe Player

interface Player {//po co go tworze? po to mam klase, zeby byl szablon, a w niej moge wszystko otypowac
    name: string;
    id: number;
}

const gracz: Player = new PlayerAccount('Marian', 8)
//tworze gracza, jako instancje classy PlayerAccount, ktory ma byc typu jak interface Player
console.log(gracz)
console.log('----------------------')

//Interface Cd...
/*
Możesz używać interfejsów do opisywania parametrów i zwracania wartości do funkcji:
    function deleteUser(user: User) {
        // ...
    }

function getAdminUser(): User {
        //...
    }
*/

// interface - uzycie jako szablon w tworzeniu obiektow (jak stosowac  opcjonalne wlasciiwosci)

interface Osoba {
    name: string;
    age: number;
    [key: string]: any;//oznacza, ze moze byc opcjonalny kolejny [keys w typie stringa] z value w typie stringa
}

const pers1: Osoba = {//jest ok mimo ze nie ma 3 parametru,bo ten jest opcjonalny
    name: "Heniek",
    age: 47,
}

const pers2: Osoba = {//jest ok, mimo ze ma 3 parametry,bo ten jest opcjonalny
    name: "Bogdan",
    age: 33,
    job: 'doctor',
}

console.log(pers1)
console.log(pers2)