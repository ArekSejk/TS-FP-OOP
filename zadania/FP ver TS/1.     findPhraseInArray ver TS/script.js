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
result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]*/





inputData = ['zerowy', 'pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty', 'siódmy', 'ósmy', 'dziewiąty', 'dziesiąty', 'jedenasty', 'dwunasty', 'trzynasty', 'czternasty'];



const findPhraseInArray = (array, phrase) => {

    // let i = 0;
    let filteredArr = [];

    array.forEach((element, index) => {

        if (element.toUpperCase().includes(phrase.toUpperCase())) {

            filteredArr.push([element, index]);

        }
        // i++;
    });

    if (filteredArr.length === 0) return 'Tablica nie zawiera szukanej frazy';

    return filteredArr;
}
const result = findPhraseInArray(inputData, 'naSTY');