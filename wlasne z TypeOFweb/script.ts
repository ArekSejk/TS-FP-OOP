//DZIEDZICZENIE WIELOPOZIOMOWE---------------------
//classa BAZOWA

class Animal {
    constructor(protected name: string) { }

    giveVoice() {
        console.log(`Nazywam sie ${this.name}`)
    }
}

//classa POCHODNA, która dziedziczy z Bazowej

class Pies extends Animal {
    constructor(protected name: string) {
        super(name)
    }

    giveVoice() {
        console.log('Szczek szczek!')
        super.giveVoice();
    }

    eat() {
        console.log('mniam mniam')
    }
}
console.log(new Pies("burek").giveVoice())

class Sznaucer extends Pies {
    constructor(protected name: string, private _color: string) {
        super(name);
        this._color = _color;
    }

    superMoc() {
        console.log('leze w kuchni')
    }

    get Kolorek() {
        return this._color;
    }
}

//Powyzej mamy dziedziczenie wielopoziomowe, czyli class bazowa to Animal=>Pies=>Sznaucer czyli wiecej niz 2 poziomy


//Chcemy stworzyć tablicę przechowującą różne pochodne Animal(Dog,Cow,Cat..). Jak poprawnie zadeklarować typ takiej tablicy ? Możemy użyć tzw.union type:

const arrZeZwierzetami: Array<Pies | Sznaucer | Animal> = [];

/*Jednak to tutaj niepotrzebne, trudne w utrzymaniu, gdyż przy tworzeniu nowej klasy pochodnej musielibyśmy ją dopisać.Możemy jednak zadeklarować taką tablicę po prostu, jako przechowującą obiekty typu Animal(classy bazowej), gdyż wszystkie nasze zwierzęta po tej klasie dziedziczą:*/

const arr: Array<Animal> = [];

const bona = new Sznaucer('Bona', 'Black')
const pieseł = new Pies("burek")
const zwierzak = new Animal('łoś')
//TO sa pochodne jedna od drugiej,tez sie da ale bardziej myslalem tu o ogolnych gatunkach pochodnych od animal(pies,ryba,kot...).uzylem te bo byly pod reka

const mojaListaZwierzakow = [bona, pieseł, zwierzak]
mojaListaZwierzakow.forEach(el => el.giveVoice())

/*Musimy być jednak świadomi, że w ten sposób ograniczamy sobie niejako możliwości wywoływania metod na obiektach z tej tablicy wyłącznie do metod zadeklarowanych w klasie Animal.Przykładowo nie mamy dostępu do metody eat dodanej w klasie Dog:*/

//Interface - jego glowna zaleta jest to,ze mozna go implementowac w classach.

interface Serializable { //typ, wg ktorego obiekt/classa zawiera we wlasciwosciach funkc. toJson():stirng;
    toJson(): string;
}

function naszaFunkcja(obiekt: Serializable) {
    obiekt.toJson();
}

class User implements Serializable {
    toJson(): string {
        return '{5}'
    }
}
const user1 = new User();
console.log(user1)
console.log(naszaFunkcja(user1))

// Implementacja wielu interfejsów

/*Warto zwrócić jeszcze uwagę na to, że klasa może implementować kilka interfejsów w tym samym czasie – w odróżnieniu od dziedziczenia; dziedziczyć można tylko po jednej klasie na raz.Kolejne implementowane interfejsy wystarczy napisać po przecinku:*/

interface Drawable {
    draw(color:string): void;
}

class User9 implements Serializable, Drawable { //nie wiem czemu tu wyskakuje blad. kopiowalem to z typeOfweb
    toJSON() {
        return '{}';
    }

    draw(color: string) {
        console.log(color);
    }
}
/*Poza metodami i polami, w interfejsach możliwe jest również zadeklarowanie konstruktorów, index signatures i wywołań(callable interface).*/

// Klasy ABSTRAKCYJNE
/*to klasy bazowe, po których można dziedziczyć, ale nie można ich instancjonować.
Czym się więc różnią od interfejsów? Przede wszystkim klasy abstrakcyjne nie tylko zawierają deklaracje pól i metod, ale mogą też zawierać ich implementacje. Mogą, ale nie muszą. Idealnym kandydatem na klasę abstrakcyjną jest w takim razie wspomniana wcześniej klasa Animal, gdyż jej raczej nie chcemy instancjonować bezpośrednio. Dodajmy też do niej deklarację metody eat, ale bez implementacji (tzw. metodę abstrakcyjną). W ten sposób każda klasa pochodna będzie musiała zaimplementować eat:*/

abstract class Animalll {  
    constructor(protected name:string) {}

    giveVoice() {
        console.log(`Nazywam się ${this.name}!`);
    }

    abstract eat():void;
}

const animal = new Animalll(''); // blad! Nie mozna tworzyc instancji abstrakcyjnej

//  Intersection type
/*Intersection type jest blisko związany z union type, ale pozwala na opisanie typu, który ma cechy kilku typów na raz. Najczęściej wykorzystywany jest z interfejsami. Korzystając z interfejsów z poprzedniej części, wyobraźmy sobie, że chcemy stworzyć funkcję, która oczekuje obiektu będącego na raz Serializable i Drawable:*/

function mojaFunkcja(obiekt:Serializable & Drawable) {  
    // obiekt na pewno ma metody toJSON i draw ktore sa z typowanych interfacow!
}


// Aliasy FUNKCJI - poza zwyklymi typami w aliasy mozna pakowac rowniez cale funkcje

interface Userr {
    name: string
}

type UserCallback = (user:Userr) => boolean;//alias funkcji,w arg podajemy usera typu Userr(tzn z name w stringu)

function fetchUser(callback:UserCallback) {  }  //deklaruje funkcje(dlaczego :UserCallback typuje w parametrze)

// kod użytkownika
function fetchUserCallback(user:Userr) {  
    if (user.name === 'Michal') {
        return true;
    }
    return false;
}

const result= fetchUserCallback({ name: 'Michal' })
console.log(result)

//String Literal Type
//Gdy jest potrzeba zadeklarowania tego, że funkcja jako argument może przyjąć nie tyle typ, co konkretne wartości.

type GroupBy = 'second' | 'minute' | 'hour' | 'day';

// function groupRecords(groupBy: GroupBy) {
//     …
// }
// Dzięki temu kompilator sam sprawdzi (w miarę możliwości!), czy podana wartość jest prawidłowa. String literal type świetnie sprawdzi się też jako flaga wspomniana w poprzednim akapicie.

//Inferencja typów
//Wnioskowanie TS, jaki typ ma dany element(zmienna parametr,zwracana itd)
function fn(b: boolean) {
    if (b === true) {
        return 1;
    } else {
        return 2;
    }
}
//Ta funkcja zwraca liczbę i jest to ewidentne. TypeScript również jest tego pewien i dlatego nie musimy tutaj podawać zwracanego typu. TypeScript inferuje, że jest to number:
const liczba: number = fn(true); // dziala!

//Możemy pójść nawet o krok dalej.Skoro fakt, że fn zwraca liczbę jest oczywisty, to czy w ogóle konieczne jest deklarowanie liczba: number ? Nie!

// const liczba = fn(true); // dziala!
// Ponownie TypeScript inferuje, że zmienna liczba jest typu number.Ten kod oraz poprzedni są sobie całkowicie równoważne.
// W sytuacjach, które są dwuznaczne TypeScript wyświetli błąd i zmusi do zadeklarowania odpowiedniego typu:

function fn2(b: boolean): string | number {
    if (b === true) {
        return 1;
    } else {
        return 'lol';
    }
}
//Bez deklaracji string | number otrzymalibyśmy błąd:No best common type exists among return expressions.
//Inferencja typów działa również gdy od razu przypisujemy do zmiennej lub stałej wartości:
const tab1 = [0, 1, 'lel']; // Array<number|string>  
const tab2 = [0, null]; // Array<number>  
const tab3 = [new Pies('leszek'), new Cow('rafal')]; // Array<Pies|Cow>  
//powyzsze z tab3 sa instancja Animal,  ale typ wyjdzie tu Array<Pies|Cow>. Zeby bylo animal; musialbym otypowac zmienna const tab3: Animal= [new..]
