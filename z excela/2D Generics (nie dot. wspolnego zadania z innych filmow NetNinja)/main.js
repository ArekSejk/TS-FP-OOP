// GENERICS- sluza do tworzenia bloku kodu wielorotnego zytku, ktorych mozna uzywac z roznymi typami.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//  A) Z FUNKCJAMI
var dopiszUID = function (obj) {
    var UID = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { UID: UID });
};
var doc1 = { name: "Marek", age: 33 };
var doc2 = dopiszUID(doc1);
console.log(doc2); //{ name: "Marek", age: 33, UID: ..random X.. }
console.log(doc1.name); //"Marek"
console.log(doc2.name); // Blad"Property name doesn't exist on this type.."
// Nie da sie wyciagac wlasciwosci ze zwracanych obiektow z funkcji w ten sposob, i wtedy trzeba uzyc generykow..
var powiekszOTelefon = function (obj) {
    var tel = Math.floor(Math.random() * 10000000);
    return __assign(__assign({}, obj), { tel: tel });
};
var doc3 = powiekszOTelefon({ name: 'borys', age: 14 }); //{name..,age..,tel..}
console.log(doc3.name); // borys. Ale gdybym dal generyk samo <T> to bledu by nie bylo, ale zwroci undefined.
// 2. Tworze OBIEKT, na podstawie interfacu, i tu precyzuje jakiego typu ma byc data;
var obiekt1 = {
    uid: 22,
    resourceName: 'osoba',
    data: { name: "Brajan", age: 35 },
};
var obiekt2 = {
    uid: 22,
    resourceName: 'lista zakupów',
    data: ["chleb", "mleko"],
};
console.log(obiekt1, obiekt2);
