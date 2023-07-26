/*Cele główne
-Napisz funkcję generateArrayWithRandomNumbers, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max.]
-Napisz funkcje generateArrayWithArrays, która wygeneruje array z arrayami pochodzącymi z poprzedniej funkcji

function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {}
// [1,5,4,5,7,9,1,10,5,4]
function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {}
// 10 arrayów z 10 liczbami z zakresu od 1 do 10*/
//--------------------------------------------------------------------



type GenerateArrayWithRandomNumbers = (howManyNumbers: number, min: number, max: number) => number[];


const generateArrayWithRandomNumbers: GenerateArrayWithRandomNumbers = function (howManyNumbers: number = 10, min: number = 1, max: number = 10): number[] {

    const arr: number[] = [];

    for (let i = 1; i <= howManyNumbers; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return arr;
}




type GenerateArrayOfArrays = (howManyArrays?: number, howManyNumbers?: number, min?: number, max?: number) => number[][];


const generateArrayOfArrays: GenerateArrayOfArrays = function (howManyArrays: number = 10, howManyNumbers: number = 10, min: number = 1, max: number = 10): number[][] {

    const arrOfArr: number[][] = [];

    for (let k = 1; k <= howManyArrays; k++) arrOfArr.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));

    return arrOfArr;
}


const result = generateArrayOfArrays();
console.log(result)
