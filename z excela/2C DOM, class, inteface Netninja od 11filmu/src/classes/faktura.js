"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faktura = void 0;
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
var Faktura = /** @class */ (function () {
    function Faktura(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } //wszystko w param. nic w ciele construktora! tak mozna zapisywac jedynie z uzyciem access modifiers!
    Faktura.prototype.format = function () {
        return "".concat(this.client, " jest winien ").concat(this.amount, " za ").concat(this.details, ".");
    };
    return Faktura;
}());
exports.Faktura = Faktura;
