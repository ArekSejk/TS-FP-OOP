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
var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var alphabet2 = "12345678901".split("");
var alphabet3 = "abcdefghijklmnoprstuwxyz12345678901234567890".split("");
var aggregateIntoChunks = function (arr) {
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
};
console.log(aggregateIntoChunks(alphabet));
