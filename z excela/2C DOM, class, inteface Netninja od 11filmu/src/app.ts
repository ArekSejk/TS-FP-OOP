//teoria poza zadaniowa na dole

import { Faktura } from './classes/faktura.js'//Uwaga! Tutaj zawsze immportujemy js zeby na koniec przegladarka
import { Platnosc } from './classes/platnosc.js'//mogla to importowac i otworzyc. Dlatego pracujemy na pliku ts, ale
import { hasFormatter } from './interfaces/hasFormatter.js';//przekonwertujemy go na js  zawsze!
import { SzablonListy } from './classes/szablonListy.js';

//type casting - mowienie jaki typ to bedzie i ts wie ze to na pewno nigdy nie bedzie null.

const form = document.querySelector('.new-item-form') as HTMLFormElement;//brak bledu bo przez "as"wie ze to FORM.

//querujemy wszystkie elementy formularza inputy, selecty itd
const type = document.querySelector('#type') as HTMLSelectElement;//dot.select z typem wydatku, nie myl z typem TS
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//tworze instancje calej listy UL
const ul = document.querySelector('ul')!; //ts dajeblad ze ul jest prawdop.null,wiec !
const lista = new SzablonListy(ul);

form.addEventListener('submit', (e: Event) => {                             // 1.po kliknieciu submita..
    e.preventDefault();                                                     //wstrzymaj refresh strony..

    let doc: hasFormatter;                                                  //deklaruj zmienna doc

    if (type.value === 'invoice') { //w zal.czy faktura czy platnosc stworz nowy dokument..->
        doc = new Faktura(toFrom.value, details.value, amount.valueAsNumber);//js przy kompilacji daje value jako..
    } else {                                                                //..string,gdy chce bybylo number.. 
        doc = new Platnosc(toFrom.value, details.value, amount.valueAsNumber);//..to robie jako valueAsNumber
    }

    lista.render(doc, type.value, 'end');//.<--wykonaj met. render tzn.stworz li(a wew tresc doc)i wsadz go na UL
})

//tu byla classa faktura, ale przenieslismy ja do pliku faktura.ts zeby ja exportowac.
//w pierwszym akapicie tego pliku importujemy tą klasa a ponizej juz normalnie z niej korzystamy








//TEORIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

const dokumentOne = new Faktura("Andrzej Lepper", "za posadę kuzyna", 1000)
const dokumentTwo = new Platnosc("Wodkan", "za naprawe mojego zlewu", 220)

const wszystkieDokumenty: hasFormatter[] = [];

// HTMLAnchorElement
//gdy queruje korzystajac z selektora "a", TS wie ze to ten typ selektora jak kotwica, i dzieki temu dopasowuje nam do 
const anchor = document.querySelector('a')!;//niej wlasciwe metody. Widac ten typ hooverujac nad zmienna anchor*/

// Wykrzyknik !- wymuszanie querowania bez wyskakiwania bledow!!! A w nawiasie {} dajemy nazwe importowanego elemenu, tutaj classy.

//console.log(anchor.href)// wyswietli komunikat ze ten obj. jest prawdopodobnie null, poniewaz TS nie ma funkcji podgladu do elementow dom w html. I bedzie podkreslac ten anchor jako blad. Oczywiscie tylko sugestywnie bo wszystko jest przekonwertuje w jsa. Zeby wymusic na systemie TSa, ze "wiem ze na pewno anchor zwroci nam jakas wartosc, jestem pewien" to wstawiam przy querowaniu tego elementu na koncu wykrzyknik, ktory spowoduje ze nie bedzie wyskakiwac nam ten blad. Patrz powyzsza linijka.
//--------------------------------------

// HTMLFormElement
//const form10 = document.querySelector('form')!;//ts wie, ze querujac form jest to element typu FORM
//console.log(form10.children)//dziecmi sa poszczegolne zagniezdzone divy. Ale wyskakuje ten sam blad co w powyzszej linijce z kotwica 'a'. Dlatego musze dac ! w querowaniu.
//ale, querujac ten sam element ale po nazwie klasy juz nie wie ze to HTMLFormElement, a jakis "Element", bo klasa moze byc nazwany kazdy element...
//const form8 = document.querySelector('.new-item-form')!;
//console.log(form8.children)

//----------------------------------
//interfaces

interface isPerson {//szablon wymusza strukure/ksztalt obiektu.Nie tworzy go jak klasy a reguluje
    name: string,
    age: number,
    speak(a: string): void;//parametry w interface moga byc nazywane jakkolwiek
    spend(a: number): number,
}
//i tworze obiekt, o typie PERSON

const ja: isPerson = {
    name: 'Arek',
    age: 36,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },      //dlaczego tutaj nie przypisuje wartosci?
}

const pozdrowOsobe = (osoba: isPerson) => {
    console.log('hej ', osoba.name)
}
//pozdrowOsobe(ja) //tu wpisujac inny obiet wyskoczy blad ze nie pasuje do definiowanego typu
