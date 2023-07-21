/* Cele główne:
Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który otrzyma.

function getMyAge(input) {
  // ...
}
const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990); //wyniki wszystkich result mają być identyczne */



function getMyAge(input) {
  const currentYear = new Date().getFullYear();

  if (typeof input.getFullYear === 'function') {
    if (input.getFullYear() >= currentYear) return "bledny format - podales przyszla date"; // *ad1.
    return currentYear - input.getFullYear();
  }

  if ((typeof input === 'number' || typeof input === 'string') && /^[0-9]{4}$/.test(input)) {
    if (Number(input) >= currentYear) return "bledny format - podales przyszla date";

    return currentYear - Number(input);
  }

  return 'Błędny fomat daty';
};

const myAge = getMyAge(1234);
console.log(myAge)

/* Ad1. WALIDACJA Date() -------
Zamiast (typeof input.getFullYear === 'function') spotykałem się również z poniższymi walidacjami, które można użyć na równi:
- if(typeof Date.parse(input))...
- if(input instanceof Date && !isNaN(one))
*/