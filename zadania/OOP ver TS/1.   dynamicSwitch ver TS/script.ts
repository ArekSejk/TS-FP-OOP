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

///////////////////////////////////////////////////////////////////////////////


interface ISwitch {
    cases: Array<{ condition: boolean, callbackFn: () => void }>;
    conditions: boolean[];
    add: (condit: boolean, fn: () => void) => void;
    isEmpty: () => boolean;
    isValid: () => boolean;
}

class Switch2 implements ISwitch {
    cases: Array<{ condition: boolean, callbackFn: () => void }> = [];
    conditions: boolean[] = [];

    constructor() { }

    add = (condit: boolean, fn: () => void) => {

        this.cases.push({ condition: condit, callbackFn: fn });

        this.conditions.push(condit);
    }

    isEmpty(): boolean {
        if (this.cases.length === 0 && this.conditions.length === 0) return true;
        return false;
    }

    isValid(): boolean {
        if (this.conditions.every((el => !el))) {//spr czy all war sa niespelnione
            this.cases.length = 0;
            this.conditions.length = 0;
            console.log('isValid', true)           //pogladowe.(do usuniecia)
            return true;
        }

        const indexOfTrueCase = this.cases.findIndex(el => el.condition === true);
        if (indexOfTrueCase !== -1) this.cases[indexOfTrueCase].callbackFn();

        this.cases.length = 0;
        this.conditions.length = 0;
        return false;
    }
}

const test1 = new Switch2();
const value2 = "test";

test1.add(value2.length < 3, () => {
    console.log('Warunek 1 jest spelniony wiec isValid= false');   // false
})

test1.add((typeof (value2) !== "string"), () => {
    console.log('Warunek 2 jest spelniony wiec isValid= false');       // false
})

test1.add((typeof (value2) !== "string"), () => {
    console.log('Warunek 3 jest spelniony wiec isValid= false');     // true
})

test1.add((typeof (value2) !== "string"), () => {
    console.log('Warunek 4 jest spelniony wiec isValid= false');       // false
})

console.log('cases Przed:', test1.cases)
console.log("condi Przed:", test1.conditions)
console.log('is Empty Przed', test1.isEmpty())

test1.isValid();
console.log('cases PO:', test1.cases)
console.log("condi PO:", test1.conditions)
console.log('is Empty PO', test1.isEmpty())
