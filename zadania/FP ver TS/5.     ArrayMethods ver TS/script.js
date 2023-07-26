/*Cele główne
-Napisz funkcje, w których wykorzystasz pętle for lub while w celu odwzorowania podanych niżej metod tablicowych:
    .forEach
    .map
    .entries
    .filter
    .reduce
    .every
    .some
    
const forEachFn = (array, callback) => {};

const mapFn = (array, callback) => {};

const entriesFn = (array) => {};

const filterFn = (array, callback) => {};

const reduceFn = (array, callback, inital) => {};

const everyFn = (array, callback) => {};

const someFn = (array, callback) => {};*/

//---------------------------------------------------------

// FOR EACH
//Nic nie zwraca(tylko undefined) dlatego nie dalismy w niej return, callback 3 parametry: element, jego index, array.

const dolikeForEach = (array, callbackFn) => {

    for (let i = 0; i < array.length; i++) {
        (callbackFn(array[i], i, array)); //element =array[i], index =i, array =aray
    }
};

function makeBigLetters(element) {
    console.log(element.toUpperCase())
}

let tab = ['a', 'b', 'c']

dolikeForEach(tab, makeBigLetters)


//---------------------------------------------------------

// MAP
//array.map(function (currentValue, index, arr), thisValue)
//map()tworzy nową tablicę z wywołania funkcji dla każdego elementu tablicy. Fn callback ma 3 parametry(elemenet, index, array)

const doLikeMap = (array, callbackFn) => {
    newArr = [];

    for (let i = 0; i < array.length; i++) newArr.push(callbackFn(array[i], i, array))

    return newArr;
}

// function square(element) {
//     return element * 2;
// }

//---------------------------------------------------------

// FILTER
//zwraca nowa tabele tylko z el.spelniajacymi warunek.
//array.filter(function (currentValue, index, arr), thisValue)

const doLikeFilter = (array, callbackFn) => {
    newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i], i, array)) newArr.push(array[i]);
    }
    return newArr;
}

// function even(element) {
//     return (element % 2 === 0);
// }

//---------------------------------------------------------

// EVERY
//zwraca false, jesli choc 1 nie pasuje. Inaczej daje true.
//array.every(function(currentValue, index, arr), thisValue)

const doLikeEvery = (array, callbackFn) => {

    for (let i = 0; i < array.length; i++) 
        if (!callbackFn(array[i], i, array)) return false;

    return true;
}

// function isEven(element) {
//     return (element % 2 === 0);
// }

//---------------------------------------------------------

// SOME
//Zwraca true, jesli chodz jeden el spelnia warunek.False jesli zaden
//array.some(function(value, index, arr), this)

function doLikeSome(array, callbackFn) {

    for (let i = 0; i < array.length; i++) if (callbackFn(array[i], i, array)) return true;

    return false;
}

// function isEven(element) {
//     return (element % 2 === 0);
// }

//---------------------------------------------------------

// ENTRIES
//zwraca tablice wyliczalnych par key-value
//array.entries()  brak parametrow
const tab5 = [1, 3, 4, 33, 2, 981];

function doLikeEntries(array) {
    result = [];

    for (i = 0; i < array.length; i++) {
        const key = i;
        const value = array[i];
        result.push([key, value]);
    }
    return result;
}

// const makeEntriesFn = tab5.entries();
// console.log([...makeEntriesFn])
// console.log(doLikeEntries(tab5))

//---------------------------------------------------------

// REDUCE
//Zwraca pojedyncza wartosc- skumulowany resultat.
//array.reduce(function (total, currentValue, currentIndex, arr), initialValue)

const doLikeReduce2 = (array, callbackFn, initial) => {
    let acc = initial ? initial : array[0];

    for (let i = ((initial) ? 0 : 1); i < array.length; i++) {
        acc = callbackFn(acc, array[i], i, array);
    }
    return acc;
}


// function giveNumber2(a, b) {
//     return a + b;
// }

// const tab98 = [1, 2, 3];
// console.log(doLikeReduce2(tab98, giveNumber2, 10));

