//TS w classach (access modifiers, getter)

class Emoji {
    // icon: string;  //nie musze tego gdy dam do arg.constr.(koniecznie +access modifiers) 
    constructor(public icon: string) { }//bez this.icon = icon; bo parametr ma acc.mod
}
const emo1 = new Emoji("usmiech")
console.log(emo1.icon)//usmiech

//ale takie oznaczanie public jest niebezpieczne(nie pure) bo mozna zmodyfikowac icone z zew.
emo1.icon = "smuteczek";
console.log(emo1.icon)//smuteczek

//dlatego ta sama klasa ale prywatna, z geterem aby moc pobrac nadal ikone, ale juz nie zmienic


class Emoji2 {
    private _prev;    //tworze zeby zmieniac emotki seterem

    constructor(private _icon: string) { }//priv nie moge wywolac/zmien z zew.Dlatego dam gettera

    get icon() {
        return this._icon;
    }

    get prev() {
        return this._prev;
    }

    change(value) {
        this._prev = this.icon;//obecna ikona wsadzana jest do schowa poprzedniej
        this._icon = value;//a na jej miejsce deklarujemy jakas podana wart. jako arg. w wywolaniu funkcji.
    }
}
const emo2 = new Emoji2("wc")
console.log(emo2.icon)//wc
//emo2.icon = "piwko";//blad, bo nie mozna zmienic

emo2.change("dupa")//powinno wstawic w icone "dupe", a wc z ikony przestawic na prev
console.log(".", emo2.icon)//dupa
console.log(".", emo2.prev)//wc



//metody statyczne w classach a TypeScript

class Przykladowa {
    static dodajJeden(value) {
        return 1 + value;
    }
}
console.log(Przykladowa.dodajJeden(5))




// dziedziczenie vs kompozycja


// A)Dziedziczenie
class Human {
    constructor(public name) { }

    sayHi() {
        return `Hello, ${this.name}`;
    }
}
const czlowiek1 = new Human("Bob")
console.log(czlowiek1.name)
console.log(czlowiek1.sayHi())

class SuperHuman extends Human {

    heroName;

    constructor(name) {//bez public/private
        super(name);
        this.heroName = `HERO ${name}`;
    }

    superMoce() {
        return `${this.heroName} rzuca kulami ognia!`
    }
}
const ironman = new SuperHuman("Rick")
console.log(ironman.superMoce())

//B)Kompozycja

//Np laczac ze soba obiekty, ktore oddzielaja poszczegolne wlasciwosci/metody od funkcji, ktore zwracaja obiekty

const hasName = (name) => {
    return { name };
}

const canSayHi = (name) => {
    return {
        sayHi: () => `Hello ${name}`
    }
}

const Person = function (name) {
    return {
        ...hasName(name),
        ...canSayHi(name)
    }
}
const osoba1 = Person("Jan")
console.log(osoba1.sayHi())// Hello Jan

//Ten wzorzec dzial, ale tracimy cala ergonomie programowania obiektowego

// C) Opcja z TypeScript  - ze wzgledu na powyzsze zdanie, w typescript istnieje mozliwosc kolejna