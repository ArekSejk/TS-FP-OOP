/*Cele główne
-Napisz funkcję generateArrayWithRandomNumbers, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max.]
-Napisz funkcje generateArrayWithArrays, która wygeneruje array z arrayami pochodzącymi z poprzedniej funkcji

function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {}
// [1,5,4,5,7,9,1,10,5,4]
function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {}
// 10 arrayów z 10 liczbami z zakresu od 1 do 10*/







function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {

    const arr = [];

    for (i = 1; i <= howManyNumbers; i++) arr.push(Math.floor(Math.random() * (max - min + 1) + min))

    return arr;
}



function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {

    const arrOfArr = [];

    for (k = 1; k <= howManyArrays; k++) arrOfArr.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
    //powyzej zapisane param. funkcji callback sa bez min i max. to jedynie w naglowku funkcji

    return arrOfArr;
}
const result = generateArrayOfArrays();
console.log(result)


