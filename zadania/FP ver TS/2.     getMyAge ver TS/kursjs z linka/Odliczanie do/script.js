const element = document.querySelector('.counting');

function dodajZero(i) {
    return `${i}`.padStart(2, "0");
}

//funkcja będzie przyjmować obiekt z danymi zakładam, że nie wszystkie dane zostaną przekazane, dlatego te definiowanie zerowych wartosci
function obliczIleZostaloCzas({ year, month, day, hour = 0, minutes = 0, seconds = 0 }) {
    const teraz = new Date();

    //rok, miesiąc, dzień, godzina, minuta
    const waznaDataUsera = new Date(year, month - 1, day, hour, minutes, seconds);//-1 bo liczymy mth od 0
    const msecWDniu = 24 * 60 * 60 * 1000; //1 dzień w milisekundach - to w nich przecież zwracany czas metodą getTime

    const czasDoDatyWmilsec = (waznaDataUsera.getTime() - teraz.getTime());

    const koniecCzasu = czasDoDatyWmilsec < 0; //spr czy koniec odliczania

    const dniDoDatyIresza = czasDoDatyWmilsec / msecWDniu;
    const dniBezReszty = Math.floor(dniDoDatyIresza); //zaokraglanie do calych dni

    //musimy tutaj sprawdzić, czy powyższa zmienna nie jest 0, bo inaczej poniżej byśmy mieli dzielenie przez 0
    let dniBezResztyFix = (dniBezReszty < 1) ? 1 : dniBezReszty;

    const godzinyDoDatyIreszta = (dniDoDatyIresza % dniBezResztyFix) * 24;
    const godzinyBezReszty = Math.floor(godzinyDoDatyIreszta);

    const minutyDoDatyIReszta = (godzinyDoDatyIreszta - godzinyBezReszty) * 60;
    const minutyBezReszty = Math.floor(minutyDoDatyIReszta);

    const sekundyDoDatyIreszta = Math.floor((minutyDoDatyIReszta - minutyBezReszty) * 60);
    const sekundyBezReszty = Math.floor(sekundyDoDatyIreszta);

    return {
        days: dniBezReszty,
        hours: godzinyBezReszty,
        minutes: minutyBezReszty,
        seconds: sekundyBezReszty,
        koniecCzasu
    }
}

//funkcja korzystając z powyższej funkcji pokaże na stronie odpowiedni tekst
function pokazOdliczanieNaStronie(dataPodanaPrzezUsera) {
    const czesciDaty = dataPodanaPrzezUsera.split("-");
    if (czesciDaty.length === 1) return;

    //zakładam że format daty to "2021-10-24-23-01". Ewentualnie można łatwo zmienić na inny
    const [year, month, day, hour = 0, minutes = 0, seconds = 0] = czesciDaty;

    //przekazuję do funkcji obliczIleZostaloCzas powyższe dane
    const czasKtoryPozostal = obliczIleZostaloCzas({ year, month, day, hour, minutes, seconds })

    {
        //a następnie wyciągam z tego co zwraca odpowiednie rzeczy
        const { days, hours, minutes, seconds, koniecCzasu } = czasKtoryPozostal;

        if (!koniecCzasu) {
            element.innerHTML = `
                Do ważnej daty pozostało:
                <b>${days} dni
                ${hours} godzin
                ${minutes} minut i
                ${dodajZero(seconds)} sekund</b>
            `;

            setTimeout(() => pokazOdliczanieNaStronie(dataPodanaPrzezUsera), 1000);
        } else {
            element.innerHTML = `Ważna data upłynęła`;
        }
    }
}

pokazOdliczanieNaStronie("2026-06-01");