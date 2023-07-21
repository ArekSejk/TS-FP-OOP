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
var User = /** @class */ (function () {
    function User(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.uuid = Math.floor(Math.random() * 1000000);
    }
    return User;
}());
var Book = /** @class */ (function () {
    function Book(title, author, picture, description) {
        this.title = title;
        this.author = author;
        this.uuid = Math.floor(Math.random() * 1000000);
        this.picture = picture;
        this.description = description;
    }
    return Book;
}());
var Booking = /** @class */ (function () {
    function Booking(userName, userLastName) {
        this.borrowedBookList = [];
        this.user = new User(userName, userLastName);
        this.borrowDate = new Date();
        this.maxReturnDate = new Date(this.borrowDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.chargeAmount = 5; //5 zl za 1 rozpocz. dzien spoznienia z 1 ksiazka
        this.chargeSum = 0;
    }
    Booking.prototype.findBookIndex = function (bookTitle) {
        return this.borrowedBookList.findIndex(function (e) { return e.title.toLowerCase() === bookTitle.toLowerCase(); });
    };
    Booking.prototype.addBookToBorrowedList = function (book) {
        this.borrowedBookList.push(book);
    };
    Booking.prototype.deleteBookFromBorrowedList = function (bookTitle) {
        if (this.findBookIndex(bookTitle) === -1)
            return;
        this.borrowedBookList.splice(this.findBookIndex(bookTitle), 1);
    };
    Booking.prototype.countCharge = function (actualReturnDate) {
        var timeDifference = (this.maxReturnDate.getTime()) - actualReturnDate;
        if (timeDifference >= 0)
            return console.log('no extra charge');
        var timeDifferenceInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return this.chargeSum += Math.abs(this.chargeAmount * timeDifferenceInDays);
    };
    Booking.prototype.returnBook = function (bookTitle) {
        if (this.findBookIndex(bookTitle) === -1)
            return;
        this.deleteBookFromBorrowedList(bookTitle);
        var actualReturnDate = (new Date()).getTime();
        var charge = this.countCharge(actualReturnDate);
        if (charge === undefined)
            return;
        return console.log("Extra charge is ".concat(charge, " pln"));
    };
    return Booking;
}());
var book1 = new Book('Pan Tadeusz', 'A.Mickiewicz', 'panTad.jpg', 'Dawno,dawno temu..');
var book2 = new Book('Potop', 'H.Sienkiewicz', 'hSienk.jpg', 'Byly sobie swinki 3...');
var book3 = new Book('Marysieńka', 'A.Kopacka', 'aKop.jpg', 'Marysia była bardzo...');
var booking1 = new Booking('Marek', 'Kondrad');
booking1.addBookToBorrowedList(book1);
booking1.addBookToBorrowedList(book2);
var Library = /** @class */ (function () {
    function Library() {
        this.allLibraryBookList = [];
        this.availableBookList = [];
        this.bookingsList = [];
        this.userList = [];
    }
    Library.prototype.findBookIndex = function (bookTitle, list) {
        return list.findIndex(function (e) { return e.book.title.toLowerCase() === bookTitle.toLowerCase(); });
    };
    Library.prototype.addBookToLibrary = function (book) {
        var bookIndex = this.findBookIndex(book.title, this.allLibraryBookList);
        if (bookIndex === -1) {
            this.allLibraryBookList.push({ book: book, quantity: 1 });
            this.availableBookList.push({ book: book, quantity: 1 });
            return;
        }
        this.allLibraryBookList[bookIndex].quantity++;
        this.addBookToAvailableList(book.title);
    };
    Library.prototype.addBookToAvailableList = function (bookTitle) {
        var bookIndexInAvailables = this.findBookIndex(bookTitle, this.availableBookList);
        if (bookIndexInAvailables !== -1)
            return this.availableBookList[bookIndexInAvailables].quantity++;
        var bookIndexInAllbooks = this.findBookIndex(bookTitle, this.allLibraryBookList);
        if (bookIndexInAllbooks === -1)
            return console.log('nie ma takiej ksiazki w bibliotece');
        this.availableBookList.push(this.allLibraryBookList[bookIndexInAllbooks]);
    };
    Library.prototype.deleteBookFromLibrary = function (bookTitle) {
        var bookIndexToDelete = this.findBookIndex(bookTitle, this.allLibraryBookList);
        if (bookIndexToDelete === -1)
            return;
        if (this.allLibraryBookList[bookIndexToDelete].quantity === 1) {
            this.allLibraryBookList.splice(bookIndexToDelete, 1);
            this.deleteBookFromAvailableList(bookTitle);
            return;
        }
        this.allLibraryBookList[bookIndexToDelete].quantity--;
        this.deleteBookFromAvailableList(bookTitle);
    };
    Library.prototype.deleteBookFromAvailableList = function (bookTitle) {
        var bookIndexToDelete = this.findBookIndex(bookTitle, this.availableBookList);
        if (bookIndexToDelete === -1)
            return;
        if (this.availableBookList[bookIndexToDelete].quantity === 1) {
            this.availableBookList.splice(bookIndexToDelete, 1);
            return;
        }
        this.availableBookList[bookIndexToDelete].quantity--;
    };
    Library.prototype.makeBooking = function (userName, userLastName, bookTitle) {
        var bookIndexInAvailablelList = this.findBookIndex(bookTitle, this.availableBookList);
        if (bookIndexInAvailablelList === -1)
            return console.log("book unavailable- booking canceled");
        var newBooking = new Booking(userName, userLastName);
        this.userList.push(newBooking.user);
        newBooking.addBookToBorrowedList(this.availableBookList[bookIndexInAvailablelList].book);
        this.bookingsList.push(newBooking);
        if (this.availableBookList[bookIndexInAvailablelList].quantity === 1) {
            this.availableBookList.splice(bookIndexInAvailablelList, 1);
            return;
        }
        this.availableBookList[bookIndexInAvailablelList].quantity--;
        // ZALOZENIEM JEST, ze REZERWACJA jest tworzona NA 1 KSIAZKE!!!
    };
    Library.prototype.returnBooking = function (userName, userLastName, bookTitle) {
        var findBookingIndex = this.bookingsList.findIndex(function (e) {
            return (e.user.name.toLowerCase() === userName.toLowerCase()) &&
                (e.user.lastName.toLowerCase() === userLastName.toLowerCase()) &&
                e.borrowedBookList.find(function (f) { return f.title.toLowerCase() === bookTitle.toLowerCase(); });
        }); //szukam rezerwacji na tego usera i ksiazke
        if (findBookingIndex === -1)
            return console.log('booking doesn\'t exist');
        this.bookingsList[findBookingIndex].returnBook(bookTitle); //metodą classy Booking usuwam z listy pozyczonych i naliczam oplate
        this.userList.splice(this.userList.findIndex(function (e) { return e.name.toLowerCase() === userName.toLowerCase() && e.lastName.toLowerCase() === userLastName.toLowerCase(); }), 1); //usuwam usera z listy userow
        this.availableBookList.push(this.allLibraryBookList[this.findBookIndex(bookTitle, this.allLibraryBookList)]); //dodaje oddana ksiazke do listy dostepnych
        this.bookingsList.splice(findBookingIndex, 1);
    };
    return Library;
}());
var biblioteka = new Library();
biblioteka.addBookToLibrary(book1);
biblioteka.addBookToLibrary(book2);
biblioteka.addBookToLibrary(book3);
biblioteka.addBookToLibrary(book3);
// console.log(...biblioteka.availableBookList)
//biblioteka.makeBooking('Marek', 'Janicki', 'marysieńka');
// biblioteka.makeBooking('Janusz', 'Wunderbaumer', 'potop');
// biblioteka.makeBooking('Jan', 'Janowicz', 'pan tadeusz')
// biblioteka.returnBooking('Janusz', 'Wunderbaumer', 'potop')
// console.log(...biblioteka.bookingsList)
