// Traccia:Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Procedimento: 

// 1) Assegno ad una variabile la data si inzio della lezione e ad un'altra la data e l'ora attuale
// 2) Calcolo la loro differenza in millisecondi
// 3) Converto la differenza in giorni, ore, minuti e secondi
// 4) Verifico la differenza del passaggio precedente
// 5) Imposto il cronometro dell'HTML in tempo reale
// 6) Stabilisco la condizione che va visualizzare sull'html il messaggio di inizio della lezione


"use strict"

// Fisso una variabile che sta ad indicare quando inizierà la lezione

const lessonTime = new Date("Jul 18, 2023 09:30:00").getTime();

// Fisso una variabile che sta ad indicare la data e l'ora corrente. Uso come variabile let affinchè la data possa aggiornarsi successivamente all'interno della funzione

let now = new Date().getTime();

// Questa è la funzione che aggiorna il timer visualizzato sul documento html senza dover ricaricare la pagina html per vedere l'aggiornamento (N.B. Impostando un timer più breve risolvo il problema dell'asincronicità dovuta ai rallentamenti del browser, quindi posso impostare anche 500, ecc..)

// Invocazione della funzione

const updateCountdown = setInterval(countdownTimer, 1000);

// Dichiarazione della funzione

function countdownTimer() {

    now = new Date().getTime();

    const remainingTime = lessonTime - now;

    /* Converto questa differenza da millisecondi in giorni, ore, minuti e secondi */

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    /* Verifico questa differenza da millisecondi in giorni, ore, minuti e secondi */

    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)

    // Modifico il cronometro dell'HTML in tempo reale
    document.getElementById("countdown-timer").innerHTML = days + "gg " + hours + "ore " + minutes + "min " + seconds + "sec";

    // Se il countdown è terminato, mostra questo messaggio 
    if (remainingTime < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "La lezione di Boolean è iniziata!";
    }

};










// // Dichiaro la costante per settare l'intervallo di tempo che sarà di un secondo

// const updateCountdown = setInterval(timerOn, 1000);

// // Dichiaro la funzione per settare l'intervallo di tempo che sarà di un secondo

// function timerOn () {
// // stampo nel Dom il countdown in tempo reale
// Countdown.innerHTML = `${days} ${hours} ${minutes} ${seconds}`;

// // Visualizza il countdown
// console.log(`${days} ${hours} ${minutes} ${seconds}`);
// }
