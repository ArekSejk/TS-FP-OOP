//Zapisywanie duzych cyfr
const num = 1.5 * 1000000000; //e1 dla kazdego zera
const num2 = 1.5e9;
console.log(num == num2)

//Zapisywanie malych cyfr
const num3 = 1e-4; //(minus oznacza ze zera ale przed jedynka)
console.log(num3) //0.0001
const num4 = 2.1e-5;//mimo zapisu 2.1 to bedzie ...0021 na koncu
console.log(num4)

console.log(0.1 + 0.2)


//      MATH ----------------------------------
const xNum = 56.5;
const yNum = 74.3;

console.log(Math.min(xNum, yNum))
console.log(Math.max(xNum, yNum))
console.log(Math.max(xNum, yNum));
console.log(Math.abs(-1))
console.log(Math.round(xNum), Math.round(yNum))
console.log(Math.ceil(xNum))
//Losuj liczbe z zakresu 3-7
const min = 3;
const max = 7;
const wynik = Math.floor(Math.random() * (max - min + 1) + min);
//random(0-0.99..) mnoze przez roznice powiekszona o 1. A to dlatego ze gdybysmy dali normalnie 4+min3=  7. Wtedy nawet przy random max 0.99*7=6.99 flooruje nam do 6. Pasowaloby to gdybysmy dzialali z indexami(pierwszy 0). A tu chodzi o wartosci wiec musi byc +1.
console.log(wynik)









//    Losowe kolory w 3 wersjach kodu-----------------------
//ponizej w jednej funkcji o razu koloruje wszystkie divy dwoma roznymi funkcjami
const div1 = document.querySelector('.box1');
const div2 = document.querySelector('.box2');

function kolorujStronę() {
    div1.style.background = losowyKolor();
    div2.style.background = randomowaBarwa();
}
setInterval(kolorujStronę, 1000);



//Do div1 - metoda 1 do RGB
function losowyKolor() {
    const litery = "0123456789ABCDEF";//ind(0-15)length 16,tj zapis w sys 16nastkowym.
    let color = "#";
    for (let i = 0; i < 6; i++) { // # + 6 liter = np #XY38T6
        color += litery[Math.floor(Math.random() * 16)]
    }
    return color;
}


//Do div2  - metoda 2 hsl(hue, saturation, lightness);
/*
H-Hue-barwa: Liczba całkowita określana w stopniach (z przedziału od 0 do 360) z tzw. koła barw: 0 - czerwony (Red), 120 - zielony (Green), 240 - niebieski (Blue)
S-Saturation-nasycenie- Wartość proc: 0% - szary, 100% - normalny
L-Lightness- jasność: Wart proc: 0%- czarny,50% - normal, 100%- biały */
function randomowaBarwa() {
    let barwa = `hsl(${Math.random() * 360}, 100%, 70%)`; //hsl(,100%,70%)
    return barwa;
}