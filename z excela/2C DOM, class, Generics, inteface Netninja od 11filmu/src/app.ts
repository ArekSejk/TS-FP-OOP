import { Faktura } from './classes/faktura.js' //!!! Uwaga! Tutaj zawsze immportujemy js zeby na koniec przegladarka mogla to importowac i otworzyc. Dlatego pracujemy na pliku ts, ale przekonwertujemy go na js  zawsze!
// Wykrzyknik !- wymuszanie querowania bez wyskakiwania bledow!!! A w nawiasie {} dajemy nazwe importowanego elemenu, tutaj classy

/* HTMLAnchorElement
Gdy querujemy korzystajac z selektora "a", TS wie ze to ten typ selektora jak kotwica, i dzieki temu dopasowuje nam do niej wlasciwe metody. Widac ten typ hooverujac nad zmienna anchor*/
const anchor = document.querySelector('a')!;//Wykrzyknik opis nizej.
console.log(anchor.href)// wyswietli komunikat ze ten obj. jest prawdopodobnie null, poniewaz TS nie ma funkcji podgladu do elementow dom w html. I bedzie podkreslac ten anchor jako blad. Oczywiscie tylko sugestywnie bo wszystko jest przekonwertuje w jsa. Zeby wymusic na systemie TSa, ze "wiem ze na pewno anchor zwroci nam jakas wartosc, jestem pewien" to wstawiam przy querowaniu tego elementu na koncu wykrzyknik, ktory spowoduje ze nie bedzie wyskakiwac nam ten blad. Patrz powyzsza linijka.
//--------------------------------------
// HTMLFormElement
const form10 = document.querySelector('form')!;//ts wie, ze querujac form jest to element typu FORM
console.log(form10.children)//dziecmi sa poszczegolne zagniezdzone divy. Ale wyskakuje ten sam blad co w powyzszej linijce z kotwica 'a'. Dlatego musze dac ! w querowaniu.
//ale, querujac ten sam element ale po nazwie klasy juz nie wie ze to HTMLFormElement, a jakis "Element", bo klasa moze byc nazwany kazdy element...
const form8 = document.querySelector('.new-item-form')!;
console.log(form8.children)
//-----------------------------------------------------------
//type casting - mowienie jaki typ to bedzie i ts wie ze to na pewno nigdy nie bedzie null.




//i btw queruje caly formularz juz na potrzeby ponizszego zadania..
const form = document.querySelector('.new-item-form') as HTMLFormElement;//bez bledu bo przez "as"wie ze to FORM.

//querujemy wszystkie elementy formularza inputy, selecty itd
const type = document.querySelector('#type') as HTMLSelectElement;//dot.select z typem wydatku, nie myl z typem TS
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();//powstrzymuje defaultowe odswiezenie strony przy wyslaniu forma. Pamietaj zawsze o tym!

    console.log(
        type.value,//wysiwetla to co akutalnie jest wybrane/wpisane
        toFrom.value,
        details.value,
        amount.valueAsNumber,//js przy kompilacji drukuje valuesy jako stringi, a jesli chce zeby bylo drukowane jako numer to robie taka valueAsNumber
    )
})

//----------------------------------
//tu byla classa faktura, ale przenieslismy ja do pliku faktura.ts zeby ja exportowac.
//w pierwszym wierszu tego pliku importujemy tą klasa a ponizej juz normalnie z niej korzystamy

const fakturaOne = new Faktura("Zbigiew Ziobro", "strona internetowa partii", 1500);
const fakturaTwo = new Faktura("Jarosław Kaczyński", "dodanie nowych featcherów do strony", 500);

console.log(fakturaOne)
console.log(fakturaTwo)//spr je czysto pogladowo

const faktury: Faktura[] = [];//array w ktorym elementami moga byc jedynie obj tworzone z klasy Faktura
//faktury.push('janek') blad
//faktury.push({ name: 'Brajan', Age: 5 }) blad
faktury.push(fakturaOne)
faktury.push(fakturaTwo)

console.log(faktury) //ppogladowo

faktury.forEach(fakt => {
    console.log(fakt.client, fakt.amount, fakt.FormData())
})
//z druk w consoli usunalem details, poniewaz sa private i wyskakiwal blad, tzn nie ma do nich dostepu spoza classy,dlatego np wmetodzie FormData() smiga, bo metoda jest wewnatrz


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

const pozdrowOsobe = (osoba: isPerson)=> {
    console.log('hej ', osoba.name)
}
pozdrowOsobe(ja) //tu wpisujac inny obiet wyskoczy blad ze nie pasuje do definiowanego typu
console.log(ja)