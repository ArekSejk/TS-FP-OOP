/*Cele główne
-Napisz funkcję generateArrayWithRandomNumbers, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max.]
-Napisz funkcje generateArrayWithArrays, która wygeneruje array z arrayami pochodzącymi z poprzedniej funkcji

function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {}
// [1,5,4,5,7,9,1,10,5,4]
function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {}
// 10 arrayów z 10 liczbami z zakresu od 1 do 10*/
function generateArrayWithRandomNumbers(howManyNumbers, min, max) {
    if (howManyNumbers === void 0) { howManyNumbers = 10; }
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 10; }
    var arr = [];
    for (var i = 1; i <= howManyNumbers; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr;
}
function generateArrayOfArrays(howManyArrays, howManyNumbers, min, max) {
    if (howManyArrays === void 0) { howManyArrays = 10; }
    if (howManyNumbers === void 0) { howManyNumbers = 10; }
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 10; }
    var arrOfArr = [];
    for (var k = 1; k <= howManyArrays; k++)
        arrOfArr.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
    //powyzej zapisane param. funkcji callback sa bez min i max. to jedynie w naglowku funkcji
    return arrOfArr;
}
var result = generateArrayOfArrays();
console.log(result);
