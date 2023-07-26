/*Cele główne
Za pomocą metody.reduce wbudowanej w array odtwórz działanie innych metod tablicowych:
-Stwórz mapFn() – działa tak samo jak tablicowa metoda.map
-Stwórz filterFn() – działa tak samo jak metoda tablicy.filter
-Stwórz everyFn() – działa tak samo jak metoda tablicy.every
-Stwórz someFn() - działa tak samo jak metoda tablicy.some

function mapFn(array, callback) {}
function filterFn(array, callback) {}
function everyFn(array, callback) {}
function someFn(array, callback) {}*/
// type DoLikeMap = <T>(array: T[], callbackFunction: CallbackLikeMap) => T[];
// function doLikeMap<T>(arr: T[], callbackFn: (curr: T, i: number, arr: T[]) => T): T[] { DZIALA
function doLikeMap(arr, callbackFn) {
    return arr.reduce(function (acc, currVal, i, arr) {
        acc.push(callbackFn(currVal, i, arr));
        return acc;
    }, []);
}
function square(el, i, arr) {
    return el.toUpperCase();
}
console.log(doLikeMap(['a', 'b', 'c'], square));
// // FILTER
//Zwraca nową tablicę z elementami, które spełniają warunek
function doLikeFilter(arr, callbackFn) {
    return arr.reduce(function (acc, currVal, i, arr) {
        if (callbackFn(currVal, i, arr))
            acc.push(currVal);
        return acc;
    }, []);
}
// const tab = [0, 1, 5, 10, 22]
// const tab2 = ['marek', 'Jola', 'ala', 'Roman']
// const filtrowanie = tab.filter((el) => el % 2 === 0)
// console.log('.filter',filtrowanie)
// function janusz(el) {
//     return el % 2 === 0;
// }
// function marek(el) {
//     return el[0] == el[0].toUpperCase();
// }
// console.log('mojaFn', doLikeFilter(tab, janusz))
// console.log(doLikeFilter(tab2, marek))
// // EVERY
// Zwraca boolean dla dopasowania wszystkich elementow tablicy
//arr.every(callbacFn(element,index,arr))
function doLikeEvery(arr, callbackFn) {
    return arr.reduce(function (acc, currVal, i, arr) {
        if (!callbackFn(currVal, i, arr))
            return acc = false;
        return acc;
    }, true);
}
// tab = [1, 2, 4, 6]
// tab2 = [2, 4, 6, 8]
//console.log(tab2.every(el=> el%2 ==0))
// function czyParzyste(el) {
//     return el % 2 == 0;
// }
// console.log(doLikeEvery(tab, czyParzyste))
// // SOME
// Zwraca boolean dla dopasowania choć jednego elementu z tablicy
// array.some(callbackFn(element,index,arr))
function doLikeSome(arr, callbackFn) {
    return arr.reduce(function (acc, currVal, i, arr) {
        if (callbackFn(currVal, i, arr))
            return acc = true;
        return acc;
    }, false);
}
// tab = [1, 3, 4, 7]
// tab2 = [1, 3, 5, 1]
//console.log(tab2.some((el => el % 2 == 0)))
// function one(el) {
//     return el % 2 == 0;
// }
// console.log(doLikeSome(tab, one))
