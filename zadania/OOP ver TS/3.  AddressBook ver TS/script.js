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
var Group = /** @class */ (function () {
    function Group(name) {
        this.contactList = [];
        this.name = name;
        this.uuid = Math.floor(Math.random() * 1000000000);
    }
    Group.prototype.setName = function (newName) {
        this.name = newName;
    };
    Group.prototype.addContact = function (contact) {
        this.contactList.push(contact);
    };
    Group.prototype.removeContact = function (contactName, contactLastName) {
        var indexToRemove = this.contactList.findIndex(function (e) { return e.name === contactName && e.lastName === contactLastName; });
        if (indexToRemove !== -1)
            this.contactList.splice(indexToRemove, 1);
    };
    Group.prototype.isInGroup = function (contact) {
        if (this.contactList.find(function (e) { return e.uuid === contact.uuid; }) !== undefined)
            return true;
        return false;
    };
    return Group;
}());
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.isValidContactName = function (name) {
        return ((/^[a-z]{2,}$/i.test(name)));
    };
    Validator.isValidEmail = function (email) {
        return (/^[a-z\d]+[-\w\.]*@[a-z\d]+([-\w]+\.)[a-z]{2,6}$/i.test(email));
    };
    Validator.isValidGroupName = function (name) {
        return (/^.{3,}$/i.test(name));
    };
    return Validator;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
        this.groups = [];
    }
    AddressBook.prototype.findGroupIndex = function (groupName) {
        return this.groups.findIndex(function (e) { return e.name.toLowerCase() === groupName.toLowerCase(); });
    };
    AddressBook.prototype.findContactIndex = function (contactName, contactLastName) {
        return this.contacts.findIndex(function (e) { return e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase(); });
    };
    AddressBook.prototype.createContact = function (name, lastName, email) {
        if (!Validator.isValidContactName(name))
            return;
        if (!Validator.isValidContactName(lastName))
            return;
        if (!Validator.isValidEmail(email))
            return;
        var contactInstance = new Contact(name, lastName, email);
        this.contacts.push(contactInstance);
    };
    AddressBook.prototype.createGroup = function (name) {
        if (!Validator.isValidGroupName(name))
            return;
        if (this.findGroupIndex(name) !== -1)
            return;
        var groupInstance = new Group(name);
        this.groups.push(groupInstance);
    };
    AddressBook.prototype.deleteContact = function (contactName, contactLastName) {
        //gdyby bylo wiecej contact o tym samym name/lastname szukac tez po email/uuid..
        var contactIndex = this.findContactIndex(contactName, contactLastName);
        if (contactIndex === -1)
            return;
        this.contacts.splice(contactIndex, 1);
        var groupIndex = this.groups.findIndex(function (e) { return e.contactList.find(function (e) { return e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase(); }); });
        if (groupIndex === -1)
            return;
        var groupName = this.groups[groupIndex].name;
        this.deleteContactFromGroup(contactName, contactLastName, groupName);
    };
    AddressBook.prototype.deleteGroup = function (name) {
        this.groups.splice(this.findGroupIndex(name), 1);
    };
    AddressBook.prototype.addContactToGroup = function (contactName, contactLastName, groupName) {
        this.groups[this.findGroupIndex(groupName)].contactList.push(this.contacts[this.findContactIndex(contactName, contactLastName)]);
    };
    AddressBook.prototype.deleteContactFromGroup = function (contactName, contactLastName, groupName) {
        var contactIndexInGroup = this.groups[this.findGroupIndex(groupName)].contactList.findIndex(function (e) { return e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase(); });
        if (contactIndexInGroup !== -1)
            this.groups[this.findGroupIndex(groupName)].contactList.splice(contactIndexInGroup, 1);
    };
    AddressBook.prototype.findContact = function (phrase) {
        return this.contacts.filter(function (e) {
            if (Object.values(e).toString().toLowerCase().includes(phrase.toLowerCase()))
                return true;
            return false;
        });
    };
    AddressBook.prototype.changeContactName = function (currName, currLastName, newName, newLastName) {
        if (!Validator.isValidContactName(newName))
            return;
        if (!Validator.isValidContactName(newLastName))
            return;
        var contactIndex = this.findContactIndex(currName, currLastName);
        this.contacts[contactIndex].setName(newName);
        this.contacts[contactIndex].setLastName(newLastName);
        //musialem uzyc zmiennej z indx poniewaz po wykonaniu linijki setName juz porownanie sie nie zgadzalo, bo imie bylo zmienione, wiec dzialalo tylko dla jednego z nich
    };
    AddressBook.prototype.changeContactEmail = function (contactName, contactLastName, newEmail) {
        if (!Validator.isValidEmail(newEmail))
            return;
        this.contacts[this.findContactIndex(contactName, contactLastName)].setEmail(newEmail);
    };
    AddressBook.prototype.changeGroupName = function (currName, newName) {
        if (!Validator.isValidGroupName(newName))
            return;
        this.groups[this.findGroupIndex(currName)].setName(newName);
    };
    return AddressBook;
}());
// const ksiazka1 = new AddressBook();
// ksiazka1.createContact("Jola", "Kowalska", "sssss@wp.pl")
// ksiazka1.createGroup("rodzina"
// ksiazka1.changeContactEmail('jola', 'kowalska', 'baba@op.pl'))
// ksiazka1.addContactToGroup('jola', 'kowalska', 'rodzina')
// // ksiazka1.deleteContact('jola', "kowalska")
// ksiazka1.deleteGroup("rodzina")
// moglbym zrobic jeszcze przy zmianie w contacie zmienia sie w kazdej grupie/addressBook, w ktorej bylo, ale brak polecenia
