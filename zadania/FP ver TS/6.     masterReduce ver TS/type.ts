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
//--------------------------------------------------------------------



// // MAP
//Zwraca nową tabele ze zmodyfikowanymi elementami  map(callback(el, index, arr), thisArg)

function doLikeMap<T, U>(arr: T[], callbackFn: (currVal: T, i: number, arr: T[]) => U): U[] {

    return arr.reduce((acc: U[], currVal, i, arr) => {
        acc.push(callbackFn(currVal, i, arr));
        return acc;
    }
        , [])
}


// function square(el) {
//     return el.toUpperCase();
// }

//Pytanie: Czy moge nie typowac 2 i 3 param. w reduce jak teraz czy przepisywac?




// // FILTER
//Zwraca nową tablicę z elementami, które spełniają warunek

function doLikeFilter<T>(arr: T[], callbackFn: (currVal: T, i: number, arr: T[]) => boolean): T[] {

    return arr.reduce((acc: T[], currVal, i, arr) => {

        if (callbackFn(currVal, i, arr)) acc.push(currVal);
        return acc;
    },
        [])
}


// function marek(el) {
//     return el[0] === el[0].toUpperCase();
// }




// // EVERY
// Zwraca boolean dla dopasowania wszystkich elementow tablicy      arr.every(callbacFn(element,index,arr))


function doLikeEvery<T>(arr: T[], callbackFn: (currVal: T, i: number, arr: T[]) => boolean): boolean {

    return arr.reduce((acc, currVal, i, arr) => {

        if (!callbackFn(currVal, i, arr)) return acc = false;
        return acc;

    }, true);
}


// function czyWszystkieParzyste(el: number) {
//     return el % 2 == 0;
// }

//Pytanie: czy jest potrzeba typowania acc jesli wart.poczatkowa dalismy true i sam wywnioskowal?




// // SOME
// Zwraca true gdy choć 1 elem arr spelnia.         array.some(callbackFn(element,index,arr))

function doLikeSome<T>(arr: T[], callbackFn: (currVal: T, i: number, arr: T[]) => boolean): boolean {

    return arr.reduce((acc, currVal, i, arr) => {

        if (callbackFn(currVal, i, arr)) return acc = true;

        return acc;

    }, false)
}


// function one(el:number) {
//     return el % 2 == 0;
// }
