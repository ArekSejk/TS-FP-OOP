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



interface IContact{
    name: string,
    lastName: string,
    email: string
    modificationDate: Date;
    uuid: number;
    setName: (param: string) => void;
    setLastName: (param: string) => void;
    setEmail: (param: string) => void;
}


class Contact implements IContact {
    name: string;
    lastName: string;
    email: string;
    modificationDate: Date;
    uuid: number;

    constructor(name: string, lastName: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.modificationDate = new Date();
        this.uuid = Math.floor(Math.random() * 1000000);
    }

    setName(newName: string) {
        this.name = newName;
        this.modificationDate = new Date();
    }

    setLastName(newLastName: string) {
        this.lastName = newLastName;
        this.modificationDate = new Date();
    }

    setEmail(newEmail: string) {
        this.email = newEmail;
        this.modificationDate = new Date();
    }
}



interface IGroup {
    contactList: Array<Contact>;
    name: string;
    uuid: number;
    setName: (param: string) => void;
    addContact: (param: Contact) => void;
    removeContact: (contactName: string, contactLastName: string) => void;
    isInGroup: (contact: Contact) => boolean;
}


class Group implements IGroup {
    contactList: Array<Contact> = [];
    name: string;
    uuid: number;

    constructor(name: string) {
        this.name = name;
        this.uuid = Math.floor(Math.random() * 1000000000);
    }

    setName(newName: string) {
        this.name = newName;
    }

    addContact(contact: Contact) {
        this.contactList.push(contact);
    }

    removeContact(contactName: string, contactLastName: string) {
        const indexToRemove = this.contactList.findIndex(e => e.name === contactName && e.lastName === contactLastName);

        if (indexToRemove !== -1) this.contactList.splice(indexToRemove, 1);
    }

    isInGroup(contact: Contact) {
        if (this.contactList.find(e => e.uuid === contact.uuid) !== undefined) return true;

        return false;
    }
}





class Validator {

    static isValidContactName(name: string) {
        return ((/^[a-z]{2,}$/i.test(name)))
    }

    static isValidEmail(email: string) {
        return (/^[a-z\d]+[-\w\.]*@[a-z\d]+([-\w]+\.)[a-z]{2,6}$/i.test(email));
    }

    static isValidGroupName(name: string) {
        return (/^.{3,}$/i.test(name));
    }
}




interface IAddressBook {
    contacts: Array<Contact>;
    groups: Array<Group>;

    findGroupIndex: (groupName: string) => number;
    findContactIndex: (contactName: string, contactLastName: string) => number;
    createContact: (name: string, lastName: string, email: string) => void;
    createGroup: (name: string) => void;
    deleteContact: (contactName: string, contactLastName: string) => void;
    deleteGroup: (name: string) => void;
    addContactToGroup: (contactName: string, contactLastName: string, groupName: string) => void;
    deleteContactFromGroup: (contactName: string, contactLastName: string, groupName: string) => void;
    findContact: (phrase: string) => Contact[];
    changeContactName: (currName: string, currLastName: string, newName: string, newLastName: string) => void;
    changeContactEmail: (contactName: string, contactLastName: string, newEmail: string) => void;
    changeGroupName: (currName: string, newName: string) => void;
}

class AddressBook implements IAddressBook {
    contacts: Array<Contact> = [];
    groups: Array<Group> = [];

    findGroupIndex(groupName: string): number {
        return this.groups.findIndex(e => e.name.toLowerCase() === groupName.toLowerCase());
    }

    findContactIndex(contactName: string, contactLastName: string): number {
        return this.contacts.findIndex(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase());
    }

    createContact(name: string, lastName: string, email: string) {

        if (!Validator.isValidContactName(name)) return;
        if (!Validator.isValidContactName(lastName)) return;
        if (!Validator.isValidEmail(email)) return;

        const contactInstance = new Contact(name, lastName, email);
        this.contacts.push(contactInstance);
    }

    createGroup(name: string) {
        if (!Validator.isValidGroupName(name)) return;

        if (this.findGroupIndex(name) !== -1) return;

        const groupInstance = new Group(name);
        this.groups.push(groupInstance)
    }

    deleteContact(contactName: string, contactLastName: string) {
        //gdyby bylo wiecej contact o tym samym name/lastname szukac tez po email/uuid..
        const contactIndex = this.findContactIndex(contactName, contactLastName);
        if (contactIndex === -1) return;

        this.contacts.splice(contactIndex, 1);

        const groupIndex = this.groups.findIndex(e => e.contactList.find(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase()));

        if (groupIndex === -1) return;

        const groupName = this.groups[groupIndex].name;

        this.deleteContactFromGroup(contactName, contactLastName, groupName);
    }

    deleteGroup(name: string) {
        this.groups.splice(this.findGroupIndex(name), 1);
    }

    addContactToGroup(contactName: string, contactLastName: string, groupName: string) {

        this.groups[this.findGroupIndex(groupName)].contactList.push(this.contacts[this.findContactIndex(contactName, contactLastName)]);
    }

    deleteContactFromGroup(contactName: string, contactLastName: string, groupName: string) {

        const contactIndexInGroup = this.groups[this.findGroupIndex(groupName)].contactList.findIndex(e => e.name.toLowerCase() === contactName.toLowerCase() && e.lastName.toLowerCase() === contactLastName.toLowerCase());

        if (contactIndexInGroup !== -1) this.groups[this.findGroupIndex(groupName)].contactList.splice(contactIndexInGroup, 1);
    }

    findContact(phrase: string): Contact[] {

        return this.contacts.filter(e => {
            if (Object.values(e).toString().toLowerCase().includes(phrase.toLowerCase())) return true;

            return false;
        });
    }

    changeContactName(currName: string, currLastName: string, newName: string, newLastName: string) {
        if (!Validator.isValidContactName(newName)) return;
        if (!Validator.isValidContactName(newLastName)) return;

        const contactIndex = this.findContactIndex(currName, currLastName);

        this.contacts[contactIndex].setName(newName);
        this.contacts[contactIndex].setLastName(newLastName);
        //musialem uzyc zmiennej z indx poniewaz po wykonaniu linijki setName juz porownanie sie nie zgadzalo, bo imie bylo zmienione, wiec dzialalo tylko dla jednego z nich
    }

    changeContactEmail(contactName: string, contactLastName: string, newEmail: string) {
        if (!Validator.isValidEmail(newEmail)) return;

        this.contacts[this.findContactIndex(contactName, contactLastName)].setEmail(newEmail);
    }

    changeGroupName(currName: string, newName: string) {
        if (!Validator.isValidGroupName(newName)) return;

        this.groups[this.findGroupIndex(currName)].setName(newName)
    }
}



// const ksiazka1 = new AddressBook();
// ksiazka1.createContact("Jola", "Kowalska", "sssss@wp.pl")
// ksiazka1.createGroup("rodzina"
// ksiazka1.changeContactEmail('jola', 'kowalska', 'baba@op.pl'))
// ksiazka1.addContactToGroup('jola', 'kowalska', 'rodzina')
// // ksiazka1.deleteContact('jola', "kowalska")
// ksiazka1.deleteGroup("rodzina")
// moglbym zrobic jeszcze przy zmianie w contacie zmienia sie w kazdej grupie/addressBook, w ktorej bylo, ale brak polecenia



