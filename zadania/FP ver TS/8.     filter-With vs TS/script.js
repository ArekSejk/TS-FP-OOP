/*Cele główne
Korzystając z funkcji .filter stwórz funkcję filterWith, która przeszuka cała podaną niżej tablicę obiektów.
-Funkcja musi zwrócić tablicę zawierającą szukany obiekt.
-Funkcja musi także przeszukiwać wszystkie zagnieżdżenia tablic i obiektów.
-Funkcja ma wykorzystywać rekurencję.
-Funkcja ma wykorzystywać RegExp.
-tak aby: 0-2 znaków w phrase zwracało pusty arr, a pow. 2 ma filtrować po każdej wartości string lub number w obj.

np. filterWith(data, "szukany String");
---------------------------------------------------------------*/
const data = [
    {
        _id: "5e985a07feddae7617ac44f6",
        age: 24,
        eyeColor: "brown",
        name: "Cummings Baxter",
        gender: "male",
        company: "VELOS",
        email: "cummingsbaxter@velos.com",
        phone: "+1 (907) 482-2451",
        tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
        friends: [
            {
                id: 0,
                name: "Sheppard Jensen",
            },
        ],
    },
    {
        _id: "5e985a0709dfa1e6fd93c6ad",
        age: 32,
        eyeColor: "brown",
        name: "Madelyn Dickson",
        gender: "female",
        company: "KENGEN",
        email: "madelyndickson@kengen.com",
        phone: "+1 (984) 521-2439",
        tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
        friends: [
            {
                id: 0,
                name: "Bruce Barton",
            },
            {
                id: 1,
                name: "Juliet Schmidt",
            },
            {
                id: 2,
                name: "Horton Haley",
            },
            {
                id: 3,
                name: "Herminia Witt",
            },
        ],
    },
    {
        _id: "5e985a0737e2306e9aef6ecd",
        age: 26,
        eyeColor: "blue",
        name: "Mcguire Mercado",
        gender: "male",
        company: "LINGOAGE",
        email: "mcguiremercado@lingoage.com",
        phone: "+1 (963) 450-2194",
        tags: ["cupidatat", "occaecat", "amet", "qui", "elit", "esse", "deserunt"],
        friends: [
            {
                id: 0,
                name: "Loraine Harper",
            },
            {
                id: 1,
                name: "Luann Randall",
            },
            {
                id: 2,
                name: "Obrien Rich",
            },
            {
                id: 3,
                name: "Noble Wilkerson",
            },
        ],
    },
    {
        _id: "5e985a07148cfba58c860ec2",
        age: 26,
        eyeColor: "brown",
        name: "Marina Porter",
        gender: "female",
        company: "GORGANIC",
        email: "marinaporter@gorganic.com",
        phone: "+1 (867) 417-3497",
        tags: ["laborum", "aliquip", "sit", "adipisicing", "aute", "cupidatat", "aliquip"],
        friends: [
            {
                id: 0,
                name: "Blair Hill",
            },
            {
                id: 1,
                name: "Ebony Jimenez",
            },
        ],
    },
    {
        _id: "5e985a074984f9f08ccaaa4c",
        age: 25,
        eyeColor: "green",
        name: "Barlow Ferguson",
        gender: "male",
        company: "TOYLETRY",
        email: "barlowferguson@toyletry.com",
        phone: "+1 (837) 484-2231",
        tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
        friends: [
            {
                id: 0,
                name: "Delacruz Acevedo",
            },
            {
                id: 1,
                name: "Gloria Tanner",
            },
            {
                id: 2,
                name: "Cantrell Myers",
            },
            {
                id: 3,
                name: "Fisher Leonard",
            },
        ],
    },

];
//----------------------------------------------------------

function filterWith(array, phrase) {

    //jesli phrase ma 0-2 znaki to zwroc pusta tabele

    if (/^.{0,2}$/.test(phrase)) return [];

    //gdy wiecej to przeszukuj. Jako nowa podfunn, do uzycia w rekurencji

    function przeszukaj(array, phrase) {

        //mamy zwrocic tablice, z wszystkimi obiektami, ktore zawieraja phrase

        return array.filter((el) => {

            //jesli el to string/nr zwroc true, czyli .filter przekaze go do tabeli obiektow ze znalezionymi
            if (typeof el === 'string' || typeof el === 'number') {
                if (el === phrase) return true;
            }

            //jesli el to object/arr(to tez obj) to przeszukaj jego values rekurencja,az w kolejnych zagniezdzeniach znajdzie string/nr i go porowna 

            if (typeof el === 'object') {
                const rekurencja = przeszukaj(Object.values(el), phrase);
                //Object.values bo zamienia values obiektu w tablice zeby ja potem .filter'owac. Bo .filter dziala tylko dla arr nie obj.

                //jesli rekurencja,ktora zwraca tablice z pozytywnie przefiltrowanymi zawiera choc jeden element(stad .lengh>0) to zwroc true, i w ten sposob rekurencj "wraca w gore", i ostatecznie w finalnej tablicy wstawia obiekt, ktory w glebokiej zagniezdzonej rekurencji mial gdzies true, wiec automatycznie w kazdej 'wyzszej' rowniez
                if (rekurencja.length > 0) {
                    return true;
                }
            }

            //jesli el nie jest string/nr/obj albo po prostu nie daje nigdzie tru, to cala funkcja .filter defaultowo zwraca false.
            return false;

        })
    }
    //majac w funkcji filterWith funkcje callback przeszukaj, to musimy ją wywolac
    return przeszukaj(array, phrase)
}

const fin = filterWith(data, "female")
console.log(fin);