"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName;
// familyName = "Mütze";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");

// console.log(firstName + " " + familyName);
// console.log(typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Max"; // string
// test = 2; // number
// test = true; // boolean


// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// let test = "Max"; // Deklaration + Wetzuweisung
// test = "Maxine";

// const test = "Max"; // Variable mit KONSTANTEM Inhalt
// test = "Maxine"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler

// console.log("Inhalt: " + test);

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// let test = "Max"; // Deklaration + Wertzuweisung
// test = "Maxine";

// const test = "Max"; // Variable mit KONSTANTEM Inhalt
// test = "Maxine"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler


// console.log("Inhalt: " + test);

/***** 04 Beispiel - Berechnung *******/

// Deklaration
const birthYearJohn = 2000;
const birthYearMarc = 1990;
let ageJohn, ageMarc;

let date = new Date();
let year = date.getFullYear();
// console.log(year);

ageJohn = year - birthYearJohn;
ageMarc = year - birthYearMarc;
ageMark = year - birthYearMark;


// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMarc: " + ageMarc);









