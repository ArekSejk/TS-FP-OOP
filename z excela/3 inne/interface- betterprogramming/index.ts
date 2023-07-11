
//Powyższy kod po prostu mówi, że należy oczekiwać, że dane z tego punktu końcowego będą zgodne z właściwościami i typami określonymi w interfejsie User. WTF?

interface User {
    id: number;
    name: string;
    username: string;
    email?: string;
}

const getUser = (user: User) => {
    console.log(`This user's name is:  ${user.name}`);
};

getUser({ id: 1, name: 'Leanne Graham', username: 'Bret', });
console.log('0000000000000000000000000000000')

//Tworzenie rozbudowanych interfacow,
//chcemy stworzyc interface do ponizszego obiektu:
const brajanusz = {
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
}

/*Ogólnie uważa się, że najlepszą praktyką jest tworzenie nowego interfejsu dla każdego obiektu. Zauważysz, że zaniedbaliśmy zrobienie tego dla geo obj. Powodem tego jest to, że informacji tej prawdopodobnie zawsze będą towarzyszyć informacje adresowe. Oczywiście, jeśli chcesz, możesz utworzyć GeoCoordinatesinterfejs i zmodyfikować Addressinterfejs, tak jak poniżej*/

interface User2 {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address | Address[],     //unia, bo chcemy byc elastyczni jesli ktos ma jeden dom lub kilka i podamy arr z adresami
    phone: string,
    website: string,
    company: Company,       //typu interface'a Company
    logCompany?: (company: Company) => void; //opcj.param.bo w ostatnim przykladzie wstawiamy taka wlasciwosc z funkcja weń
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string,
}

//i gotowe teraz mozemy uzywac powyzszych interfacow jako szablony do roznych metod i obiktow

//wersja gdy mozna bylo wpisac tylko jeden adres
// const logUserAddress = (userAddress: Address) => {
//     console.log(`The user's address is ${userAddress.street}      ${userAddress.suite}`);
// };



//------------------------------------
//nowa wersja z kilkoma adresami (w arrayu)
const logUserAddress = (userAddress: Address | Address[]) => {
    if (Array.isArray(userAddress)) { //jesli mamy wiecej niz jeden adres,wiec ich array
        console.log(`Uzytkownik ma ${userAddress.length} adresów`);
        for (let [index, address] of Object.entries(userAddress)) { //BLAD!! Choc nie powinno! Identyczny przyklad jest w documentacji dev..mozz. w try it dla Object.entries()
            //entris daja arr par key(index) i value. bogatyb..address ma 2 elementy,tj.obj adresu wiec indexami beda 0 i 1, a adresami zawartosc kazdego obiektu
            console.log(`The user's address ${parseInt(index) + 1} is ${address.street} ${address.suite}`);//parseint bo index niewiadomo why jest pobierany jako string
        }//index plus jeden bo chcemy wyliczac ktory to jaki(a nie powiemy adres 0 to ..). tu address.street i suite to nie do glownego obiektu adress z arrayem ale juz ten z entriesow

    } else {
        console.log(`MaOnly1: Adres uzytkownika to ${userAddress.street} ${userAddress.suite}`)
    }
}

const getUser2 = (user: User2) => {
    console.log(`The user's name is ${user.name}`);
    console.log(`The user's phone number is ${user.phone}`);
    logUserAddress(user.address);
};
getUser2(brajanusz)
console.log('111111111111111111111111111')
// jjeszcze bardziej rozbudowany przyklad z duzym obiektem ktory ma kilka domow, wiec i adresow

const bogatyBrajnusz = {
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
        {                               //nowy obiekt w poprzednim brajanuszu
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
}
getUser2(bogatyBrajnusz)
console.log('222222222222222222222222222')

//----------------------------
// FUNKCJA W INTERFACE'ie
//brajan z dodana funkcja

const brajanusz3 = {
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
    logCompany: (company) => {
        console.log('Comp.name:',company.name);
    },
}

const getUser3 = (user: User2) => {
    console.log(`The user's name is ${user.name}`);
    console.log(`The user's phone number is ${user.phone}`);
    logUserAddress(user.address);
    user.logCompany?.(user.company)
};

getUser3(brajanusz3)
console.log('3333333333333333333333333')