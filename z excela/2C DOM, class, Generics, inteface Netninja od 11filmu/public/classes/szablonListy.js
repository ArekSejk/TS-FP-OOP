//OPIS PONIZSZEJ KLASY:
//1.Tworzę klasę do tworzenia listy submitowanych pozycji w formulerzu HtmL
//2.parametrem w construktorze jest contener, ktory musi byc htmlowską unordered list
//3.parametr ustawiamy na private: po co?
//4.Cytujac za Netnj: "..nie musimy wpisywac niczego w nawiasy{}, bo nalezy pamietac, ze gdy wpisujemy private przed wlasciwoscia to system automatycznie przypisuje jakakolwiek wartosc podajemy jako argument do wlasciwosci tej instancji".
//5. parametr dokument w metodzie render classy to typ dokumentu albo faktura, albo platnosc, a skoro nie wiemy co to bedzie a chcemy otypowac to dajemy wspolny typ ktory jest obowiazujacy dla obu.
//6. metoda render sluzy do przeksztalcenia zebranych informacji z submtowanych wpisow do formularza w widoczne wpisy na liscie w htmlu na stronie. Wpis jako pojedynczy item na liscie ma mieec: naglowek h4 i opis p. Oraz opcje wstawienia tego itemu na poczatku lub na koncu listy UL.
//7. parametr pos(pozycja) to czy uzytkownik chce wstawic dana pozycje na poczatku czy na koncu listy 
export class SzablonListy {
    constructor(container) {
        this.container = container;
    } //tu cont, ktory podaje przy submitowaniu bedzie UL
    render(dokument, naglowek, pos) {
        const li = document.createElement('li'); //tworze li.
        const h4 = document.createElement('h4'); //tworze naglowek wpisu
        h4.innerText = naglowek; //wstawiam do neigo tresc
        li.append(h4); //wstawiam naglowek li;(apend tzn na koniec)
        const p = document.createElement('p'); //tworze tresc do wpisu
        p.innerText = dokument.format(); //jego zawartosc
        li.append(p); //wstawiam na pozycje w liscie
        if (pos === 'start') {
            this.container.prepend(li); //wstaw stworzony li na poczatku UL
        }
        else {
            this.container.append(li); // lub na koncu
        }
    }
}
