/*Cele główne
Stwórz funkcję agregującą wszystkie elementy array na losowej długości chunki.
Każdy chunk ma mieć 4-7 elementów, ostatni chunk też powinien być długości 4-7.*/
// const alphabet = "abcdefghijklmnoprstuwxyz".split("");
/*
const aggregateIntoChunks = (array) => {
    return ...
};

const chunks = aggregateIntoChunks(alphabet);// chunks: [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
---------------------------------------------------------------*/
function aggregateIntoChunks(arr) {
    var _a, _b;
    if (arr.length < 4)
        return 'za krotki array';
    var newArr = [];
    var max = 7;
    var min = 4;
    var sumaChunkow = 0;
    while ((arr.length - sumaChunkow) > 11) {
        var size = Math.floor(Math.random() * (max - min + 1) + min);
        newArr.push(arr.slice(sumaChunkow, sumaChunkow + size));
        sumaChunkow += size;
    }
    if ((arr.length - sumaChunkow) <= 7) {
        newArr.push(arr.slice(sumaChunkow));
    }
    else if ((arr.length - sumaChunkow) > 7 || (arr.length - sumaChunkow) <= 11) {
        var warunek = false;
        while (!warunek) {
            var przedostatni = Math.floor(Math.random() * (max - min + 1) + min);
            var ostatni = (arr.length - sumaChunkow) - przedostatni;
            if ((_b = (_a = ostatni >= 4) !== null && _a !== void 0 ? _a : ostatni <= 7) !== null && _b !== void 0 ? _b : przedostatni + ostatni === arr.length - sumaChunkow) {
                newArr.push(arr.slice(sumaChunkow, sumaChunkow + przedostatni));
                newArr.push(arr.slice(sumaChunkow + przedostatni));
                warunek = true;
            }
        }
    }
    return newArr;
}
// const alphabet = "abcdefghijklmnoprstuwxyz".split("");
// const alphabet2 = "12345678901".split("");
// const alphabet3 = "abcdefghijklmnoprstuwxyz12345678901234567890".split("");
//  console.log(aggregateIntoChunks(alphabet))
// Rozwiazanie poprzednie- dzialajace ale za duza losowosc (moze zamulic)
//PIERWOTNIE MIALEM PONIZSZE ROZWIAZANIE dalsze, dzialalo, ale bylo zbyt randomowe i czasami sie nie znajdywaly
// while (!warunek) {
//     let przedostatni = 0;
// let ostatni = 0;
// do {
//     przedostatni = Math.floor(Math.random() * (max - min + 1) + min);
//     ostatni = Math.floor(Math.random() * (max - min + 1) + min);
// } while (((przedostatni + ostatni) !== (arr.length - skumulowane) || przedostatni < min || przedostatni > max || ostatni < min || ostatni > max));
// newArr.push(arr.slice(skumulowane, skumulowane + przedostatni));
// newArr.push(arr.slice(skumulowane + przedostatni,))
//}
