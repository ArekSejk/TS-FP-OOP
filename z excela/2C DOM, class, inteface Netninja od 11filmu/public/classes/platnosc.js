export class Platnosc {
    constructor(odbiorca, details, amount) {
        this.odbiorca = odbiorca;
        this.details = details;
        this.amount = amount;
    } //wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!
    format() {
        return `Jestem winien ${this.odbiorca} kwotę ${this.amount} za ${this.details}.`;
    }
}
