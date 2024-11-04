/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  let stringa1 = "String: è una riga in cui è possibile inserire caratteri come numeri e lettere";
  console.log(stringa1)
  let stringa2 = "Number: qui è possibile inserire numeri interi o decimali";
  console.log(stringa2)
  let stringa4 = "Boolean: serve ad identificare se un'affermazione è vera o falsa";
  console.log(stringa4)
  let stringa5 = "Undefined: serve a rilevare se si ha dato correttamente un valore ad una variabile scritta precedentemente";
  console.log(stringa5)
  let stringa6 = "Null: serve a rilevare se si ha dato un valore ad una variabile scritta precedentemente";
  console.log(stringa6)
  let stringa7 = "Date: serve a memorizzare orario e data";
  console.log(stringa7)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName="Alberto"
console.log(myName)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('20+12=', (20 + 12) )

 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const testo='cons myName="savì"/ control.log(Myname)/ Uncaught SyntaxError: Identifier "myName" has already been declared (at D1.js:61:7)'
console.log(testo)

const myName1='Savì'
console.log(myName1)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x1= 12
const numeroDaSottrarre= 4

console.log(x1-numeroDaSottrarre)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1= 'jhon'
let name2= 'Jhon'

console.log(name1==name2)//false
console.log(name1===name2)//false