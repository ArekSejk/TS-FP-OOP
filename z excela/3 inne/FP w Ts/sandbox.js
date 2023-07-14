//UZYCIE TypeScript w Funkcjach wyzszego rzedu--------------------------------------------
// The higher-order-function takes an array and a function as arguments
function mapForEach(arr, fn) {
    var newArray = []; //array z numerami
    arr.forEach(function (item) {
        newArray.push(fn(item));
    });
    return newArray;
}
var tablica = ["Orange", "Apple", "Banana", "Grape"];
var dajNumer = function (nazwa) { return nazwa.length; };
var test = mapForEach(tablica, dajNumer); //albo bez f.w zmiennej ale pisanejod razu z partyzanta
var testZfunkcjaOdreczna = mapForEach(tablica, function (element) { return element.length; });
// console.log(test)
// console.log(testZfunkcjaOdreczna) // dziala tak samo
// Ale moglibysmy zrobic to samo wbudowana metoda JS, np. map, reduce itd
var tablica2 = ["Orange", "Banana", "Grape"];
var testZMap = tablica2.map(function (element) { return element.length; });
// console.log(testZMap)
// UZYCIE TS w CLOSURES(domknieciach)------------------------------------------------------
//Funkcja wyzszego rzedu, ktora zawiera tez domkniecia(czyli mozliwosc wywolania danych wew z zew)
function add(x) {
    return function (y) { return x + y; }; // A function is returned here as closure
}
