var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// ARRAYS - Wstawianie do tablicy roznych typow
var arr1 = [1, 2, 3]; //uznal pierwotnie ze to
arr1.push(4); //.. arr z numberami
// arr1.push('lola') error
var mixArr = [1, 'dupa', 3]; //uzna ze to arr
mixArr.push(5); // z nr/string/booleans
mixArr.push('tak');
// mixArr.push(true) blad , bo uwzglednia w tej tablicy tylko te rodzaje ktore wystapia losowo w pierwotnej tablicy. nie ma znaczenie tutaj index i polozenie
console.log(mixArr);
// !!!!! nie da sie wstawiac wartosci do tablicy tylko zadeklarowanej, ale nie zainicjowanej!!!
var arr2; //deklarowana ale nie zainic.
// arr2.push('brow')// Uncaught TypeError: arr2 is undefined
var arr3 = []; //zadeklarowana i zainicjowana jako pusta
arr3.push('lizak');
// arr3.push(4) wrong type
//  Unions w arrayach
var arr4 = [];
arr4.push('lek');
arr4.push(5);
arr4.push(false);
console.log(arr4);
// Any w arrayach(any unikac wszedzie)
var arr5 = [];
arr5.push(56);
arr5.push('marek');
arr5.push(true);
arr5.push([1, 2]);
arr5.push({ name: 'Jan' });
console.log(arr5); //wszystko dziala
// typowanie Obiektow
var obj1;
//omijac any!!!
obj1 = { name: 'ewa', age: 15, description: 'blablabla' }; // ok
obj1 = { name: 'ewa', age: 15, description: 111222233 }; //ok
obj1 = { name: 'ewa', age: 15, description: false }; //ok
obj1 = { name: 'ewa', age: 15, description: { city: "NY", dogs: 3 } }; //ok
console.log(obj1);
//test kompilacji poza folderem
var costambedzie = 'miś koralgol';
console.log(costambedzie);
// funkcje
var przywitanie;
// deklaruje ze wartosc w przyszlosci przypisana do przywitanie bedzie typu funkcji. Funkcja tutaj z duzej!
// przywitanie = 'hello'; blad
var przywitanie = function () {
    console.log('Siemaaa');
};
