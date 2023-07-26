/*Cele główne
1.Stwórz funkcję paginateArray, która przyjmuje jako 1 arg tablicę, a jako 2 arg obiekt settings z kluczami:
---> „actualPageIndex” - numer strony(index wybranej strony(indexujemy od 0))
---> „entriesOnPage” – ilośc obiektów na jedne stronie(maks.ilość elem zwracana z dataEntries dla wybranej strny)
2.Funkcja zwraca entriesOnSelectedPage, który jest arrayem podzielonym według ustawień z settings
-------------------------------------------Kawałek kodu dla lepszego początku!
  const data = [1,2,3,4,5,6,7,8,9];
  const settings = { actualPageIdx: 1, entriesOnPage: 2 };
  const paginateArray = (dataEntries, settings) => {
      ...
      return entriesOnSelectedPage
};

const result = paginateArray(data, settings); // [3,4]
---------------------------------------------------------------*/
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const settings = { actualPageIdx: 1, entriesOnPage: 2 };

/*Poniższe zadanie jest dobrze wykonane.Nalezy jedynie poglebic walidację, np:
1. Ify w miare mozliwosci zredukowac w jedno
2. Pogłębic walid arraya czy liczba jest ujemna, czy strona nie wykracza poza zbior
3. zrobic walidacje settings(czy to obiekt? czy ma takie klucze, ich wartosc musi byc liczba, jesli nie to domyslnie daj zero(tak samo w array), czy ich zakres nie wykracza poza nasz zbior)
*/
const paginateArray = (dataEntries, settings) => {
  if (!Array.isArray(dataEntries)) return 'lipa';
  if (!dataEntries.every(el => typeof el == 'number')) return 'lipa2';
  if (!dataEntries.every(el => Number.isInteger(el))) return 'lipa3';

  const start = (settings.actualPageIdx * settings.entriesOnPage);

  return entriesOnPage = dataEntries.slice(start, start + settings.entriesOnPage)
}
console.log(paginateArray(data, settings))


//  const {actualPageIdx, entriesOnPage} = settings ?? {actualPageIdx: 0, entriesOnPage: 0}