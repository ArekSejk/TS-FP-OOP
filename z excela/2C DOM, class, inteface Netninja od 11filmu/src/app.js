"use strict";
//teoria poza zadaniowa na dole
Object.defineProperty(exports, "__esModule", { value: true });
var faktura_js_1 = require("./classes/faktura.js"); //Uwaga! Tutaj zawsze immportujemy js zeby na koniec przegladarka
var platnosc_js_1 = require("./classes/platnosc.js"); //mogla to importowac i otworzyc. Dlatego pracujemy na pliku ts, ale
var szablonListy_js_1 = require("./classes/szablonListy.js");
//type casting - mowienie jaki typ to bedzie i ts wie ze to na pewno nigdy nie bedzie null.
var form = document.querySelector('.new-item-form'); //brak bledu bo przez "as"wie ze to FORM.
//querujemy wszystkie elementy formularza inputy, selecty itd
var type = document.querySelector('#type'); //dot.select z typem wydatku, nie myl z typem TS
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//tworze instancje calej listy UL
var ul = document.querySelector('ul'); //ts dajeblad ze ul jest prawdop.null,wiec !
var lista = new szablonListy_js_1.SzablonListy(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault(); //wstrzymaj refresh strony..
    var doc; //deklaruj zmienna doc
    if (type.value === 'invoice') { //w zal.czy faktura czy platnosc stworz nowy dokument..->
        doc = new faktura_js_1.Faktura(toFrom.value, details.value, amount.valueAsNumber); //js przy kompilacji daje value jako..
    }
    else { //..string,gdy chce bybylo number.. 
        doc = new platnosc_js_1.Platnosc(toFrom.value, details.value, amount.valueAsNumber); //..to robie jako valueAsNumber
    }
    lista.render(doc, type.value, 'end'); //.<--wykonaj met. render tzn.stworz li(a wew tresc doc)i wsadz go na UL
});
//tu byla classa faktura, ale przenieslismy ja do pliku faktura.ts zeby ja exportowac.
//w pierwszym akapicie tego pliku importujemy tą klasa a ponizej juz normalnie z niej korzystamy
//TEORIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
var dokumentOne = new faktura_js_1.Faktura("Andrzej Lepper", "za posadę kuzyna", 1000);
var dokumentTwo = new platnosc_js_1.Platnosc("Wodkan", "za naprawe mojego zlewu", 220);
var wszystkieDokumenty = [];
// HTMLAnchorElement
//gdy queruje korzystajac z selektora "a", TS wie ze to ten typ selektora jak kotwica, i dzieki temu dopasowuje nam do 
var anchor = document.querySelector('a'); //niej wlasciwe metody. Widac ten typ hooverujac nad zmienna anchor*/
//i tworze obiekt, o typie PERSON
var ja = {
    name: 'Arek',
    age: 36,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
var pozdrowOsobe = function (osoba) {
    console.log('hej ', osoba.name);
};
//pozdrowOsobe(ja) //tu wpisujac inny obiet wyskoczy blad ze nie pasuje do definiowanego typu
