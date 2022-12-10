
/*
? Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
? per i multipli di 3 stampi “Fizz” al posto del numero
? per i multipli di 5 stampi “Buzz” al posto del numero.
? Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
? Prima di partire a scrivere codice poniamoci qualche domanda:
? Come faccio a sapere se un numero è divisibile per un altro?
? Abbiamo visto qualcosa di particolare che possiamo usare?
*/


/* // ! BONUS 

TODO 1. Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)

TODO 2. Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/

//---------------------------------------------------------------//

const targetElement = document.getElementById('target');
let content = '';
const fizzBuzz = 'FizzBuzz';
const Fizz = 'Fizz';
const Buzz = 'Buzz';

for (let i = 1; i <=100; i++) {
     if (i % 15 == 0) {
        console.log(fizzBuzz);
     }
      else if (i % 5 == 0) {
         console.log(Buzz);
      }
       else if (i % 3 == 0) {
         console.log(Fizz);
      } else {
         console.log(i);
      }

      
};

// targetElement.innertext = content;
