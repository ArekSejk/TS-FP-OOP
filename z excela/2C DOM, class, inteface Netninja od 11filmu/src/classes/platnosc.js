"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platnosc = void 0;
var Platnosc = /** @class */ (function () {
    function Platnosc(odbiorca, details, amount) {
        this.odbiorca = odbiorca;
        this.details = details;
        this.amount = amount;
    } //wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!
    Platnosc.prototype.format = function () {
        return "Jestem winien ".concat(this.odbiorca, " kwot\u0119 ").concat(this.amount, " za ").concat(this.details, ".");
    };
    return Platnosc;
}());
exports.Platnosc = Platnosc;
