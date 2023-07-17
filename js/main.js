// Traccia:Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Procedimento: 
// 1) Imposto la data di fine del conto alla rovescia mediante la funzione new Date(...).getTime(), che mi consente di impostare una data e ora specifica
// 2) Verifico la corretta impostazione della data di fine conto alla rovescia
// 3) Imposto la data corrente mediante la funzione new Date().getTime(), che mi consente di impostare la data attuale
// 4) Verifico la corretta impostazione della data corrente
// 5)  Verifico la differenza tra le due date in millisecondi
// 6) Imposto i calcoli della differenza tra le date per ottenere la differenza in giorni, ore, minuti e secondi 
// Creo la funzione per settare l'intervallo di tempo che sarà di un secondo

"use strict"

// Assegno ad una variabile l'HTMLElement del Countdown
const countdown = document.getElementById("countdown");

// Assegno ad una variabile la data e l'ora corrente. Uso come variabile let affinchè la data possa aggiornarsi all'interno della funzione
let now = new Date();

// Recupero la data attuale all'avvio della pagina
countdown .innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

updateCountdown()

// setInterval(updateCountdown, 1000); Impostando un timer più breve risolvo il problema dell'asincronicità dovuta ai rallentamenti del browser, quindi posso impostare 500 ecc...

// Imposto una funzione che ogni secondo aggiorna il mio countdown senza dover ricaricare la pagina html
function updateCountdown () {
    now = new Date();
    
    countdown .innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    
    // Verifico che il countdown stia funzionando 
    console.log("countdown update");
}




















// // Assegno ad una variabile la data di fine del conto alla rovescia
// const lessonIsBegun = new Date("July 15, 2023 09:30:00").getTime();

// // Verifico data di fine del conto alla rovescia
// console.log(lessonIsBegun);



// // Verifico data di fine del conto alla rovescia
// console.log(now);

// // Calcolo la differenza tra la data di oggi e quella impostata in millisecondi
// const difference = lessonIsBegun - now;

// // Verifico la differenza tra le due date in millisecondi
// console.log(difference);

// // Imposto i calcoli della differenza tra le date per ottenere la differenza in giorni, ore, minuti e secondi 
// const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// // Verifico la differenza tra le due date per ottenerla in giorni, ore, minuti e secondi
//     console.log(days)
//     console.log(hours)
//     console.log(minutes)
//     console.log(seconds)

// // Dichiaro la costante per settare l'intervallo di tempo che sarà di un secondo

// const updateCountdown = setInterval(timerOn, 1000);

// // Dichiaro la funzione per settare l'intervallo di tempo che sarà di un secondo

// function timerOn () {
// // stampo nel Dom il countdown in tempo reale
// Countdown.innerHTML = `${days} ${hours} ${minutes} ${seconds}`;

// // Visualizza il countdown
// console.log(`${days} ${hours} ${minutes} ${seconds}`);
// }
