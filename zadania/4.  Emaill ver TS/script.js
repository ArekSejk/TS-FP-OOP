/*      ZADANIE EmailBuilder

Cele główne
- Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila (parametry znajdują sie w kodzie poniżej)


class EmailBuilder{
  constructor() {
    this._mail = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }

  // Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html

  buildMail = () => {
   // Zwróć finalnego maila
  }
}*/
var Email = /** @class */ (function () {
    function Email(from, to, title, cc, bcc, html) {
        this.from = from;
        this.to = to;
        this.title = title;
        this.cc = cc;
        this.bcc = bcc;
        this.html = html;
    }
    return Email;
}());
var EmailBuilder = /** @class */ (function () {
    function EmailBuilder() {
    }
    EmailBuilder.prototype.setFrom = function (from) {
        this.from = from;
        return this;
    };
    EmailBuilder.prototype.setTo = function (to) {
        this.to = to;
        return this;
    };
    EmailBuilder.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    EmailBuilder.prototype.setCC = function (cc) {
        this.cc = cc;
        return this;
    };
    EmailBuilder.prototype.setBCC = function (bcc) {
        this.bcc = bcc;
        return this;
    };
    EmailBuilder.prototype.setHTML = function (html) {
        this.html = html;
        return this;
    };
    EmailBuilder.prototype.build = function () {
        return new Email(this.from, this.to, this.title, this.cc, this.bcc, this.html);
    };
    return EmailBuilder;
}());
var email1 = new EmailBuilder().setFrom('jan@op.pl').setTo('ala@wp.pl').setCC(['marek@op.pl', 'ja@gg.pl']).build();
var emailWjsonie = JSON.stringify(email1);
console.log(email1);
console.log(emailWjsonie);
//JSON sluzy do zmodyfikowania kodu z js w stringi, by moglby byc odczytane rowniez przez inne aplikacje itd.wyjasnienie jsona przez P.
//przykladowy obiekt gdzie mam stringi, numery, tablice i obiekty.
// const x = {
//     name: 'janek',
//     age: 24,
//     adress: {
//         street: "akacjowa",
//         houseNumber: 34,
//     },
//     email: 'fasdf@fasdfa.fd',
//     animals: ['pies', 'kot']
// }
// // JSON.stringify(obj.) sluzy do zmiany z js na jsona.
// // JSON.parse odwrotnie z jsona w jsa powrotnie
// const y = JSON.stringify(x)
//console.log(JSON.parse(y))
