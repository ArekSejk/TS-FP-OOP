//DZIEDZICZENIE WIELOPOZIOMOWE---------------------
//classa BAZOWA
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.giveVoice = function () {
        console.log("Nazywam sie ".concat(this.name));
    };
    return Animal;
}());
//classa POCHODNA, która dziedziczy z Bazowej
var Pies = /** @class */ (function (_super) {
    __extends(Pies, _super);
    function Pies(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Pies.prototype.giveVoice = function () {
        console.log('Szczek szczek!');
        _super.prototype.giveVoice.call(this);
    };
    Pies.prototype.eat = function () {
        console.log('mniam mniam');
    };
    return Pies;
}(Animal));
console.log(new Pies("burek").giveVoice());
var Sznaucer = /** @class */ (function (_super) {
    __extends(Sznaucer, _super);
    function Sznaucer(name, _color) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this._color = _color;
        _this._color = _color;
        return _this;
    }
    Sznaucer.prototype.superMoc = function () {
        console.log('leze w kuchni');
    };
    Object.defineProperty(Sznaucer.prototype, "Kolorek", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    return Sznaucer;
}(Pies));
//Powyzej mamy dziedziczenie wielopoziomowe, czyli class bazowa to Animal=>Pies=>Sznaucer czyli wiecej niz 2 poziomy
//Chcemy stworzyć tablicę przechowującą różne pochodne Animal(Dog,Cow,Cat..). Jak poprawnie zadeklarować typ takiej tablicy ? Możemy użyć tzw.union type:
var arrZeZwierzetami = [];
/*Jednak to tutaj niepotrzebne, trudne w utrzymaniu, gdyż przy tworzeniu nowej klasy pochodnej musielibyśmy ją dopisać.Możemy jednak zadeklarować taką tablicę po prostu, jako przechowującą obiekty typu Animal(classy bazowej), gdyż wszystkie nasze zwierzęta po tej klasie dziedziczą:*/
var arr = [];
var bona = new Sznaucer('Bona', 'Black');
var pieseł = new Pies("burek");
var zwierzak = new Animal('łoś');
//TO sa pochodne jedna od drugiej,tez sie da ale bardziej myslalem tu o ogolnych gatunkach pochodnych od animal(pies,ryba,kot...).uzylem te bo byly pod reka
var mojaListaZwierzakow = [bona, pieseł, zwierzak];
mojaListaZwierzakow.forEach(function (el) { return el.giveVoice(); });
function naszaFunkcja(obiekt) {
    obiekt.toJson();
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.toJson = function () {
        return '{5}';
    };
    return User;
}());
var user1 = new User();
console.log(user1);
console.log(naszaFunkcja(user1));
var User9 = /** @class */ (function () {
    function User9() {
    }
    User9.prototype.toJSON = function () {
        return '{}';
    };
    User9.prototype.draw = function (color) {
        console.log(color);
    };
    return User9;
}());
/*Poza metodami i polami, w interfejsach możliwe jest również zadeklarowanie konstruktorów, index signatures i wywołań(callable interface).*/
// Klasy ABSTRAKCYJNE
/*to klasy bazowe, po których można dziedziczyć, ale nie można ich instancjonować.
Czym się więc różnią od interfejsów? Przede wszystkim klasy abstrakcyjne nie tylko zawierają deklaracje pól i metod, ale mogą też zawierać ich implementacje. Mogą, ale nie muszą. Idealnym kandydatem na klasę abstrakcyjną jest w takim razie wspomniana wcześniej klasa Animal, gdyż jej raczej nie chcemy instancjonować bezpośrednio. Dodajmy też do niej deklarację metody eat, ale bez implementacji (tzw. metodę abstrakcyjną). W ten sposób każda klasa pochodna będzie musiała zaimplementować eat:*/
var Animalll = /** @class */ (function () {
    function Animalll(name) {
        this.name = name;
    }
    Animalll.prototype.giveVoice = function () {
        console.log("Nazywam si\u0119 ".concat(this.name, "!"));
    };
    return Animalll;
}());
var animal = new Animalll(''); // blad! Nie mozna tworzyc instancji abstrakcyjnej
//  Intersection type
/*Intersection type jest blisko związany z union type, ale pozwala na opisanie typu, który ma cechy kilku typów na raz. Najczęściej wykorzystywany jest z interfejsami. Korzystając z interfejsów z poprzedniej części, wyobraźmy sobie, że chcemy stworzyć funkcję, która oczekuje obiektu będącego na raz Serializable i Drawable:*/
function mojaFunkcja(obiekt) {
    // obiekt na pewno ma metody toJSON i draw ktore sa z typowanych interfacow!
}
function fetchUser(callback) { } //deklaruje funkcje(dlaczego :UserCallback typuje w parametrze)
// kod użytkownika
function fetchUserCallback(user) {
    if (user.name === 'Michal') {
        return true;
    }
    return false;
}
var result = fetchUserCallback({ name: 'Michal' });
console.log(result);
// function groupRecords(groupBy: GroupBy) {
//     …
// }
// Dzięki temu kompilator sam sprawdzi (w miarę możliwości!), czy podana wartość jest prawidłowa. String literal type świetnie sprawdzi się też jako flaga wspomniana w poprzednim akapicie.
//Inferencja typów
//Wnioskowanie TS, jaki typ ma dany element(zmienna parametr,zwracana itd)
function fn(b) {
    if (b === true) {
        return 1;
    }
    else {
        return 2;
    }
}
//Ta funkcja zwraca liczbę i jest to ewidentne. TypeScript również jest tego pewien i dlatego nie musimy tutaj podawać zwracanego typu. TypeScript inferuje, że jest to number:
var liczba = fn(true); // dziala!
//Możemy pójść nawet o krok dalej.Skoro fakt, że fn zwraca liczbę jest oczywisty, to czy w ogóle konieczne jest deklarowanie liczba: number ? Nie!
// const liczba = fn(true); // dziala!
// Ponownie TypeScript inferuje, że zmienna liczba jest typu number.Ten kod oraz poprzedni są sobie całkowicie równoważne.
// W sytuacjach, które są dwuznaczne TypeScript wyświetli błąd i zmusi do zadeklarowania odpowiedniego typu:
function fn2(b) {
    if (b === true) {
        return 1;
    }
    else {
        return 'lol';
    }
}
//Bez deklaracji string | number otrzymalibyśmy błąd:No best common type exists among return expressions.
//Inferencja typów działa również gdy od razu przypisujemy do zmiennej lub stałej wartości:
var tab1 = [0, 1, 'lel']; // Array<number|string>  
var tab2 = [0, null]; // Array<number>  
var tab3 = [new Pies('leszek'), new Cow('rafal')]; // Array<Pies|Cow>  
//powyzsze z tab3 sa instancja Animal,  ale typ wyjdzie tu Array<Pies|Cow>. Zeby bylo animal; musialbym otypowac zmienna const tab3: Animal= [new..]
