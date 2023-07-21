/* Cele główne
 Stwórz strukturę danych związaną z biblioteką, pełen opis znajduję się w kodzie poniżej
 Wypracuj obiekt charakteryzujący użytkownika
 Wypracuj obiekt charakteryzujący książkę
 Wypracuj obiekt charakteryzujący wypożyczenie
 Wypracuj obiekt charakteryzujący bibliotekę
Cele opcjonalne do wykonania
 Dodaj możliwość posiadania więcej niż jednej książki w bibliotece - będzie trzeba zmienić logikę dodawania i usuwania książki z biblioteki (np. jeżeli książka jest już w bibliotece to dodajemy do niej kolejną sztukę).

 Kawałek kodu dla lepszego początku!
class User {
    // Ma miec: Imie, Nazwisko, uuid
}

class Book {
    // Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
}

class Booking {
    // Booking dostaje użytkownika w constructorze

    // Ma mieć: datę wypożyczenia, datę zwrotu (+7d od wypożyczenia), listę wypożyczonych książek, kara
    
    // Ma umożliwiać: 
    // - usuwanie i dodawanie książki do listy wypożyczonych książek
    // - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie - 
    // każdy dzień zwłoki to naliczenie jakiejś kary. 
}

class Library {
    // Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
    // lista wypożyczeń, lista użytkowników
    
    // Ma umożliwiać: 
    // - dodawanie książek do listy
    // - usuwanie książek z listy
    // - wypożyczanie książki dla usera X
    // - oddanie wypożyczania książki
}*/




interface IUser {
    name: string;
    lastName: string;
    uuid: number;
}


class User implements IUser {
    name: string;
    lastName: string;
    uuid: number;

    constructor(name: string,
        lastName: string) {
        this.name = name;
        this.lastName = lastName;
        this.uuid = Math.floor(Math.random() * 1000000)
    }
}


interface IBook {
    title: string;
    author: string;
    uuid: number;
    picture: string;
    description: string;
}

class Book implements IBook {
    title: string;
    author: string;
    uuid: number;
    picture: string;
    description: string;

    constructor(title: string, author: string, picture: string, description: string) {
        this.title = title;
        this.author = author;
        this.uuid = Math.floor(Math.random() * 1000000);
        this.picture = picture;
        this.description = description;
    }
}


interface IBooking {
    borrowedBookList: Book[];
    user: User;
    borrowDate: Date;
    maxReturnDate: Date;
    chargeAmount: number;
    chargeSum: number;

    findBookIndex: (bookTitle: string) => number;
    addBookToBorrowedList: (book: Book) => void;
    deleteBookFromBorrowedList: (bookTitle: string) => void;
    countCharge: (actualReturnDate: number) => void;
    returnBook: (bookTitle: string) => void;
}


class Booking implements IBooking {
    borrowedBookList: Book[] = [];

    user: User;
    borrowDate: Date;
    maxReturnDate: Date;
    chargeAmount: number;
    chargeSum: number;

    constructor(userName: string, userLastName: string) {
        this.user = new User(userName, userLastName)
        this.borrowDate = new Date();
        this.maxReturnDate = new Date(this.borrowDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.chargeAmount = 5; //5 zl za 1 rozpocz. dzien spoznienia z 1 ksiazka
        this.chargeSum = 0;
    }

    findBookIndex(bookTitle: string) {
        return this.borrowedBookList.findIndex(e => e.title.toLowerCase() === bookTitle.toLowerCase());
    }

    addBookToBorrowedList(book: Book) {
        this.borrowedBookList.push(book);
    }

    deleteBookFromBorrowedList(bookTitle: string) {
        if (this.findBookIndex(bookTitle) === -1) return;
        this.borrowedBookList.splice(this.findBookIndex(bookTitle), 1)
    }

    countCharge(actualReturnDate: number) {
        const timeDifference = (this.maxReturnDate.getTime()) - actualReturnDate;

        if (timeDifference >= 0) return console.log('no extra charge');

        const timeDifferenceInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        return this.chargeSum += Math.abs(this.chargeAmount * timeDifferenceInDays);
    }

    returnBook(bookTitle: string) {
        if (this.findBookIndex(bookTitle) === -1) return;

        this.deleteBookFromBorrowedList(bookTitle);

        const actualReturnDate = (new Date()).getTime();

        const charge = this.countCharge(actualReturnDate);

        if (charge === undefined) return;

        return console.log(`Extra charge is ${charge} pln`);
    }
}

// const book1 = new Book('Pan Tadeusz', 'A.Mickiewicz', 'panTad.jpg', 'Dawno,dawno temu..')
// const book2 = new Book('Potop', 'H.Sienkiewicz', 'hSienk.jpg', 'Byly sobie swinki 3...')
// const book3 = new Book('Marysieńka', 'A.Kopacka', 'aKop.jpg', 'Marysia była bardzo...')

// const booking1 = new Booking('Marek', 'Kondrad')


// booking1.addBookToBorrowedList(book1)
// booking1.addBookToBorrowedList(book2)
// booking1.addBookToBorrowedList(book3)

// console.log(...booking1.borrowedBookList)

type Ksiazka = { book: Book, quantity: number };

interface ILibrary {
    allLibraryBookList: Ksiazka[];
    availableBookList: Ksiazka[];
    bookingsList: Booking[];
    userList: User[];

    findBookIndex: (bookTitle: string, list: Ksiazka[]) => number;
    addBookToLibrary: (book: Book) => void;
    addBookToAvailableList: (bookTitle: string) => void;
    deleteBookFromLibrary: (bookTitle: string) => void;
    deleteBookFromAvailableList: (bookTitle: string) => void;
    makeBooking: (userName: string, userLastName: string, bookTitle: string) => void;
    returnBooking: (userName: string, userLastName: string, bookTitle: string) => void;
}



class Library implements ILibrary {
    allLibraryBookList: Ksiazka[] = [];
    availableBookList: Ksiazka[] = [];
    bookingsList: Booking[] = [];
    userList: User[] = [];

    findBookIndex(bookTitle: string, list: Ksiazka[]) {//podaje w param.liste w ktorej szukam
        return list.findIndex(e => e.book.title.toLowerCase() === bookTitle.toLowerCase());
    }

    addBookToLibrary(book: Book) {//par.jest zmienna z obiektem ksiazki(a nie jej tytul!)
        const bookIndex = this.findBookIndex(book.title, this.allLibraryBookList);

        if (bookIndex === -1) {
            this.allLibraryBookList.push({ book, quantity: 1 });
            this.availableBookList.push({ book, quantity: 1 });
            return;
        }

        this.allLibraryBookList[bookIndex].quantity++;

        this.addBookToAvailableList(book.title);
    }

    addBookToAvailableList(bookTitle: string) {
        const bookIndexInAvailables = this.findBookIndex(bookTitle, this.availableBookList);

        if (bookIndexInAvailables !== -1) {
            this.availableBookList[bookIndexInAvailables].quantity++
            return
        };

        const bookIndexInAllbooks = this.findBookIndex(bookTitle, this.allLibraryBookList);

        if (bookIndexInAllbooks === -1) return console.log('nie ma takiej ksiazki w bibliotece');

        this.availableBookList.push(this.allLibraryBookList[bookIndexInAllbooks])
    }

    deleteBookFromLibrary(bookTitle: string) {
        const bookIndexToDelete = this.findBookIndex(bookTitle, this.allLibraryBookList);

        if (bookIndexToDelete === -1) return;

        if (this.allLibraryBookList[bookIndexToDelete].quantity === 1) {
            this.allLibraryBookList.splice(bookIndexToDelete, 1);
            this.deleteBookFromAvailableList(bookTitle);
            return;
        }

        this.allLibraryBookList[bookIndexToDelete].quantity--;

        this.deleteBookFromAvailableList(bookTitle);
    }

    deleteBookFromAvailableList(bookTitle: string) {
        const bookIndexToDelete = this.findBookIndex(bookTitle, this.availableBookList);

        if (bookIndexToDelete === -1) return;

        if (this.availableBookList[bookIndexToDelete].quantity === 1) {
            this.availableBookList.splice(bookIndexToDelete, 1);
            return;
        }

        this.availableBookList[bookIndexToDelete].quantity--;
    }

    makeBooking(userName: string, userLastName: string, bookTitle: string) {
        const bookIndexInAvailablelList = this.findBookIndex(bookTitle, this.availableBookList);

        if (bookIndexInAvailablelList === -1) return console.log("book unavailable- booking canceled");

        const newBooking = new Booking(userName, userLastName);

        this.userList.push(newBooking.user);

        newBooking.addBookToBorrowedList(this.availableBookList[bookIndexInAvailablelList].book);

        this.bookingsList.push(newBooking)

        if (this.availableBookList[bookIndexInAvailablelList].quantity === 1) {
            this.availableBookList.splice(bookIndexInAvailablelList, 1);
            return;
        }

        this.availableBookList[bookIndexInAvailablelList].quantity--;

        // ZALOZENIEM JEST, ze REZERWACJA jest tworzona NA 1 KSIAZKE!!!
    }

    returnBooking(userName: string, userLastName: string, bookTitle: string) {
        const findBookingIndex = this.bookingsList.findIndex(e =>
            (e.user.name.toLowerCase() === userName.toLowerCase()) &&
            (e.user.lastName.toLowerCase() === userLastName.toLowerCase()) &&
            e.borrowedBookList.find(f => f.title.toLowerCase() === bookTitle.toLowerCase())
        )//szukam rezerwacji na tego usera i ksiazke

        if (findBookingIndex === -1) return console.log('booking doesn\'t exist');

        this.bookingsList[findBookingIndex].returnBook(bookTitle)//metodą classy Booking usuwam z listy pozyczonych i naliczam oplate

        this.userList.splice(this.userList.findIndex(e => e.name.toLowerCase() === userName.toLowerCase() && e.lastName.toLowerCase() === userLastName.toLowerCase()), 1) //usuwam usera z listy userow

        this.availableBookList.push(this.allLibraryBookList[this.findBookIndex(bookTitle, this.allLibraryBookList)])//dodaje oddana ksiazke do listy dostepnych

        this.bookingsList.splice(findBookingIndex, 1)
    }
}
// const biblioteka = new Library();

// biblioteka.addBookToLibrary(book1)
// biblioteka.addBookToLibrary(book2)
// biblioteka.addBookToLibrary(book3)
// biblioteka.addBookToLibrary(book3)

// console.log(...biblioteka.availableBookList)

//biblioteka.makeBooking('Marek', 'Janicki', 'marysieńka');
// biblioteka.makeBooking('Janusz', 'Wunderbaumer', 'potop');
// biblioteka.makeBooking('Jan', 'Janowicz', 'pan tadeusz')
// biblioteka.returnBooking('Janusz', 'Wunderbaumer', 'potop')
// console.log(...biblioteka.bookingsList)




