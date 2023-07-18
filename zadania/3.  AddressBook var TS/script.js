/* Cele główne
 Stwórz strukturę danych związaną z biblioteką, pełen opis znajduję się w kodzie poniżej
 Wypracuj obiekt charakteryzujący pojedyńczy kontakt
 Wypracuj obiekt charakteryzujący grupę kontakt
 Wypracuj obiekt charakteryzujący książkę adresową

 Kawałek kodu dla lepszego początku!
class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}

class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}

class AddressBook {
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}*/
var Contact = /** @class */ (function () {
    function Contact(name, lastName, email) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.modificationDate = new Date();
        this.uuid = Math.floor(Math.random() * 1000000);
    }
    Contact.prototype.setName = function (newName) {
        this.name = newName;
        this.modificationDate = new Date();
    };
    Contact.prototype.setLastName = function (newLastName) {
        this.lastName = newLastName;
        this.modificationDate = new Date();
    };
    Contact.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
        this.modificationDate = new Date();
    };
    return Contact;
}());
var kontakt1 = new Contact("Marek", "Nowak", "mnowak@op.pl");
kontakt1.setName("Jola");
kontakt1.setLastName("Kowalska");
kontakt1.setEmail("Jkow@wp.pl");
console.log(kontakt1);
// class Group {
//     contactList = [];
//     constructor(name) {
//         this.name = name;
//         this.uuid = Math.floor(Math.random() * 1000000000);
//     }
//     setName(newName) {
//         this.name = newName;
//     }
//     addContact(contact) {
//         this.contactList.push(contact);
//     }
//     removeContact(contactName, contactLastName) {
//         const indexToRemove = this.contactList.findIndex(e => e.name === contactName && e.lastName === contactLastName);
//         if (indexToRemove !== -1) this.contactList.splice(indexToRemove, 1);
//     }
//     isInGroup(contact) {
//         if (this.contactList.find(e => e.uuid === contact.uuid) !== undefined) return true;
//         return false;
//     }
// }
// class Validator {
//     static isValidContactName(name) {
//         return ((/^[a-z]{2,}$/i.test(name)))
//     }
//     static isValidEmail(email) {
//         return (/^[a-z\d]+[-\w\.]*@[a-z\d]+([-\w]+\.)[a-z]{2,6}$/i.test(email));
//     }
//     static isValidGroupName(name) {
//         return (/^.{3,}$/i.test(name));
//     }
// }
// class AddressBook {
//     contacts = [];
//     groups = [];
//     createContact(name, lastName, email) {
//         if (!Validator.isValidContactName(name)) return 'zla wiadomosc name';
//         if (!Validator.isValidContactName(lastName)) return 'zla wiadomosc lastName';
//         if (!Validator.isValidEmail(email)) return 'zla wartosc email';
//         const contactInstance = new Contact(name, lastName, email);
//         this.contacts.push(contactInstance);
//     }
//     findGroupIndex(groupName) {
//         return this.groups.findIndex(e => e.name.toLowerCase() === groupName.toLowerCase());
//     }
//     findContactIndex(contactName, contactLastName) {
//         return this.contacts.findIndex(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase());
//     }
//     deleteContact(contactName, contactLastName) {
//         //gdyby bylo wiecej contactow o tym samym name i lastname warto szukac tez po email/uuid..
//         this.contacts.splice(this.findContactIndex(contactName, contactLastName), 1);
//         const groupIndex = this.groups.findIndex(e => e.contactList.find(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase()));
//         if (groupIndex === -1) return;
//         const groupName = this.groups[groupIndex].name;
//         return this.deleteContactFromGroup(contactName, contactLastName, groupName);
//     }
//     createGroup(name) {
//         if (!Validator.isValidGroupName(name)) return 'zla wartosc name';
//         if (this.findGroupIndex(name) !== -1) return 'grupa o tej nazwie juz istnieje';
//         const groupInstance = new Group(name);
//         this.groups.push(groupInstance)
//     }
//     deleteGroup(name) {
//         this.groups.splice(this.findGroupIndex(name), 1);
//     }
//     addContactToGroup(contactName, contactLastName, groupName) {
//         this.groups[this.findGroupIndex(groupName)].contactList.push(this.contacts[this.findContactIndex(contactName, contactLastName)]);
//     }
//     deleteContactFromGroup(contactName, contactLastName, groupName) {
//         const contactIndexInGroup = this.groups[this.findGroupIndex(groupName)].contactList.findIndex(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase());
//         if (contactIndexInGroup !== -1) return this.groups[this.findGroupIndex(groupName)].contactList.splice(contactIndexInGroup, 1);
//     }
//     findContact(phrase) {
//         return this.contacts.filter(e => {
//             if (Object.values(e).toString().toLowerCase().includes(phrase.toLowerCase())) return true;
//             return false;
//         });
//     }
//     changeContactName(currName, currLastName, newName, newLastName) {
//         if (!Validator.isValidContactName(newName)) return 'zla wartosc name';
//         if (!Validator.isValidContactName(newLastName)) return 'zla wartosc lastName';
//         const contactIndex = this.findContactIndex(currName, currLastName);
//         this.contacts[contactIndex].setName(newName);
//         this.contacts[contactIndex].setLastName(newLastName);
//         //musialem uzyc zmiennej z indx poniewaz po wykonaniu linijki setName juz porownanie sie nie zgadzalo, bo imie bylo zmienione, wiec dzialalo tylko dla jednego z nich
//     }
//     changeContactEmail(contactName, contactLastName, newEmail) {
//         if (!Validator.isValidEmail(newEmail)) return 'zla wartosc email';
//         this.contacts[this.findContactIndex(contactName, contactLastName)].setEmail(newEmail);//setEmail z cl.Contact
//     }
//     changeGroupName(currName, newName) {
//         if (!Validator.isValidGroupName(newName)) return 'zla wartosc name';
//         this.groups[this.findGroupIndex(currName)].setName(newName)//setName z cl.Contact
//     }
// }
// const book1 = new AddressBook();
// book1.createContact('Angelika', 'Berkowska', 'angee@gmail.com');
// book1.createContact('Marek', "Nowak", 'm.nowak@op.pl');
// //book1.createContact('Franciszek', 'Kowalski', 'francesco44@wp.pl');
// //book1.createContact('Janina', 'Hampel', 'ruda_janka@tlen.pl');
// book1.createGroup('pierwsza');
// book1.createGroup('druga');
// book1.addContactToGroup('Angelika', 'Berkowska', 'pierwsza');
// book1.addContactToGroup('Marek', "Nowak", 'pierwsza');
// book1.addContactToGroup('Franciszek', 'Kowalski', 'druga');
// book1.addContactToGroup('Janina', 'Hampel', 'druga');
// console.log(...book1.groups)
