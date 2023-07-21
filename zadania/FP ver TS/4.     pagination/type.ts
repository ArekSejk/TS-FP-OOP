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


interface Isettings {
    actualPageIdx: number;
    entriesOnPage: number;
}

const paginateArray = (dataEntries: number[], settings: Isettings): number[] | void => {

    if (!Array.isArray(dataEntries)) return;

    if (!dataEntries.every(el => typeof el == 'number')) return;

    if (!dataEntries.every(el => Number.isInteger(el))) return;

    // if (settings.actualPageIdx < 0) return;
    //if (settings.actualPgeInd + settings.entruesOnPage > settings.actualPageInx.legth) return.

    const start = (settings.actualPageIdx * settings.entriesOnPage);

    return dataEntries.slice(start, start + settings.entriesOnPage)
}
console.log(paginateArray(data, settings))


