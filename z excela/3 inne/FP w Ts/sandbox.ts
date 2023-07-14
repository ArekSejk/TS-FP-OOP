//UZYCIE TypeScript w Funkcjach wyzszego rzedu--------------------------------------------

type mapFn = (elementem: string) => number;

// The higher-order-function takes an array and a function as arguments

function mapForEach(arr: string[], fn: mapFn): number[] {// param są: arr ze stringami, i funkcja

    const newArray: number[] = []; //array z numerami

    arr.forEach(item => {//kazdy item z arr z parametru odpal na podanej funkcji i push do newArray
        newArray.push(fn(item));
    });
    return newArray;
}

const tablica = ["Orange", "Apple", "Banana", "Grape"];
const dajNumer = (nazwa: string): number => nazwa.length;

const test = mapForEach(tablica, dajNumer) //albo bez f.w zmiennej ale pisanejod razu z partyzanta
const testZfunkcjaOdreczna = mapForEach(tablica, (element: string): number => element.length)

// console.log(test)
// console.log(testZfunkcjaOdreczna) // dziala tak samo

// Ale moglibysmy zrobic to samo wbudowana metoda JS, np. map, reduce itd
const tablica2 = ["Orange", "Banana", "Grape"];
const testZMap = tablica2.map(element => element.length);
// console.log(testZMap)


// UZYCIE TS w CLOSURES(domknieciach)------------------------------------------------------
//Funkcja wyzszego rzedu, ktora zawiera tez domkniecia(czyli mozliwosc wywolania danych wew z zew)

function add(x: number): (y: number) => number {
    return (y: number): number => x + y; // A function is returned here as closure
}
