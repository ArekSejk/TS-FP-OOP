//Polecenie: zrob funkcje ktora ma miec dwa argumenty typu string lub number. Na koniec ma zwracac tuple, czyli arr z konkretnymi typami na danych pozycjach i tez typu string/nr.
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function dajTupl(a, b) {
    return [a, b];
}
var arrNumberow = dajTupl(5, 8);
var arrMieszany = dajTupl("Bartek", 6);
var arrStringow = dajTupl("Jan", "Ewa");
arrStringow.map(function (el) { return el.toUpperCase(); }); // blad!  Przez to,ze to jest string i number kompilator nie zezwala na niektore operacje bo nie wie jaki bedzie dokladny typ. Mozna to ominac okreslajac any dla arg i zwracanego tuple.Za to mozna uzyc generyki:)
// T (nazwa umowna preferowana, mozna dowolnie nazwac)
//druga wersja funkcji ale z typowaniem generycznym
function dajTupl222(a, b) {
    return [a, b];
}
var arrStringow222 = dajTupl222("Ola", "Ala");
var arrNumberow222 = dajTupl222(1.53, 3.14);
var arStrUpperCase = arrStringow222.map(function (el) { return el.toUpperCase(); }); //ok bez bledu
var arNumFloor = arrNumberow222.map(function (el) { return Math.floor(el); }); ///ok bez bledu
// Uwaga! Gdy tworze zmienna korzystajac z tej funkcji typowanej generycznie , ale nie okresle w <> jakiego typu ma byc, do automatycznie wpisujac pierwsz argument A kompilator uznaje,ze takie typy maja byc wszystkich arg. Bo w "szablonie" wszedzie jest T, a T musi = T.Patrz nizej...
// let mixedArr = dajTupl222(5,"ziom")
// let mixedArr2 = dajTupl222(true, true);
//FUNKCJE GENERICS(ogolne)
// Mozna uzyc wiecej niz jednego parametru typowania w funkcji. Np.
//Zwykla postac funkcji w formie wyrazenia funkcyjnego
var dajTupl444 = function (a, b) {
    return [a, b];
};
//typowanie do uzycia   <T,U>(a:T,b:U)=>[T,U]   tzn, param.typu T i U,gdzie arg.a jest T,b U, i zwraca te arg. w arrayu w ustal.kolejnosci(tuplu) [T,U] i to typowanie wstawiam do powyzszej funcji, i wychodzi...
//let dajTupl444 :   <T,U>(a:T,b:U)=>[T,U]      = (a, b) => {...
var dajTupl445 = function (a, b) {
    return [a, b];
};
var mixArr5 = dajTupl445("hello", 4); // dzieki temu oba typy nie sa polaczone,nie ma bledow i mogą być dowolne
var dajTupl5 = function (a, b) {
    return [a, b];
};
var zwrocTuple = function (a, b) {
    return [a, b];
};
var tupleObj1 = {
    a: 3,
    b: 7,
    getTuple: function () {
        return [this.a, this.b];
    } //powyzszy zapis byl w materialach, ale mi dziala ten moj ponizszy tez
    // getTuple(){ //????????????
    //     return [this.a,this.b]
    // },
};
var tuple1 = tupleObj1.getTuple();
console.log('Tuple z obj1 ', tuple1);
var tupleObj2 = {
    a: "6",
    b: 9,
    getTuple: function () {
        return [this.a, this.b];
    }
};
var tuple2 = tupleObj2.getTuple();
console.log('A to tupl z drugiego', tuple2);
var tupleObj3 = {
    a: 3,
    b: 4,
    getTuple: function (c) {
        return [this.a, this.b, c];
    },
};
var tuple3 = tupleObj3.getTuple("5");
console.log(tuple3);
var Student = /** @class */ (function () {
    //public secret: string; blad
    function Student(value) {
        this.secret = value;
    }
    return Student;
}());
// Dziedziczenie miedzy klasami a typy generyczne
var Dawca = /** @class */ (function () {
    function Dawca() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.items = values;
    }
    return Dawca;
}());
var Biorca = /** @class */ (function (_super) {
    __extends(Biorca, _super);
    function Biorca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Biorca.prototype.dajPierwszyElem = function () {
        return this.items[0];
    };
    return Biorca;
}(Dawca));
var litery = new Biorca("tak", "jan", "po");
var pierwszyEl = litery.dajPierwszyElem();
console.log(pierwszyEl.toUpperCase());
//Generic factory functions
// PONIZSZY PRZYKLAD ZWRACA PUSTE OBIEKTY WIEC COS NIE GRA, bo POWINNO DAC NOWE OSOBY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*jako argument przyjmuje dowolna klase i zwraca jej instancje.   Ponizsze to nic innego jak:
function fabryka(konstruktor) {
    return new konstruktor;
}*/
function fabryka(konstruktor) {
    return new konstruktor;
}
//argumenty to beda parametry podawane do klasy wg jej wlasciwosci w constructrze 
function fabrykaInstancji(//to sa argumenty z typami w (), ogarnij:)
konstruktor) {
    var argumenty = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argumenty[_i - 1] = arguments[_i];
    }
    return new (konstruktor.bind.apply(konstruktor, __spreadArray([void 0], argumenty, false)))();
}
var Osoba = /** @class */ (function () {
    function Osoba(firstName, lastName) {
    }
    return Osoba;
}());
var Nauczyciel = /** @class */ (function () {
    function Nauczyciel(firstName, lastName, age) {
    }
    return Nauczyciel;
}());
var zbych = fabrykaInstancji(Osoba, 'Zbyszek', 'Kieliszek');
console.log(zbych);
var babaOdHisty = fabrykaInstancji(Nauczyciel, "Bożena", "Nowak", 49);
console.log(babaOdHisty);
//Zwraca puste obiekty, a powinno nowe instancje. cos zle!?!?!?
