/*Cele główne
-Stwórz tablicę z 15 losowymi, wybranymi przez ciebie wyrazami”(string)
-Stwórz funkcję, która jako pierwszy argument przyjmuje tablicę wyrazów, a jako drugą wartość frazę, którą chcemy znaleźć w tej tablicy
-Jeżeli szukana przez nas fraza istnieje w tablicy to funkcja ma zwrócić jej wartość, a także indeks(pozycję) w tablicy.
-Jeżeli szukana fraza nie istnieje to funkcja ma zwrócić informację, że szukanej frazy nie ma w tablicy.

const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "TUTAJ"];
const findPhraseInArray = (array, phrase) => {
    // return
};
przykładowe działanie:
const result = findPhraseInArray(inputData, "tut");
result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]




// przerób zadania z modułu pierwszego na TS w taki sposób,
// aby każdy argument funkcji był typowany
// oraz był odpowiedni typ na to co zwraca dana funkcja

// dla przykładu:
// funkcja getMyAge może przyjać Date, number i string jako input
// i zawsze zwraca number


type AllowedTypes = Date | number | string

function getMyAge(input: AllowedTypes): number {
    // ...
    return 0 // tylko dla przykładu
}

*/
var inputData = ['zerowy', 'pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty', 'siódmy', 'ósmy', 'dziewiąty', 'dziesiąty', 'jedenasty', 'dwunasty', 'trzynasty', 'czternasty'];
var findPhraseInArray = function (array, phrase) {
    var i = 0;
    var filteredArr = [];
    array.forEach(function (el, index) {
        if (el.toUpperCase().includes(phrase.toUpperCase())) {
            filteredArr.push([el, index]);
        }
        i++;
    });
    if (filteredArr.length === 0)
        return 'Tablica nie zawiera szukanej frazy';
    return filteredArr;
};
var result = findPhraseInArray(inputData, 'naSTY');
//Pytanie:
// 1. Czy typowac wewnetrzne funkcje ?
// 2. Co z bledem includes?
// 3. czy typowac na sile zmienne jak i?
