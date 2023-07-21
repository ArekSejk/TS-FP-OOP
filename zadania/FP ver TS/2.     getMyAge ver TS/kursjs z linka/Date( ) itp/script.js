/*Cele główne
-Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który otrzyma.

Kawałek kodu dla lepszego początku!
function getMyAge(input) {
    // ...
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990);

// wyniki result1, result2 i result3 mają być identyczne */


const now = new Date();
console.dir(now)

console.log(now.getDate())
console.log(now.getDay())
console.log(now.getYear())
console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getUTCMilliseconds())
console.log(now.getMinutes())
console.log(now.getMonth())
console.log(now.getSeconds())
console.log(now.getTime())

const pojemnikNaCzas = document.querySelector('.time-container')

const input = `Jest teraz rok ${now.getFullYear()}, ale skoro dopiero mamy miesiąc ${now.getMonth() + 1} to nadal jest zimno. Dokładna data to ${now.getFullYear()}.${now.getMonth() + 1}.${now.getDay()} i godzina ${now.getHours()}: ${now.getMinutes()}:${now.getSeconds()}`;

pojemnikNaCzas.innerText = input;
/* UWAGI DO POWYŻSZEGO:
-patrz, że w miesiącu dodalem +1 zeby bylo realnie!
-ten zapis ma minus, bo w dacie, minutach itp o wartosci 0-9 jest wyswietlana pojedyncza liczba bez zera (10:9:1).
- rozwiazanie dylematu ponizej
*/





function poprzedzZerem(i) {
    return (i < 10) ? '0' + i : i;
}

const nowyPojemnik = document.querySelector('.live-time')

function podajCzasLive() {
    const today = new Date();
    const godz = poprzedzZerem(today.getHours())
    const min = poprzedzZerem(today.getMinutes())
    const sek = poprzedzZerem(today.getSeconds())
    nowyPojemnik.innerText = `${godz}:${min}:${sek}`;
    //lub zapis =`${poprzedzZZerem(today.getHours())}:${poprzedzZerem(today.getMinutes())}:${poprzedzZerem(today.getSeconds())}` i wtedy bez tworzenia powyzszych zmiennych
    setTimeout('podajCzasLive()', 1000);
  //  requestAnimationFrame(podajCzasLive)

}
podajCzasLive(now)

// !!!!! Ten sam efekt można uzyskac dzięki .requestAnimationframe()


const calendar = ['Niedziela', 'Poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota'];
const nazwaDnia = document.querySelector('.nazwa-dnia').innerText = `Dzisiaj jest ${calendar[now.getDay()].toUpperCase()}`;

/*możemy samodzielnie ustawic date i godzin na konkretna;
Kolejność wprowadzanych danych to:
rok, miesiąc, dzień, godzina, minuta, sekunda, milisekunda,
przy czym nie musimy podawać wszystkich składowych.*/

const ustawionaSztywnaData = new Date(1987, 10, 16);
console.log(ustawionaSztywnaData.getFullYear());

// Drugi sposob sztywnego ustawiania skladnikow daty:
const newDate = new Date();
console.log(newDate) //wyswietla 2023r
console.log(newDate.getYear())

newDate.setFullYear(1850);
console.log(newDate) //juz zmieniony 1850
console.log(newDate.getYear()) //skrot roczny pokazuje -50, co ewidentnie wskazuje, ze wyznacznikiem -0+ jest rok 1900. Dlatego bieżacy 2023 oznacza sie w .getYear() jako 123.