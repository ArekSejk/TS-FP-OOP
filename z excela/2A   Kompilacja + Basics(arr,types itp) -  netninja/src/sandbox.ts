
const inputs = document.querySelectorAll('input');

console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})




// ARRAYS - Wstawianie do tablicy roznych typow
const arr1 = [1, 2, 3];//uznal pierwotnie ze to
arr1.push(4);//.. arr z numberami
// arr1.push('lola') error

const mixArr = [1, 'dupa', 3]//uzna ze to arr
mixArr.push(5)// z nr/string
mixArr.push('tak')
// mixArr.push(true) blad , bo uwzglednia w tej tablicy tylko te rodzaje ktore wystapia losowo w pierwotnej tablicy. nie ma znaczenie tutaj index i polozenie
console.log(mixArr)

// !!!!! nie da sie wstawiac wartosci do tablicy tylko zadeklarowanej, ale nie zainicjowanej!!!
let arr2: string[];//deklarowana ale nie zainic.
// arr2.push('brow')// Uncaught TypeError: arr2 is undefined

let arr3: string[] = []; //zadeklarowana i zainicjowana jako pusta
arr3.push('lizak')
// arr3.push(4) wrong type


//  Unions w arrayach

const arr4: (string | number | boolean)[] = [];
arr4.push('lek')
arr4.push(5)
arr4.push(false)

console.log(arr4);

// Any w arrayach(any unikac wszedzie)

const arr5: any[] = [];
arr5.push(56)
arr5.push('marek')
arr5.push(true)
arr5.push([1, 2])
arr5.push({ name: 'Jan' });
console.log(arr5);//wszystko dziala

// typowanie Obiektow

let obj1: { name: string, age: number, description: any };
//omijac any!!!
obj1 = { name: 'ewa', age: 15, description: 'blablabla' }// ok
obj1 = { name: 'ewa', age: 15, description: 111222233 }//ok
obj1 = { name: 'ewa', age: 15, description: false }//ok
obj1 = { name: 'ewa', age: 15, description: { city: "NY", dogs: 3 } }//ok
console.log(obj1)



//test kompilacji poza folderem

const costambedzie: string = 'miś koralgol';

console.log(costambedzie)

