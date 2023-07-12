// GENERICS- sluza do tworzenia bloku kodu wielorotnego zytku, ktorych mozna uzywac z roznymi typami.


//  A) Z FUNKCJAMI
const dopiszUID = (obj: object) => {
    let UID = Math.floor(Math.random() * 100);
    return { ...obj, UID }
}
const doc1 = { name: "Marek", age: 33 }
const doc2 = dopiszUID(doc1)
console.log(doc2)//{ name: "Marek", age: 33, UID: ..random X.. }
console.log(doc1.name)//"Marek"
console.log(doc2.name)// Blad"Property name doesn't exist on this type.."
// Nie da sie wyciagac wlasciwosci ze zwracanych obiektow z funkcji w ten sposob, i wtedy trzeba uzyc generykow..

const powiekszOTelefon = <T extends {name:string}>(obj: T) => { //T=dowolny,a z extends="dowolny,ktory ma taka wlasc".
    let tel = Math.floor(Math.random() * 10000000);
    return { ...obj, tel }
}
const doc3 = powiekszOTelefon({name: 'borys', age:14})//{name..,age..,tel..}
console.log(doc3.name)// borys. Ale gdybym dal generyk samo <T> to bledu by nie bylo, ale zwroci undefined.


//  B) Z interface'ami

// 1. Tworze interface, ale nie wiem jakiego typu bedzie wartosc wlasciwosci data, dlatego ustawiam typ DOWOLNY, KTORY SPRECYZUJE PODCZAS TWORZENIA OBIEKTU, NA PODSTAWIE TEGO INTERFACE'U
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

// 2. Tworze OBIEKT, na podstawie interfacu, i tu precyzuje jakiego typu ma byc data;
const obiekt1: Resource<object> = {
    uid: 22,
    resourceName: 'osoba',
    data: {name:"Brajan", age:35},
}

const obiekt2: Resource<string[]> = {
    uid: 22,
    resourceName: 'lista zakupów',
    data: ["chleb","mleko"],
}

console.log(obiekt1, obiekt2)