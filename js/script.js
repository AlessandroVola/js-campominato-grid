console.log(`JS OK!`)

// Utente clicca su un bottone che genera una griglia quadrata
const button = document.getElementById(`init-button`);

// con il click sul bottone si compie una funzione
button.addEventListener(`click`, function () {
    console.log(`bottone cliccato`);
    // prendo elemento grid del DOM
    const gridElement = document.getElementById(`grid`);
    // inizializzo ogmi volta il grid sennò li sommo e diventano ogni volta piu di 100
    gridElement.innerHTML = ``
    // creo celle che hanno un numero progressivo da 1 a 100 con ciclo for
    for (let i = 1; i <= 100; i++) {
        // creo nel dom un div con classe cell
        const cellElement = document.createElement(`div`);
        // al div appena creato aggiungo classe .cell
        cellElement.className = `cell`;
        // nell elemento cell metto i che sarebbero i numeri crescenti
        cellElement.innerHTML = i;
        // utente può cliccare ogni cella e associo al click una funzione
        cellElement.addEventListener(`click`, function () {
            // clicca cella
            console.log(`cella`, i, `cliccata`)
            // se pari di un colore, se dispari un altro
            const isEven = isNumberEven(i)
            if (isEven) {
                cellElement.classList.add(`even`)
            } else {
                cellElement.classList.add(`odd`)
            }
        })
        // aggiumgo elemento cell alla grid con .append
        gridElement.append(cellElement);
    }
})



// BONUS, indici non ordinati ma disordinati univoci da 1 a 100
const cellValues = getRandomNumbersArray;


// creo funzione per avere numeri in ordine casuale
function getRandomNumbersArray() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    console.log(array);

    array.sort(function () {
        const random = Math.round(Math.random());
        return random === 1 ? 1 : -1;
    })

    console.log(array);

    return array;
}



function isNumberEven(number) {
    return number % 2 == 0;
}






