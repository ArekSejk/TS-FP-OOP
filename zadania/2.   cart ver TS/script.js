// przerób zadania z modułu drugiego na TS w taki sposób,
// abys miał kompletny interfejs dla każdej z klas zawierający typowanie wszystkich propów i metod klas
var Item = /** @class */ (function () {
    function Item(name, price, discountValue) {
        var _this = this;
        this.category = '';
        this.changeName = function (newValue) {
            _this.name = newValue;
        };
        this.changePrice = function (newValue) {
            _this.price = newValue;
            _this.discountedPrice = _this.price - _this.discountValue;
        };
        this.uuid = Math.floor(Math.random() * 1000000000000);
        this.name = name;
        this.price = price;
        this.discountValue = discountValue;
        this.discountedPrice = this.price - this.discountValue;
    }
    Item.prototype.setDiscountValue = function (newValue) {
        this.discountValue = newValue;
        this.discountedPrice = this.price - this.discountValue;
    };
    Item.prototype.setCategory = function (newValue) {
        this.category = newValue;
    };
    return Item;
}());
var item1 = new Item("Dzbanek", 50, 10);
var item2 = new Item("Mydło", 5, 0);
var item3 = new Item("mop", 30, 10);
// type PropToChange = 'name' | 'price' | 'discount' | 'category'; //do wszechstronnej metody zmiany all props change
// type Value = string | number;
var Cart = /** @class */ (function () {
    function Cart() {
        this.selectedProdsList = [];
        this.discountCodeValue = 0;
        this.cartDiscountValue = 0;
        this.uuid = Math.floor(Math.random() * 1000000000000);
    }
    Cart.prototype.addProduct = function (product) {
        var indexToAdd = this.selectedProdsList.findIndex(function (e) { return e.prodInCart.uuid === product.uuid; });
        if (indexToAdd !== -1)
            this.selectedProdsList[indexToAdd].quantity++;
        else
            this.selectedProdsList.push({ prodInCart: product, quantity: 1 });
    };
    Cart.prototype.removeProduct = function (product) {
        var indexToRemove = this.selectedProdsList.findIndex(function (e) { return e.prodInCart.uuid === product.uuid; });
        if (indexToRemove !== -1)
            this.selectedProdsList.splice(indexToRemove, 1);
        // bez " else this.selectedProdsList[indexToRemove].quantity--; " bo od zmiany ilosci jest metoda chhangeQuantity a tu ma niewazne ile to ma usunac ten produkt"
    };
    Cart.prototype.changeQuantity = function (product, quantity) {
        var indexToChange = this.selectedProdsList.findIndex(function (e) { return e.prodInCart.uuid === product.uuid; });
        if (indexToChange === -1)
            return;
        if (quantity === 0)
            return this.selectedProdsList.splice(indexToChange, 1); //skoro 0 to del
        if (indexToChange !== -1)
            return this.selectedProdsList[indexToChange].quantity = quantity;
    };
    Cart.prototype.setDiscountCode = function (discountCodeValue) {
        this.discountCodeValue = discountCodeValue;
    };
    Cart.prototype.setCartDiscount = function (cartDiscountValue) {
        this.cartDiscountValue = cartDiscountValue;
    };
    Cart.prototype.countCartValue = function () {
        return ((this.selectedProdsList.map(function (e) { return e.quantity * e.prodInCart.discountedPrice; }).reduce(function (acc, prev) { return acc + prev; })) - (this.discountCodeValue + this.cartDiscountValue));
    };
    return Cart;
}());
var Ziom = /** @class */ (function () {
    function Ziom(name, age) {
        this.name = name;
        this.age = age;
    }
    Ziom.prototype.getName = function () {
        return this.name;
    };
    return Ziom;
}());
var arek = new Ziom('Arek', 20);
console.log(arek.name);
console.log(arek.age);
console.log(Object.keys(arek)[0] === "name");
