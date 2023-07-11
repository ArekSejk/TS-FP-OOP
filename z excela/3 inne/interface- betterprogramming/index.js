//Powyższy kod po prostu mówi, że należy oczekiwać, że dane z tego punktu końcowego będą zgodne z właściwościami i typami określonymi w interfejsie User. WTF?
var getUser = function (user) {
    console.log("This user's name is:  ".concat(user.name));
};
getUser({ id: 1, name: 'Leanne Graham', username: 'Bret', });
console.log('0000000000000000000000000000000');
//Tworzenie rozbudowanych interfacow,
//chcemy stworzyc interface do ponizszego obiektu:
var brajanusz = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: " Sincere@april.biz ",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Wielowarstwowa sieć neuronowa klient-serwer",
        bs: "wykorzystanie rynków elektronicznych w czasie rzeczywistym"
    }
};
//i gotowe teraz mozemy uzywac powyzszych interfacow jako szablony do roznych metod i obiktow
//wersja gdy mozna bylo wpisac tylko jeden adres
// const logUserAddress = (userAddress: Address) => {
//     console.log(`The user's address is ${userAddress.street}      ${userAddress.suite}`);
// };
//------------------------------------
//nowa wersja z kilkoma adresami (w arrayu)
var logUserAddress = function (userAddress) {
    if (Array.isArray(userAddress)) { //jesli mamy wiecej niz jeden adres,wiec ich array
        console.log("Uzytkownik ma ".concat(userAddress.length, " adres\u00F3w"));
        for (var _i = 0, _a = Object.entries(userAddress); _i < _a.length; _i++) { //BLAD!! Choc nie powinno! Identyczny przyklad jest w documentacji dev..mozz. w try it dla Object.entries()
            var _b = _a[_i], index = _b[0], address = _b[1];
            //entris daja arr par key(index) i value. bogatyb..address ma 2 elementy,tj.obj adresu wiec indexami beda 0 i 1, a adresami zawartosc kazdego obiektu
            console.log("The user's address ".concat(parseInt(index) + 1, " is ").concat(address.street, " ").concat(address.suite)); //parseint bo index niewiadomo why jest pobierany jako string
        } //index plus jeden bo chcemy wyliczac ktory to jaki(a nie powiemy adres 0 to ..). tu address.street i suite to nie do glownego obiektu adress z arrayem ale juz ten z entriesow
    }
    else {
        console.log("MaOnly1: Adres uzytkownika to ".concat(userAddress.street, " ").concat(userAddress.suite));
    }
};
var getUser2 = function (user) {
    console.log("The user's name is ".concat(user.name));
    console.log("The user's phone number is ".concat(user.phone));
    logUserAddress(user.address);
};
getUser2(brajanusz);
console.log('111111111111111111111111111');
// jjeszcze bardziej rozbudowany przyklad z duzym obiektem ktory ma kilka domow, wiec i adresow
var bogatyBrajnusz = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: [
        {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        {
            street: 'Random Street',
            suite: 'Apt. 321',
            city: 'Attenborough',
            zipcode: '93187-4259',
            geo: {
                lat: '-37.9911',
                lng: '82.0137',
            },
        },
    ],
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
    },
};
getUser2(bogatyBrajnusz);
console.log('222222222222222222222222222');
//----------------------------
// FUNKCJA W INTERFACE'ie
//brajan z dodana funkcja
var brajanusz3 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: " Sincere@april.biz ",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Wielowarstwowa sieć neuronowa klient-serwer",
        bs: "wykorzystanie rynków elektronicznych w czasie rzeczywistym"
    },
    logCompany: function (company) {
        console.log('Comp.name:', company.name);
    },
};
var getUser3 = function (user) {
    var _a;
    console.log("The user's name is ".concat(user.name));
    console.log("The user's phone number is ".concat(user.phone));
    logUserAddress(user.address);
    (_a = user.logCompany) === null || _a === void 0 ? void 0 : _a.call(user, user.company);
};
getUser3(brajanusz3);
console.log('3333333333333333333333333');
