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
//Nic nie zwraca(tylko undefined) dlatego bez return, callback 3 parametry: element, jego index, array.
function dolikeForEach(array, callbackFn) {
    for (var i = 0; i < array.length; i++) {
        (callbackFn(array[i], i, array));
    }
}
;
// function makeBigLetters(element:string) {
//     console.log(element.toUpperCase())
// }
//---------------------------------------------------------
// MAP
//tworzy nowy Arr ze zmodyf. kazdym eleme. podanej tabl.    array.map(function (currentValue, index, arr), thisValue)
function doLikeMap(array, callbackFn) {
    var newArr = [];
    for (var i = 0; i < array.length; i++)
        newArr.push(callbackFn(array[i], i, array));
    return newArr;
}
// function square(element: number) {
//     return element * 2;
// }
/* Pytania:
1. Co w przypadku, gdy podamy arr z numberami, a w mapie te numery robimy w stringi i w tablicy je zwracamy? Konflikt
*/
//---------------------------------------------------------
// FILTER
//zwraca nowy Arr z el.spelniajacymi warunek.       array.filter(function (currentValue, index, arr), thisValue)
// type CallbackFilter = <U>(element: U, i: number, arr: U[]) => boolean;
function doLikeFilter(arr, callbackFn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i], i, arr))
            newArr.push(arr[i]);
    }
    return newArr;
}
// function even(element: number) {
//     return (element % 2 === 0);
// }
// Pytanie: zrob podmiane callbacka na alias!
//---------------------------------------------------------
// EVERY
//zwraca false,gdy choc 1 nie pasi. Inaczej da true.     array.every(function(currentValue, index, arr), thisValue)
function doLikeEvery(array, callbackFn) {
    for (var i = 0; i < array.length; i++)
        if (!callbackFn(array[i], i, array))
            return false;
    return true;
}
// function isEven(element: number) {
//     return (element % 2 === 0);
// }
//---------------------------------------------------------
// SOME
//Zwraca true, jesli min.1 el spelnia warunek.False jesli zaden.  array.some(function(value, index, arr), this)
function doLikeSome(array, callbackFn) {
    for (var i = 0; i < array.length; i++)
        if (callbackFn(array[i], i, array))
            return true;
    return false;
}
// function isEven(element: number) {
//     return (element % 2 === 0);
// }
//---------------------------------------------------------
// ENTRIES
//zwraca tablice wyliczalnych par key-value.        array.entries()  brak parametrow
function doLikeEntries(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var key = i;
        var value = array[i];
        result.push([key, value]);
    }
    return result;
}
//---------------------------------------------------------
// REDUCE
//Zwraca pojedyncza skumulowana wartosc. array.reduce(function (total, currentValue, currentIndex, arr), initialValue)
function doLikeReduce(arr, callbackFn, initial) {
    var acc = initial ? initial : arr[0];
    for (var i = ((initial) ? 0 : 1); i < arr.length; i++) {
        acc = callbackFn(acc, arr[i], i, arr);
    }
    return acc;
}
// function giveNumber(a: number, b: number):number {
//     return a + b;
// }
