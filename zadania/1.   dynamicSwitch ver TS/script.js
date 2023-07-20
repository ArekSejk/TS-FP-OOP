/* Cele główne
 1. Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji
 2. Klasa ma mieć metode .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jeśli warunek zostanie spełniony(wykona go w isValid)
 3. Klasa ma mieć metodę.isValid która iteruje po wszystkich cases sprawdzając każdy dodany wcześniej warunek.  Metoda.isValid zwraca true jeśli wszystkie warunki będą na false.Jeżeli jakikolwiek warunek zostanie spełniony, funkcja przerywa swoje działanie, wywołując przekazany callback dla tego warunku.Po każdym wykonaniu metody warunki i callbacki są czyszczone.
 4. Klasa ma mieć metodę.isEmpty która sprawdza czy tablice cases i conditions są puste.Jeśli tak zwraca true
Np.
class Switch {
  cases = [];
  conditions = [];

  add(condition, callback) {}
  isValid() {
    // return this.conditions
  }
}

// ma to działać tak:
const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 5, () => {
  console.error("value is too short");
});

formChecker.add(!value.includes("@"), () => {
  console.error("value is not an email");
});

// formChecker.isEmpty() === false
formChecker.isValid(); // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.isEmpty() === true */
var Switch2 = /** @class */ (function () {
    function Switch2() {
        var _this = this;
        this.cases = [];
        this.conditions = [];
        this.add = function (condit, fn) {
            _this.cases.push({ condition: condit, callbackFn: fn });
            _this.conditions.push(condit);
        };
    }
    Switch2.prototype.isEmpty = function () {
        if (this.cases.length === 0 && this.conditions.length === 0)
            return true;
        return false;
    };
    Switch2.prototype.isValid = function () {
        if (this.conditions.every((function (el) { return !el; }))) { //spr czy all war sa niespelnione
            this.cases.length = 0;
            this.conditions.length = 0;
            console.log('isValid', true); //pogladowe.(do usuniecia)
            return true;
        }
        var indexOfTrueCase = this.cases.findIndex(function (el) { return el.condition === true; });
        if (indexOfTrueCase !== -1)
            this.cases[indexOfTrueCase].callbackFn();
        this.cases.length = 0;
        this.conditions.length = 0;
        return false;
    };
    return Switch2;
}());
var test1 = new Switch2();
var value2 = "test";
test1.add(value2.length < 3, function () {
    console.log('Warunek 1 jest spelniony wiec isValid= false'); // false
});
test1.add((typeof (value2) !== "string"), function () {
    console.log('Warunek 2 jest spelniony wiec isValid= false'); // false
});
test1.add((typeof (value2) !== "string"), function () {
    console.log('Warunek 3 jest spelniony wiec isValid= false'); // true
});
test1.add((typeof (value2) !== "string"), function () {
    console.log('Warunek 4 jest spelniony wiec isValid= false'); // false
});
console.log('cases Przed:', test1.cases);
console.log("condi Przed:", test1.conditions);
console.log('is Empty Przed', test1.isEmpty());
test1.isValid();
console.log('cases PO:', test1.cases);
console.log("condi PO:", test1.conditions);
console.log('is Empty PO', test1.isEmpty());
