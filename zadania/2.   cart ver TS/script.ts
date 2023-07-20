// przerób zadania z modułu drugiego na TS w taki sposób,
// abys miał kompletny interfejs dla każdej z klas zawierający typowanie wszystkich propów i metod klas

/* dla przykładu:

type ChangeableKeys = 'name' | 'price' | 'category'
type ValuesType = string | number

interface ICartItem {
    uuid: string
    name: string
    price: number
    category?: string
    modify: (key: ChangeableKeys, Value: ValuesType) => void
}

class CartItem implements ICartItem {
    uuid: string
    name: string
    price: number
    category?: string

    constructor(name: string, price: number, category: string) {

    }
    modify = (key: ChangeableKeys, Value: ValuesType): void => { }
}

Pierwotna tresc i moje rozwiazanie ZADANIA:  --------------

/*Cele główne
1.Stwórz strukturę danych związaną ze sklepem int.,(pełen opis się w kodzie niżej).
2. Wypracuj obiekt charakteryzujący przedmiot.
3. Wypracuj obiekt charakteryzujący koszyk.

class CartItem {
    // Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
    // Ma umożliwiać:
    // - określać jego rabat procentowy
    // - dodawać produkt do kategorii
    // - zmianę nazwy, ceny lub rabatu
}

class Cart {
    // Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
    // Ma umożliwiać:
    // - dodawanie/usuwanie przedmiotów do/z koszyka
    // - zmianę ilości produktu w koszyku
    // - podliczać wartość koszyka uwzględniajac rabaty
}*/////////////////////////////////////////////////////////////////


interface InterItem {
    name: string;
    uuid: number;
    price: number;
    category: string;
    discountValue: number;
    discountedPrice: number;
    changeName: (newValue: string) => void;
    changePrice: (newValue: number) => void;
    setDiscountValue: (newValue: number) => void;
    setCategory: (newValue: string) => void;
    //change: (key: PropToChange, newValue: Value) => void; //do wszechstronnej metody zmiany all props change
}

type wlasciwoscZmieniana = 'name' | 'price' | 'category' | "discountValue";
type Value = string | number;

class Item implements InterItem {
    uuid: number;
    name: string;
    price: number;
    discountValue: number;
    discountedPrice: number;

    category: string = '';

    constructor(name: string, price: number, discountValue: number) {
        this.uuid = Math.floor(Math.random() * 1000000000000);
        this.name = name;
        this.price = price;
        this.discountValue = discountValue;
        this.discountedPrice = this.price - this.discountValue;
    }


    change(key: wlasciwoscZmieniana, newValue: Value) {

        let index: number;
        index = Object.keys(this).findIndex(el => el === key)


         this[`${key}`] = newValue;
        // lub
        // this[index]= newValue;
        //W JS by dzialalo ale w TS nie:(

    }

    changeName = (newValue: string) => {
        this.name = newValue;
    }
    changePrice = (newValue: number) => {
        this.price = newValue;
        this.discountedPrice = this.price - this.discountValue;
    }
    setDiscountValue(newValue: number) {
        this.discountValue = newValue;
        this.discountedPrice = this.price - this.discountValue;
    }
    setCategory(newValue: string) {
        this.category = newValue;
    }
}
const item1 = new Item("Dzbanek", 50, 10);
const item2 = new Item("Mydło", 5, 0);
const item3 = new Item("mop", 30, 10)


item1.change("price", 9999)

console.log(item1)




interface InterCart {
    uuid: number;
    selectedProdsList: Array<{ prodInCart: Item, quantity: number }>;
    discountCodeValue: number;
    cartDiscountValue: number;
    addProduct: (product: Item) => void;
    removeProduct: (product: Item) => void;
    changeQuantity: (product: Item, quantity: number) => void;
    setDiscountCode: (discountCodeValue: number) => void;
    setCartDiscount: (cartDiscountValue: number) => void;
    countCartValue: () => number;
}





class Cart {
    uuid: number;
    selectedProdsList: Array<{ prodInCart: Item, quantity: number }> = [];
    discountCodeValue: number = 0;
    cartDiscountValue: number = 0;
    name: string = ''
    age: number = 0

    constructor() {
        this.uuid = Math.floor(Math.random() * 1000000000000);
    }

    addProduct(product: Item) {
        const indexToAdd = this.selectedProdsList.findIndex(e => e.prodInCart.uuid === product.uuid);

        if (indexToAdd !== -1) this.selectedProdsList[indexToAdd].quantity++;
        else this.selectedProdsList.push({ prodInCart: product, quantity: 1 });
    }

    removeProduct(product: Item) {
        const indexToRemove = this.selectedProdsList.findIndex(e => e.prodInCart.uuid === product.uuid);

        if (indexToRemove !== -1) this.selectedProdsList.splice(indexToRemove, 1);
        // bez " else this.selectedProdsList[indexToRemove].quantity--; " bo od zmiany ilosci jest metoda chhangeQuantity a tu ma niewazne ile to ma usunac ten produkt"
    }

    changeQuantity(product: Item, quantity: number) {
        const indexToChange = this.selectedProdsList.findIndex(e => e.prodInCart.uuid === product.uuid);
        if (indexToChange === -1) return;
        if (quantity === 0) return this.selectedProdsList.splice(indexToChange, 1);//skoro 0 to del
        if (indexToChange !== -1) return this.selectedProdsList[indexToChange].quantity = quantity;
    }

    setDiscountCode(discountCodeValue: number) {
        this.discountCodeValue = discountCodeValue;
    }

    setCartDiscount(cartDiscountValue: number) {
        this.cartDiscountValue = cartDiscountValue;
    }

    countCartValue() {
        return ((this.selectedProdsList.map(e => e.quantity * e.prodInCart.discountedPrice).reduce((acc, prev) => acc + prev)) - (this.discountCodeValue + this.cartDiscountValue));
    }
}
// const koszyk1 = new Cart();
// koszyk1.addProduct(item1)
// koszyk1.addProduct(item2)
// koszyk1.addProduct(item3)
// koszyk1.addProduct(item3)
// // koszyk1.removeProduct(item2)
// koszyk1.changeQuantity(item3, 2)
// koszyk1.setDiscountCode(10)
// koszyk1.setCartDiscount(5)
// koszyk1.countCartValue()

// console.log(koszyk1)
// console.log(koszyk1.countCartValue())





/* Pytania:
1. Poniewaz TS jedynie informuje o bledzie, ale bez mojej walidacji/ifow i tak przepuszcza bledne inputy to co robic? Czyli walidacja wyglada identycznie jak w zwyklym JS..

2.Jak to jest z zawartoscia konstruktora? Jesli privat to mozna w parametrach? Czy ogolnie modyfikatory wystarcza? A co jesli jakas wlasciwosc jednak musze uwzglednic jak tu uuid? Wtedy reszt tez tu musi?

3. Dlaczego nie dziala ogolna metoda zmiany dla wszystkich keysow?

4. Jak uzywac modyfikatory dostepu przy interfacie. Getter ok, ale instancja.name i tak mozna odczytac bo nadal jest publc.(patrz przyklad na dole). 

5. Jaka walidacje stosowac? Wszystko privatowac?

6. Blad z findindex wynika prawdopodobnie z bledu kompilatora, nie z zlego kodu. Zainstalowalm nowego TSa, zrobilem poprawki w pliku tsconfig i naddal lipa

*/

interface Test {
    getName: () => string
}

class Ziom implements Test {

    constructor(private name: string, public age: number) { }

    getName() {
        return this.name;
    }
}

const arek = new Ziom('Arek', 20)
// console.log(arek.getName())
// console.log(arek.age)

// console.log(Object.keys(arek)[0] === "name")

