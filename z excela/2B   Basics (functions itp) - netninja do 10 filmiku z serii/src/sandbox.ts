// funkcje

let przywitanie: Function;

// deklaruje ze wartosc w przyszlosci przypisana do przywitanie bedzie typu funkcji. Funkcja tutaj zawsze pisana z duzej!

// przywitanie = 'hello'; blad bo ma byc funkcja

przywitanie = () => {
    console.log('hello!!!')
};

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}
add(5, 10, "17") //c jest opcjonalne,wtedy daje c?,ale jesli ma defaultowa wartosc jak tu(10) to pisze wartosc ale juz bez ?

//-------------------------------------
//przypisywanie funk. do zmiennych

const minus = (a: number, b: number) => {
    return a + b;
}

let wynik = minus(10, 20);//wynik od razu tez ma typowana wartosc, przypisana do typu jaka zwracana jest w minusie.

wynik = 5;// ok, ale..
// wynik = "100"// juz nie gra,blad bo string:)

//------------------------------------
//Enumy reverse mapping (z tutorialsteacher.com tez z excela)

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
console.log(PrintMedia) // drukuje najpierw cala liste w postaci '1':'Newspaper', '2':"News...,a potem odwrotnie po nazwie i index:)
console.log(PrintMedia[2])//Newsletter
console.log(PrintMedia.Newsletter)//2



//----------------------------------------------
//aliasy ze stronki dyclassroom (tez z excela)


//ponizsze typowanie mozna zastapic tworzac alias ktory domyslam sie, mozna uzywac wielokrotnie // let employee: { userName: string, points: number };

type UserData = { userName: string, points: number };//Gdzie, type jest słowem klucz. tworzącym alias. UserData jest nazwa aliasu dla danego typu niestand., podanego w customType.

let employee: UserData;
employee = { userName: 'Marek', points: 66 };

//--------------------------------------
//funkcje cd. netninja


//przyklad 1
let greet: (a: string, b: string) => void;
//a,b to tylko nazwy parametrow, a my w funkcji mozemy nazwac je inaczej

greet = (name: string, greeting: string) => {//moglbym tu wpisac jeszcze ...):void=> ale nie musze, bo system wywnioskowal sam ze nic tu nie zwracam wiec typuje na zwrocenie void
    console.log(`${name} says ${greeting}`);
}
greet('bartek', 'siemaaa!')

//przyklad 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'dodaj') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}
console.log(calc(4, 3, 'odejmij'))//1
console.log(calc(4, 3, 'dodaj'))//4


//przyklad 3

//parametrem funkcji jest obiekt

// Należy pamiętać, że nazwa parametru jest wymagana. Przy przykladowej funkcji gdy parametr okreslimy jedynie jako:(string) => ...;oznacza „funkcję z parametrem o nazwie string typu any”!

let logDetails: (obj: { name: string, age: number }) => void;
//ten obj to jedynie nazwa parametru. W js ten zapis by wygladal nastepujaco: logDetails(obj)=> {...

logDetails = (ninja: { name: string, age: number }) => {    //te ninja to tylko nazwa parametru funkcji (f(ninja)=>{})
    console.log(`${ninja.name} is ${ninja.age} years old`);//ten ninja wcale nie jest potrzebny,ale przez to mozemy sie odwolywac latwiej do parametrow
}

const test1 = logDetails({ name: "Riu", age: 24 })
console.log(test1)


//ale to samo mozna zrobic tez z aliasem np.
let logDetails2: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

logDetails2 = (ninja: person) => {
    console.log(`Sensej ${ninja.name}-san ma ${ninja.age} lat`)
}
console.log(logDetails2({ name: 'Marcin', age: 33 }))



