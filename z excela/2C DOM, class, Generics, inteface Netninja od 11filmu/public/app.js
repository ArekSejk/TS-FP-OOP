//teoria poza zadaniowa na dole
import { Faktura } from './classes/faktura.js'; //Uwaga! Tutaj zawsze immportujemy js zeby na koniec przegladarka
import { Platnosc } from './classes/platnosc.js'; //mogla to importowac i otworzyc. Dlatego pracujemy na pliku ts, ale
import { SzablonListy } from './classes/szablonListy.js';
//type casting - mowienie jaki typ to bedzie i ts wie ze to na pewno nigdy nie bedzie null.
const form = document.querySelector('.new-item-form'); //brak bledu bo przez "as"wie ze to FORM.
//querujemy wszystkie elementy formularza inputy, selecty itd
const type = document.querySelector('#type'); //dot.select z typem wydatku, nie myl z typem TS
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//tworze instancje calej listy UL
const ul = document.querySelector('ul'); //ts dajeblad ze ul jest prawdop.null,wiec !
const lista = new SzablonListy(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); //wstrzymaj refresh strony..
    let doc; //deklaruj zmienna doc
    if (type.value === 'invoice') { //w zal.czy faktura czy platnosc stworz nowy dokument..->
        doc = new Faktura(toFrom.value, details.value, amount.valueAsNumber); //js przy kompilacji daje value jako..
    }
    else { //..string,gdy chce bybylo number.. 
        doc = new Platnosc(toFrom.value, details.value, amount.valueAsNumber); //..to robie jako valueAsNumber
    }
    lista.render(doc, type.value, 'end'); //.<--wykonaj met. render tzn.stworz li(a wew tresc doc)i wsadz go na UL
});
//tu byla classa faktura, ale przenieslismy ja do pliku faktura.ts zeby ja exportowac.
//w pierwszym akapicie tego pliku importujemy tą klasa a ponizej juz normalnie z niej korzystamy
//TEORIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const dokumentOne = new Faktura("Andrzej Lepper", "za posadę kuzyna", 1000);
const dokumentTwo = new Platnosc("Wodkan", "za naprawe mojego zlewu", 220);
const wszystkieDokumenty = [];
// HTMLAnchorElement
//gdy queruje korzystajac z selektora "a", TS wie ze to ten typ selektora jak kotwica, i dzieki temu dopasowuje nam do 
const anchor = document.querySelector('a'); //niej wlasciwe metody. Widac ten typ hooverujac nad zmienna anchor*/
//i tworze obiekt, o typie PERSON
const ja = {
    name: 'Arek',
    age: 36,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }, //dlaczego tutaj nie przypisuje wartosci?
};
const pozdrowOsobe = (osoba) => {
    console.log('hej ', osoba.name);
};
//pozdrowOsobe(ja) //tu wpisujac inny obiet wyskoczy blad ze nie pasuje do definiowanego typu
