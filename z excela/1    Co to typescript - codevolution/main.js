"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome back';
console.log(message);
var x = 20;
var y = 20;
var sum;
var title = 'cos tam';
var isBeginner = true;
var total = 0;
var name = 'Zdzichu';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript"); //backticks
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
//array - Deklarowanie typow tablic. Dwa sposoby, rownoznaczne
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Jan', 22];
//enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
// any i unknown
var dupa = 10; //any nie zglosi bledu gdy ja wywolam jak funkcje, lub nieistnijaca wlasciwosc itd.po prostu tego czego nie ma to nie odpali ale bez wolania o blad. Ale unknown juz tak.
//console.log(dupa.imie)//gdy dupa to any nie wyswietla bledu, tak jesi unknown
//(dupa as Function)(); //z any nie wyswietla bledu, mimo ze nie jest funkcja, z unknown tylko z ( as )
//(dupa as string).toUpperCase()//nie wyswietla bledu jw:)
// user defined type guard
//zrobimy funkcje ktira spr cos tam w mojej zmiennej
var mojaZmienna = 10;
//f.maImie(param ma byc obj.typ any) i zwraca obj, ktory zawiera wlasciwosc name, ktora jest typu string
function maImie(obj) {
    return !!obj && //zwroci obj i ..
        typeof obj === 'object' && // ten obiekt bedzie typu object i...
        "name" in obj; // w obj istnieje parametr name
}
if (maImie(mojaZmienna)) {
    console.log(mojaZmienna.name);
}
//(mojaZmienna as string).toUpperCase();
// auto wnioskowanie systemu, o tym jaki jest typ
var k; //tylko deklarujemy, dlatego przpisal typ ANY
k = 10;
k = true; //nie wyswietla bledu bo ma przypiany any
var e = 20;
e = 30; //nie ma bledu bo to still numer
//e = 'jajco'; //wyswietla blad bo type ma byc numer
// union type
var kasza;
kasza = 30;
kasza = false;
//kasza = 'tak'; // blad bo to string
// typowwanie w funkcjach
// ? <-oznacza opcjonalny parametr, ktory da undefined,dlatego musimy zrobic instr. warunkowa co w tym przypadku
function dodaj(num1, num2) {
    if (num2)
        return num1 + num2; //jesli istnieje
    else
        return num1;
}
var test0 = dodaj(5, 10); //15
console.log("test0:", test0);
//let test = dodaj(5, "ddd")//podkresla z bledem
var test2 = dodaj(5);
console.log("test2:", test2); //5
//ta sama funkcja tylko zamiast parametrow opcjonalnych (?) wstawilismy z defaultowa wartoscia w przypadku niewpisania
function dodajX(num1, num2) {
    if (num2 === void 0) { num2 = 99; }
    if (num2)
        return num1 + num2; //jesli istnieje
    else
        return num1;
}
var test3 = dodajX(5);
console.log("test3:", test3); //104
// objekty
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
console.log(fullName(p));
//to samo co powyzej ale z interfacem
function fullName2(person) {
    console.log("Interface:  ".concat(person.firstName, " ").concat(person.lastName));
}
var yy = {
    firstName: "Jan",
    // lastName: "matejko"
};
fullName2(yy);
//classy, dziedziczenie i access modifiers(public,private,protected)
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName, "!"));
    };
    return Employee;
}());
var employee1 = new Employee('Janusz');
employee1.greet(); //zadziala z privet i protected,bo imie dla metod wew tej klasy sa dostepne, a samo greet jest public
//console.log(employee1.employeeName)// nie zadziala gdy bedzie private i protected bo jest wywolaniem calkowic.z zewn.
console.log('------------');
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
        console.log(this.employeeName); //zadziala z protected, a z private juz nie
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Ryszard');
manager1.greet(); //metoda dziedziczona
manager1.delegateWork(); // metoda wlasna
//console.log(employee1.employeeName)//dziedziczona wlasciwosc. wyswietli blad bo employeeName jest private
console.log('------------');
//moge deklarować,że obj jest zgodny z kształtem nowego, interface używając składni takiej jak : TypeName
var user = {
    name: 'Michał',
    id: 0,
};
console.log(user);
//podobnie z klasami i interfacem
var PlayerAccount = /** @class */ (function () {
    function PlayerAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return PlayerAccount;
}());
var gracz = new PlayerAccount('Marian', 8);
//tworze gracza, jako instancje classy PlayerAccount, ktory ma byc typu jak interface Player
console.log(gracz);
console.log('----------------------');
var pers1 = {
    name: "Heniek",
    age: 47,
};
var pers2 = {
    name: "Bogdan",
    age: 33,
    job: 'doctor',
};
console.log(pers1);
console.log(pers2);
