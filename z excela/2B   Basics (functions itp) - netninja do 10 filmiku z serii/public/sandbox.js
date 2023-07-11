"use strict";
// funkcje
let przywitanie;
// deklaruje ze wartosc w przyszlosci przypisana do przywitanie bedzie typu funkcji. Funkcja tutaj zawsze pisana z duzej!
// przywitanie = 'hello'; blad bo ma byc funkcja
przywitanie = () => {
    console.log('hello!!!');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "17"); //c jest opcjonalne,wtedy daje c?,ale jesli ma defaultowa wartosc jak tu(10) to pisze wartosc ale juz bez ?
//-------------------------------------
//przypisywanie funk. do zmiennych
const minus = (a, b) => {
    return a + b;
};
let wynik = minus(10, 20); //wynik od razu tez ma typowana wartosc, przypisana do typu jaka zwracana jest w minusie.
wynik = 5; // ok, ale..
// wynik = "100"// juz nie gra,blad bo string:)
//------------------------------------
//Enumy reverse mapping (z tutorialsteacher.com tez z excela)
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia); // drukuje najpierw cala liste w postaci '1':'Newspaper', '2':"News...,a potem odwrotnie po nazwie i index:)
console.log(PrintMedia[2]); //Newsletter
console.log(PrintMedia.Newsletter); //2
let employee;
employee = { userName: 'Marek', points: 66 };
//--------------------------------------
//funkcje cd. netninja
//przyklad 1
let greet;
//a,b to tylko nazwy parametrow, a my w funkcji mozemy nazwac je inaczej
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('bartek', 'siemaaa!');
//przyklad 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'dodaj') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(4, 3, 'odejmij')); //1
console.log(calc(4, 3, 'dodaj')); //4
//przyklad 3
//parametrem funkcji jest obiekt
let logDetails;
logDetails = (ninja) => {
    return console.log(`${ninja.name} is ${ninja.age} years old`);
};
const test1 = logDetails({ name: "Riu", age: 24 });
console.log(test1);
