import { hasFormatter } from "../interfaces/hasFormatter";

export class Platnosc implements hasFormatter {
    constructor(
        readonly odbiorca: string,
        private details: string,
        public amount: number,
    ) { }//wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!

    format() {
        return `Jestem winien ${this.odbiorca} kwotę ${this.amount} za ${this.details}.`;
    }
}