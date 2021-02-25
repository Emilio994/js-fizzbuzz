// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Metodo For
console.log("Metodo For");
for (var i = 0; i <= 100; i++) {
    if (i % 15 == 0 && i != 0) {
        console.log("FizzBuzz");
    }
    else if ((i % 3 == 0 || i % 15 == 0) && i != 0) {
        console.log("Fizz");
    }
    else if ((i % 5 == 0 || i % 15 == 0) && i != 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log("");

// Metodo While
console.log("Metodo While");
var i = 0;
while (i <= 100) {
    if (i % 15 == 0 && i != 0) {
        console.log("FizzBuzz");
    }
    else if ((i % 3 == 0 && i % 15 != 0) && i != 0) {
        console.log("Fizz");
    }
    else if ((i % 5 == 0 && i % 15 != 0) && i != 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    i++ 
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log("");

// Metodo Do-While
console.log("Metodo Do-While");
var i = 0;
do {
    if (i % 15 == 0 && i != 0) {
    console.log("FizzBuzz");
    }
    else if ((i % 3 == 0 || i % 15 == 0) && i != 0) {
        console.log("Fizz");
    }
    else if ((i % 5 == 0 || i % 15 == 0) && i != 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    i++     
} while (i <= 100);



