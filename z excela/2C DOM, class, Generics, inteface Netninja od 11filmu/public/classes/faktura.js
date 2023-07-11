export class Faktura {
    // readonly client: string;
    // private details: string;
    // public amount: number;  przyklad uzycia,ale zamiast tego mozemy uzyc access modifiers w samym constructorze
    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // } poprzednia typowa budowa constructora w TS
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } //wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!
    FormData() {
        return `${this.client} jest winien ${this.amount} za ${this.details}.`;
    }
}
