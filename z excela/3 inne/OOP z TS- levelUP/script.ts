class Dog8 {
    constructor(public age: number, public breed: string) { }
    getRelativeAge(): number {
        return this.age * 7
    }
}
let burek = new Dog8(2, 'Labrador')
console.log(burek)

// to samo ale uzywajac obiektow funkcyjnych

function Dog2(age, breed) {
    this.age = age
    this.breed = breed
}
Dog2.prototype.getRelativeAge = function () {
    return this.age * 7
}
var burek2 = new Dog2(2, 'Labrador')

//wracajac do class i obiektowki..
/*Słowo superkluczowe spełnia dwie role w dziedziczeniu. Najpierw działa jako funkcja i jest używana w konstruktorze klasy nadrzędnej. Musi być wywołany wcześniej thisw konstruktorze obiektu potomnego. Drugim jest to, że pozwala nam uzyskać dostęp do metod (ale NIE atrybutów) obiektu nadrzędnego.*/

//Teraz przedstawienie dziedziczenia w TS z getterami zeby dane byly niemodyfikowalne

//Animal jest klasą nadrzędną dla Dog, Cat itd. Tworzymy,zeby nie powtarzac niektorych wlasciwosci

class Animal {
    constructor(public age: number, public breed: string) { }

    makeSound_(sound: string): void {
        console.log(sound)
        console.log(sound)
        console.log(sound)
    }
}

class Dog {                     //dlaczego bez konstruktora?
    private _name: string

    get name(): string {
        return this._name
    }
    set name(name: string)/*: void*/ { //wyciszylem void bo  blad,ze set nie moze niczego zwracac,wiec i ustawiac :void
        if (!name || name.length > 20) {//racjonalnie zaden pies nie ma dluzszego imienia
            throw new Error('Nazwa jest niepoprawna')
        }
        else {
            this._name = name
        }
    }
}
// const piesTest = new Dog()
// piesTest.name = "ciapciak";  //pogladowo
// console.log(piesTest.name)

class PetStore {
    private _dogs: Array<Dog>

    constructor() {
        this._dogs = [new Dog()]    //zmienną dogs tutaj bedzie arr z nowa instancja powyzszej classy Dog
        this._dogs[0].name = 'Fido' // uzywam metody 'set' z Dog. I pierwszy pies w arr bedzie fido
    }
    printAllDogNames(): void {
        this._dogs.forEach(dog => {
            console.log(dog.name) // tu wywolujemy getter w classie Dog
        })
    }
}

const sklep1 = new PetStore()
console.log(sklep1.printAllDogNames())
//nie do konca czaje co tutaj robi. Nie idzie dodac/odjac psa ni nic. Jest tylko shardcodowany fido i tyle?!