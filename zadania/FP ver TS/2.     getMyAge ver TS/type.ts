/* Cele główne:
Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który otrzyma.

function getMyAge(input) {
  // ...
}
const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990); //wyniki wszystkich result mają być identyczne */



type InputAccepted = Date | number | string;

type GetMyAge = (Input: InputAccepted) => number | void;



const getMyAge: GetMyAge= function (input: InputAccepted): number | void {

    const currentYear = new Date().getFullYear();

    if (typeof input === 'number') {
        if (input >= currentYear) return;

        return currentYear - input;
    }

    if (typeof input === 'string' && /^[0-9]{4}$/.test(input)) {
        if (Number(input) >= currentYear) return;

        return currentYear - Number(input);
    }

    if (input instanceof Date) {//gdy wpisze blednie w inpucie np. getMyAge(new Date(2100, "a"))to wyskoczy NaN w consoli, dlatego powinienem jeszcze zwalidowac zeby sie upewnic. W zwyklej js to !isNaN(input), a tu spr czy to na bank data:
        if (typeof input.getFullYear() !== 'function') return;
      
        if (input.getFullYear() >= currentYear) return;

        return currentYear - input.getFullYear();
    }

    return;
}
const myAge = getMyAge(new Date(2100));
console.log(myAge)






/* Ad1. WALIDACJA Date() -------
Zamiast (typeof input.getFullYear === 'function') spotykałem się również z poniższymi walidacjami, które można użyć na równi:
- if(typeof Date.parse(input))...
- if(input instanceof Date && !isNaN(input))
*/

