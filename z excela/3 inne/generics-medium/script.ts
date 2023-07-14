//Polecenie: zrob funkcje ktora ma miec dwa argumenty typu string lub number. Na koniec ma zwracac tuple, czyli arr z konkretnymi typami na danych pozycjach i tez typu string/nr.

type myTyp = string | number;// Alias z unia typow

function dajTupl(a: myTyp, b: myTyp): [myTyp, myTyp] {
    return [a, b]
}

let arrNumberow = dajTupl(5, 8)
let arrMieszany = dajTupl("Bartek", 6)
let arrStringow = dajTupl("Jan", "Ewa");

arrStringow.map(el => el.toUpperCase()) // blad!  Przez to,ze to jest string i number kompilator nie zezwala na niektore operacje bo nie wie jaki bedzie dokladny typ. Mozna to ominac okreslajac any dla arg i zwracanego tuple.Za to mozna uzyc generyki:)

// T (nazwa umowna preferowana, mozna dowolnie nazwac)

//druga wersja funkcji ale z typowaniem generycznym
function dajTupl222<T>(a: T, b: T): [T, T] {
    return [a, b]
}
let arrStringow222 = dajTupl222<string>("Ola", "Ala");
let arrNumberow222 = dajTupl222<number>(1.53, 3.14)

let arStrUpperCase = arrStringow222.map(el => el.toUpperCase())//ok bez bledu

let arNumFloor = arrNumberow222.map(el => Math.floor(el));///ok bez bledu

// Uwaga! Gdy tworze zmienna korzystajac z tej funkcji typowanej generycznie , ale nie okresle w <> jakiego typu ma byc, do automatycznie wpisujac pierwsz argument A kompilator uznaje,ze takie typy maja byc wszystkich arg. Bo w "szablonie" wszedzie jest T, a T musi = T.Patrz nizej...

// let mixedArr = dajTupl222(5,"ziom")
// let mixedArr2 = dajTupl222(true, true);



//FUNKCJE GENERICS(ogolne)

// Mozna uzyc wiecej niz jednego parametru typowania w funkcji. Np.

//Zwykla postac funkcji w formie wyrazenia funkcyjnego
let dajTupl444 = (a, b) => {
    return [a, b];
}
//typowanie do uzycia   <T,U>(a:T,b:U)=>[T,U]   tzn, param.typu T i U,gdzie arg.a jest T,b U, i zwraca te arg. w arrayu w ustal.kolejnosci(tuplu) [T,U] i to typowanie wstawiam do powyzszej funcji, i wychodzi...
//let dajTupl444 :   <T,U>(a:T,b:U)=>[T,U]      = (a, b) => {...

let dajTupl445: <T, U>(a: T, b: U) => [T, U] = (a, b) => {
    return [a, b];
}
const mixArr5 = dajTupl445("hello", 4)// dzieki temu oba typy nie sa polaczone,nie ma bledow i mogą być dowolne

// mozna tez uzyc aliasu
type mojTypeF = <T, U>(a: T, b: U) => [T, U];

let dajTupl5: mojTypeF = (a, b) => {
    return [a, b]
}


//INTERFACE'Y GENERICS(ogolne)

// Interfejs Funkcji, ktory wymusza jej ksztalt na wzor powyzszego typowania z aliasu

interface tuplowaFunkcja {
    <T, U>(a: T, b: U): [T, U]; //dlaczego daje to w klamry?
}

let zwrocTuple: tuplowaFunkcja = (a, b) => {
    return [a, b]
}

//załóżmy, ze chcemy zrobic interface obiektu, ktory ma wlasciwosc a i b, oraz funkcje getTuple. Mozemy to zrobic uzywajac typow generycznych

interface objTuple<T, U> {
    a: T;
    b: U;
    getTuple(): [T, U];
}

let tupleObj1: objTuple<number, number> = {     //przyklad uzycia nr 1
    a: 3,
    b: 7,
    getTuple: function () {
        return [this.a, this.b]
    }//powyzszy zapis byl w materialach, ale mi dziala ten moj ponizszy tez
    // getTuple(){ //????????????
    //     return [this.a,this.b]
    // },
}
const tuple1 = tupleObj1.getTuple();
console.log('Tuple z obj1 ', tuple1)

let tupleObj2: objTuple<string, number> = {     //przyklad uzycia nr 2
    a: "6",
    b: 9,
    getTuple: function () {
        return [this.a, this.b]
    }
}
const tuple2 = tupleObj2.getTuple();
console.log('A to tupl z drugiego', tuple2)

//a co w przypadku, gdy powyzszy obiekt, w funkcji getTuple musi miec podany otypowany argument? Dodaje kolejny param generyczny do interfacu

interface objTuple2<T, U, V> {
    a: T;
    b: U;
    getTuple(c: V): [T, U, V];
}
let tupleObj3: objTuple2<number, number, string> = {
    a: 3,
    b: 4,
    getTuple(c) {
        return [this.a, this.b, c]
    },
}
let tuple3 = tupleObj3.getTuple("5")
console.log(tuple3)

//Wszystko jest ok, pod warunkiem, ze chcemy i wiemy jaki jest typ tego parametru V. Jesli nie to musimy ustawic dowolny, ale nie ustawiajac any(omijaj!), tylko nie definiuj go w <generyki> w interfacie, a podajac ten parametr jedynie w przy funkcji przeznaczenia w <V> i zwrocie, jak nizej.

interface objTuple3<T, U> {
    a: T;
    b: U;
    getTuple<V>(c: V): [T, U, V];
}

// Interface'y z typami generycznymmi w classach
interface Secret<T> {
    secret: T;
}

class Student implements Secret<number> {
    public secret: number;
    //public secret: string; blad

    constructor(value: number) {
        this.secret = value;
    }
}


// Dziedziczenie miedzy klasami a typy generyczne
class Dawca<U>{
    items: U[];

    constructor(...values: U[]) {
        this.items = values;
    }
}
class Biorca<T> extends Dawca<T>{
    dajPierwszyElem(): T {
        return this.items[0];
    }
}
let litery = new Biorca<string>("tak", "jan", "po")
let pierwszyEl = litery.dajPierwszyElem()
console.log(pierwszyEl.toUpperCase())

//Generic factory functions

// PONIZSZY PRZYKLAD ZWRACA PUSTE OBIEKTY WIEC COS NIE GRA, bo POWINNO DAC NOWE OSOBY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


/*jako argument przyjmuje dowolna klase i zwraca jej instancje.   Ponizsze to nic innego jak: 
function fabryka(konstruktor) {
    return new konstruktor;
}*/

function fabryka<T>(konstruktor: new () => T): T {   //tenTYP mowi,ze arg funk. musi miec postac new()..tj.constra.
    return new konstruktor;
}
//ponieważ jedynym warunkiem funkcja postac konstruktora, to każda klasa kwalifikuje się do tego, bo kazda taka ma:)

//Alias typu funkcji konstruktora
type KonstAlias<T> = new (...argumenty: any[]) => T;

//argumenty to beda parametry podawane do klasy wg jej wlasciwosci w constructrze 

function fabrykaInstancji<U>(           //to sa argumenty z typami w (), ogarnij:)
    konstruktor: KonstAlias<U>,
    ...argumenty: any[];
): U {
    return new konstruktor(...argumenty);
}

class Osoba {
    constructor(
        firstName: string,
        lastName: string,
    ) { }
}
class Nauczyciel {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
    ) { }
}

let zbych = fabrykaInstancji(Osoba, 'Zbyszek', 'Kieliszek')
console.log(zbych)
let babaOdHisty = fabrykaInstancji(Nauczyciel, "Bożena", "Nowak", 49);
console.log(babaOdHisty)
//Zwraca puste obiekty, a powinno nowe instancje. cos zle!?!?!?
