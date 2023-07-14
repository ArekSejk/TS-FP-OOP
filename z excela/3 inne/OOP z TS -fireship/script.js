//TS w classach (access modifiers, getter)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Emoji = /** @class */ (function () {
    // icon: string;  //nie musze tego gdy dam do arg.constr.(koniecznie +access modifiers) 
    function Emoji(icon) {
        this.icon = icon;
    } //bez this.icon = icon; bo parametr ma acc.mod
    return Emoji;
}());
var emo1 = new Emoji("usmiech");
console.log(emo1.icon); //usmiech
//ale takie oznaczanie public jest niebezpieczne(nie pure) bo mozna zmodyfikowac icone z zew.
emo1.icon = "smuteczek";
console.log(emo1.icon); //smuteczek
//dlatego ta sama klasa ale prywatna, z geterem aby moc pobrac nadal ikone, ale juz nie zmienic
var Emoji2 = /** @class */ (function () {
    function Emoji2(_icon) {
        this._icon = _icon;
    } //priv nie moge wywolac/zmien z zew.Dlatego dam gettera
    Object.defineProperty(Emoji2.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emoji2.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        enumerable: false,
        configurable: true
    });
    Emoji2.prototype.change = function (value) {
        this._prev = this.icon; //obecna ikona wsadzana jest do schowa poprzedniej
        this._icon = value; //a na jej miejsce deklarujemy jakas podana wart. jako arg. w wywolaniu funkcji.
    };
    return Emoji2;
}());
var emo2 = new Emoji2("wc");
console.log(emo2.icon); //wc
//emo2.icon = "piwko";//blad, bo nie mozna zmienic
emo2.change("dupa"); //powinno wstawic w icone "dupe", a wc z ikony przestawic na prev
console.log(".", emo2.icon); //dupa
console.log(".", emo2.prev); //wc
//metody statyczne w classach a TypeScript
var Przykladowa = /** @class */ (function () {
    function Przykladowa() {
    }
    Przykladowa.dodajJeden = function (value) {
        return 1 + value;
    };
    return Przykladowa;
}());
console.log(Przykladowa.dodajJeden(5));
// dziedziczenie vs kompozycja
// A)Dziedziczenie
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.sayHi = function () {
        return "Hello, ".concat(this.name);
    };
    return Human;
}());
var czlowiek1 = new Human("Bob");
console.log(czlowiek1.name);
console.log(czlowiek1.sayHi());
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman(name) {
        var _this = _super.call(this, name) || this;
        _this.heroName = "HERO ".concat(name);
        return _this;
    }
    SuperHuman.prototype.superMoce = function () {
        return "".concat(this.heroName, " rzuca kulami ognia!");
    };
    return SuperHuman;
}(Human));
var ironman = new SuperHuman("Rick");
console.log(ironman.superMoce());
//B)Kompozycja
//Np laczac ze soba obiekty, ktore oddzielaja poszczegolne wlasciwosci/metody od funkcji, ktore zwracaja obiekty
var hasName = function (name) {
    return { name: name };
};
var canSayHi = function (name) {
    return {
        sayHi: function () { return "Hello ".concat(name); }
    };
};
var Person = function (name) {
    return __assign(__assign({}, hasName(name)), canSayHi(name));
};
var osoba1 = Person("Jan");
console.log(osoba1.sayHi()); // Hello Jan
//Ten wzorzec dzial, ale tracimy cala ergonomie programowania obiektowego
// C) Opcja z TypeScript  - ze wzgledu na powyzsze zdanie, w typescript istnieje mozliwosc kolejna
