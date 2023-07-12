import { hasFormatter } from "../interfaces/hasFormatter";

//export class Faktura {
// readonly client: string;
// private details: string;
// public amount: number;

// constructor(client: string, details: string, amount: number) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
// } poprzednia typowa budowa constructora w TS
//przyklad uzycia public/priv/read,ale zamiast tego mozemy uzyc access modifiers w samym constructorze jak poniej  i wtedy nie trzeba dublowac typowania jak wyzej
//}


//klasa jest exp. do app.ts, ale tez uzywa importowany interface hasFormatter(stad 'implement')
export class Faktura implements hasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }//wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!

    format() {
        return `${this.client} jest winien ${this.amount} za ${this.details}.`;
    }
}