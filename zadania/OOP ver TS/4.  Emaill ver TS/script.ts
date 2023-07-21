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

interface IEmail {
    from: string,
    to: string,
    title: string,
    cc: string[],
    bcc: string[],
    html: string,
}


class Email implements IEmail {
    constructor(
        public from: string,
        public to: string,
        public title: string,
        public cc: string[],
        public bcc: string[],
        public html: string) { }
}


interface IEmailBuilder {
    from: string;               // 1. (TS) Zadeklarowalem kazda wasciwosc
    to: string;
    title: string;
    cc: string[];
    bcc: string[];
    html: string;
    setFrom: (from: string) => Email;
    setTo: (to: string) => Email;
    setTitle: (title: string) => Email;
    setCC: (cc: string[]) => Email;
    setBCC: (bcc: string[]) => Email;
    setHTML: (html: string) => Email;
    build: () => Email;
}

class EmailBuilder implements IEmailBuilder {
    from: string;               // 1. (TS) Zadeklarowalem kazda wasciwosc
    to: string;
    title: string;
    cc: string[];
    bcc: string[];
    html: string;

    setFrom(from: string) {     // 2-.. . (TS) Otypowalem w kazdej metodzie...
        this.from = from;
        return this;
    }

    setTo(to: string) {
        this.to = to;
        return this;
    }

    setTitle(title: string) {
        this.title = title;
        return this;
    }

    setCC(cc: string[]) {
        this.cc = cc;
        return this;
    }
    setBCC(bcc: string[]) {
        this.bcc = bcc;
        return this;
    }

    setHTML(html: string) {
        this.html = html;
        return this;
    }

    build() {
        return new Email(this.from, this.to, this.title, this.cc, this.bcc, this.html);
    }
    //albo od razu zwrot w jsonie.

    // return JSON.stringify(new Email(this.from, this.to, this.title, this.cc, this.bcc, this.html));
}

const email1 = new EmailBuilder().setFrom('jan@op.pl').setTo('ala@wp.pl').setCC(['marek@op.pl', 'ja@gg.pl']).build()

const emailWjsonie = JSON.stringify(email1)

console.log(email1)
console.log(emailWjsonie)










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
