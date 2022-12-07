
/*
? Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
? per i multipli di 3 stampi “Fizz” al posto del numero
? per i multipli di 5 stampi “Buzz” al posto del numero.
? Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
? Prima di partire a scrivere codice poniamoci qualche domanda:
? Come faccio a sapere se un numero è divisibile per un altro?
? Abbiamo visto qualcosa di particolare che possiamo usare?
*/

//---------------------------------------------------------------//



for (let i = 1; i <=100; i++) {
     if (i % 3 == 0) {
        console.log('fizz')
     }
      else if (i % 5 == 0) {
         console.log('Buzz');
      }
      else if (i % 15 == 0) {
         console.log('fizzbuzz');
      } else {
        console.log(i);
      }

    
};