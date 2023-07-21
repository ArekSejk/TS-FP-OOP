/*Cele główne
1.Stwórz 2 klasy: User i App
2. Klasa User ma dostępne dwa poziomy dostępu: normal i admin.
3. Powinna umożliwiać zmianę hasła, emaila oraz poziomu dostępu.
 User z poziomem dostępu = "admin" może zmieniać hasła, emaile oraz poziomy dostępu innych użytkowników.
 Klasa App powinna zarządzać relacjami pomiędzy użytkownikami.
 Zawiera listę użytkowników, pozwala tworzyć nowych użytkowników o różnych poziomach dostępu.
Cele opcjonalne do wykonania
 Stwórz klase pomocniczną Validator, która będzie posiadała metody statyczne odpowiedzalne za walidacje usera.Jeżeli któraś z walidacji się nie powiedzie, instancja ma nie być tworzona, tylko ma zwracać error z odpowiednim komunikatem o niepowiedzionej walidacji.W razie problemów przy tworzeniu klasy validator, polecam zapoznać się z dokumentacja biblioteki is.js.

 / Podczas walidacji upewnij się, że:
// - email jest poprawnym emailem
// - hasło ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY 2023/04/13
// - imię i lastName musi być niepuste

class User{
 imię
 lastName
 datę urodzenia
 hasło
 płeć
 adres email
 accessLevel dostępu = "user" | "admin";
}

class App{
 listOfUsers
 createUser(...)
 createAdmin(...)
 wszystkie metody w których admin ingeruje we właściwości innych użytkowników
}
*/

class Validator {
    static isNameValid(name: string) {
        return (/^.+$/i.test(name))
    }

    static isEmailValid(email: string) {
        return (/^[a-z\d]+[-\w\.]*@[a-z\d]+([-\w]+\.)[a-z]{2,6}$/i.test(email));
    }

    static isSexValid(sex: string) {
        return (sex === 'male' || sex === 'female')
    }

    static isPasswordValid(password: string) {
        return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(password));
    }

    static isAccessLevelValid(accessLevel: string) {
        return (accessLevel === 'admin' || accessLevel === 'user');
    }

    static isBirthDateValid(birthDate: string) {
        return (/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/([0-9]{2}?[0-9]{2})$/.test(birthDate));
    }
}

// Pytania:
// 1. Czy zwrotka z walidatorów ma byc typowana?

interface IUser {
    name: string,
    lastName: string,
    birthDate: string,
    password: string,
    sex: 'male' | 'female',
    email: string,
    accessLevel: 'user' | 'admin',
    formatBirthDate: (birthDate: string) => string;//ta met jest dla mnie.musi tu byc?
    setPassword: (newPassword: string) => void;
    setEmail: (newEmail: string) => void;
    setAccessLevel: (newAccessLevel: 'user' | 'admin') => void;
}

class User {
    name: string;
    lastName: string;
    birthDate: string;
    password: string;
    sex: 'male' | 'female';
    email: string;
    accessLevel: 'user' | 'admin';

    constructor(name: string, lastName: string, birthDate: string, password: string, sex: 'male' | 'female', email: string, accessLevel: 'user' | 'admin') {           // ????

        if (!Validator.isNameValid(name)) throw new Error('niewlasciwe name');
        if (!Validator.isNameValid(lastName)) throw new Error('niewlascie lastName');
        if (!Validator.isEmailValid(email)) throw new Error('niewlasciwy email');
        if (!Validator.isSexValid(sex)) throw new Error('niewlasciwa sex');
        if (!Validator.isPasswordValid(password)) throw new Error('niewlasciwe password');
        if (!Validator.isAccessLevelValid(accessLevel)) throw new Error('niewlasciwy poziom')
        if (!Validator.isBirthDateValid(birthDate)) throw new Error('zla data uro');

        this.name = name;
        this.lastName = lastName;
        this.birthDate = this.formatBirthDate(birthDate);
        this.password = password;
        this.sex = sex;
        this.email = email;
        this.accessLevel = accessLevel;
    }

    formatBirthDate(birthDate: string) {

        const regex = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/[0-9]{2}?([0-9]{2})$/;

        const birthDateInNewFormat = birthDate.replace(regex, "$1/$2/$3")

        return birthDateInNewFormat;

    }

    setPassword(newPassword: string) {
        if (!Validator.isPasswordValid(newPassword)) throw new Error('niewlasciwe password');
        this.password = newPassword;
    }

    setEmail(newEmail: string) {
        if (!Validator.isEmailValid(newEmail)) throw new Error('niewlasciwy email');
        this.email = newEmail;
    }

    setAccessLevel(newAccessLevel: 'user' | 'admin') {
        if (!Validator.isAccessLevelValid(newAccessLevel)) throw new Error('niewlasciwy poziom')
        this.accessLevel = newAccessLevel;
    }
}
const us = new User("Jacek", "Nowak", "10/10/2010", "abrakadabra13#A", "male", "ajak@wp.pl", "user")
// console.log(us)




interface IApp {
    listOfUsers: User[];
    createUser: (name: string, lastName: string, birthDate: string, password: string, sex: 'male' | 'female', email: string) => void;
    createAdmin: (name: string, lastName: string, birthDate: string, password: string, sex: 'male' | 'female', email: string) => void;
    findUserOrAdminIndex: (email: string) => number;
    checkAccessLevel: (email: string) => number;
    setPassword: (adminEmail: string, userEmail: string, newPassword: string) => void;
    setEmail: (adminEmail: string, userEmail: string, newEmail: string) => void;
    setAccessLevel:(adminEmail: string, userEmail: string, newAccessLevel: 'user' | 'admin')=> void;
}

class App {
    listOfUsers: User[] = [];

    createUser(name: string, lastName: string, birthDate: string, password: string, sex: 'male' | 'female', email: string) {
        try {
            const userInstance = new User(name, lastName, birthDate, password, sex, email, 'user');
            this.listOfUsers.push(userInstance)
        } catch (error) {
            console.log(error)
            return
        }
    }

    createAdmin(name: string, lastName: string, birthDate: string, password: string, sex: 'male' | 'female', email: string) {

        try {
            const userInstance = new User(name, lastName, birthDate, password, sex, email, "admin");
            this.listOfUsers.push(userInstance)
        } catch (error) {
            console.log(error)
            return
        }
    }

    findUserOrAdminIndex(email: string) {
        return this.listOfUsers.findIndex(e => e.email.toLowerCase() === email.toLowerCase());
    };

    checkAccessLevel(email: string) {
        const indexUser = this.findUserOrAdminIndex(email);

        if (indexUser === -1) return -1;

        if (this.listOfUsers[indexUser].accessLevel === 'user') return -1;//nie masz uprawnien do zmiany

        return indexUser;
    }

    setPassword(adminEmail: string, userEmail: string, newPassword: string) {
        try {

            if (this.checkAccessLevel(adminEmail) === -1) return;//brak tego usera/uprawnien

            if (this.findUserOrAdminIndex(userEmail) === -1) return;

            this.listOfUsers[this.findUserOrAdminIndex(userEmail)].setPassword(newPassword);
        } catch (error) {
            console.log(error)
            return;
        }
    }

    setEmail(adminEmail: string, userEmail: string, newEmail: string) {

        try {
            if (this.checkAccessLevel(adminEmail) === -1) return;

            if (this.findUserOrAdminIndex(userEmail) === -1) return;
            this.listOfUsers[this.findUserOrAdminIndex(userEmail)].setEmail(newEmail);
        } catch (error) {
            console.log(error)
            return;
        }
    }

        setAccessLevel(adminEmail: string, userEmail: string, newAccessLevel: 'user'|'admin') {

            try {

                if (this.checkAccessLevel(adminEmail) === -1) return;

                if (this.findUserOrAdminIndex(userEmail) === -1) return;

                this.listOfUsers[this.findUserOrAdminIndex(userEmail)].setAccessLevel(newAccessLevel);
            } catch (error) {
                console.log(error)
                return
            }
        }
}
const myApp = new App();


myApp.createAdmin('Jan', 'Jaki', '12/13/2000', 'a!Dja4@#', 'male', 'aaa@op.pl')
myApp.createUser('Ula', 'Pakos', '10/21/2012', 'Arsadiu&', 'male', 'p@op.pl')
myApp.createUser('Ola', 'Bala', '10/5/1999', 'Jaia*&%fd', 'male', 'xxx@op.pl')


console.log(...myApp.listOfUsers)
