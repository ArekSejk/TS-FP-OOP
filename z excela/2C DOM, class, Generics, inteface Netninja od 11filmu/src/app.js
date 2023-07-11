// Wykrzyknik !- wymuszanie querowania bez wyskakiwania bledow!!!
/* HTMLAnchorElement
Gdy querujemy korzystajac z selektora "a", TS wie ze to ten typ selektora jak kotwica, i dzieki temu dopasowuje nam do niej wlasciwe metody. Widac ten typ hooverujac nad zmienna anchor*/
var anchor = document.querySelector('a'); //Wykrzyknik opis nizej.
console.log(anchor.href); // wyswietli komunikat ze ten obj. jest prawdopodobnie null, poniewaz TS nie ma funkcji podgladu do elementow dom w html. I bedzie podkreslac ten anchor jako blad. Oczywiscie tylko sugestywnie bo wszystko jest przekonwertuje w jsa. Zeby wymusic na systemie TSa, ze "wiem ze na pewno anchor zwroci nam jakas wartosc, jestem pewien" to wstawiam przy querowaniu tego elementu na koncu wykrzyknik, ktory spowoduje ze nie bedzie wyskakiwac nam ten blad. Patrz powyzsza linijka.
// HTMLFormElement
var form10 = document.querySelector('form'); //ts wie, ze querujac form jest to element typu FORM
console.log(form10.children); //dziecmi sa poszczegolne zagniezdzone divy. Ale wyskakuje ten sam blad co w powyzszej linijce z kotwica 'a'. Dlatego musze dac ! w querowaniu.
//ale, querujac ten sam element ale po nazwie klasy juz nie wie ze to HTMLFormElement, a jakis "Element", bo klasa moze byc nazwany kazdy element...
var form8 = document.querySelector('.new-item-form');
console.log(form8.children);
//type casting - mowienie jaki typ to bedzie i ts wie ze to na pewno nigdy nie bedzie null.
//i btw queruje caly formularz juz na potrzeby ponizszego zadania..
var form = document.querySelector('.new-item-form'); //bez bledu bo przez "as"wie ze to FORM.
//querujemy wszystkie elementy formularza inputy, selecty itd
var type = document.querySelector('#type'); //dot.select z typem wydatku, nie myl z typem TS
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); //powstrzymuje defaultowe odswiezenie strony przy wyslaniu forma. Pamietaj zawsze o tym!
    console.log(type.value, //wysiwetla to co akutalnie jest wybrane/wpisane
    toFrom.value, details.value, amount.valueAsNumber);
});
var Faktura = /** @class */ (function () {
    function Faktura(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Faktura.prototype.FormData = function () {
        return "".concat(this.client, " jest winien ").concat(this.amount, " za ").concat(this.details, ".");
    };
    return Faktura;
}());
var fakturaOne = new Faktura("Zbigiew Ziobro", "strona internetowa partii", 1500);
var fakturaTwo = new Faktura("Jarosław Kaczyński", "dodanie nowych featcherów do strony", 500);
console.log(fakturaOne);
console.log(fakturaTwo); //spr je czysto pogladowo
var faktury = []; //array w ktorym elementami moga byc jedynie obj tworzone z klasy Faktura
//faktury.push('janek') blad
//faktury.push({ name: 'Brajan', Age: 5 }) blad
faktury.push(fakturaOne);
faktury.push(fakturaTwo);
console.log(faktury); //ppogladowo
faktury.forEach(function (fakt) {
    console.log(fakt.client, fakt.details, fakt.amount, fakt.FormData());
});
console.log('aa');
