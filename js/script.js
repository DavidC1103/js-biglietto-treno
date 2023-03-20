// prezzo biglietto per km
const kmPrice = 0.21;
console.log('kmPrice', kmPrice);
// sconto <18
const disc20 = 20;
//sconto >65
const disc40 = 40;
//nome utente
const name = prompt('Inserisci il tuo nome')
//cognome utente
const lastname = prompt('Inserici il tuo cognome')




let age = parseInt(prompt('Quanti anni hai?'));
console.log('age', age);

//calcolo prezzo km x km utente 
let kmUtente = parseInt(prompt('Quanti km devi percorrere?', 100));
console.warn('kmUtente', kmUtente)


let price =  kmPrice * kmUtente;
console.log('price', price);

let newPrice = price;

if(age < 18) {
    newPrice = price - (price / 100 * disc20);
    console.log('sconto under');
}else if (age > 65) {
    newPrice = price - (price / 100 * disc40);
    console.log('sconto over');
}
console.log('prezzo finale', newPrice);






















