"use strict";

/**
 * Ritorna 'pari' o 'dispari' a seconda del numero ricevuto
 * @param {number} num
 * @return {string} pari o dispari
 */
function getPariDispari ( num ) {
  if ( isNaN( num ) ) {
    return "numero non valido";
  }

  if ( num % 2 === 0 ) {
    return "pari";
  } else {
    return "dispari";
  }
}

/* const sceltaUtente = "pari";
const numUser = 3;
const numPc = 5;
const somma = numUser + numPc;
if ( sceltaUtente === getPariDispari( somma ) ) {
  console.log( "utente ha vinto" );
}else {
  console.log("utente ha perso");
} */


/**
 * Genera un numero random compreso tra 2 estremi
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function getRandomNumber ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}


/**
 * Genera un array di numeri random. 
 * La lunghezza dell'array sarà in pase all'argomento ricevuto
 * @param {number} length
 * @return {Array}
 */


/**
 * Dato un array, cerca un elemento e ne ritorna l'indice
 * @param {Array} data
 * @param {string|number} find
 * @return {number}
 */


/**
 * Dato un array, ne invertiamo gli elementi. 
 * L'ultimo sarà il primo e così via
 * @param {Array} data
 * @return {Array}
 */


/**
 * Data una stringa la inverte
 * @param {string} text
 * @return {string}
 */
function revertWord ( text ) {
  const listaCaratteri = text.split( "" );

  console.log( listaCaratteri );

  const reverseList = listaCaratteri.reverse();

  console.log( reverseList );

  return reverseList.join( "" );
}

// console.log( revertWord( "ciao,come,va" ) );

/**
 * Data una stringa la inverte
 * @param {string} text
 * @return {string}
 */
function revertWordFor ( text ) {
  let reverseWord = "";
  let caratteriValidi = [ "a", "b", "c" ];

  for ( let i = text.length - 1; i >= 0; i-- ) {
    // se il carattere NON è incluso della lista dei caratteri validi, blocco tutto.
    if ( !caratteriValidi.includes( text[ i ] ) ) {
      return;
    }

    /* console.log( text[ i ] ); */
    reverseWord += text[ i ];
  }

  return reverseWord;
}

// console.log( revertWordFor( "michele" ) );