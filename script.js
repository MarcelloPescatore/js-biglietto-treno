// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana


// first of all we have to ask the data from the user

// Ask the km
const km = prompt('Inserisci qui la distanza in Km del tuo viaggio');
// now we have to converte km string to a number
const numberKm = Number(km);
// stamp the km in console
const yourKm = `Km: ${numberKm}`;
console.log(yourKm);

// Ask the age
const age = prompt('Inserisci qui la tua età');
// now we have to converte age string to a number
const numberAge = Number(age);
// stamp the age in console
const yourAge = `Età: ${age}`;
console.log(yourAge);



// Now set up the rules to find out the final price

// First rule: find the ticket price
let costKm = numberKm * 0.21 ;

// Second rule: if the user age is minor than 18, apply a discount to costKm
if (numberAge < 18) {
    const costKmDiscounted = costKm - costKm * 20 /100 ;
    // fix the cost in 2 decimal
    const costKmDiscountedTwoDecimals = costKmDiscounted.toFixed(2);
    // tranform this cost in Euro
    const costKmDiscountedTwoDecimalsEuro = `${costKmDiscountedTwoDecimals} €`;
    // stamp the final price in euro rounded from this statement 
    const finalPrice = `Prezzo totale: ${costKmDiscountedTwoDecimalsEuro}`;
    console.log(finalPrice);
} else if (18 <= numberAge && numberAge <= 65){
    // fix the cost in 2 decimal
    const costKmTwoDecimals = costKm.toFixed(2);
    // tranform this cost in Euro
    const costKmTwoDecimalsEuro = `${costKmTwoDecimals} €`;
    // stamp the final price in euro rounded from this statement 
    const finalPrice = `Prezzo totale: ${costKmTwoDecimalsEuro}`;
    console.log(finalPrice);
}
// Third rule: if the user age is higher than 65, apply a discount to costKm
else {
    const costKmDiscounted = costKm - costKm * 40 /100 ;
    // fix the cost in 2 decimal
    const costKmDiscountedTwoDecimals = costKmDiscounted.toFixed(2) ;
    // tranform this cost in Euro
    const costKmDiscountedTwoDecimalsEuro = `${costKmDiscountedTwoDecimals} €` ;
    // stamp the final price in euro rounded from this statement  
    const finalPrice = `Prezzo totale: ${costKmDiscountedTwoDecimalsEuro}` ;
    console.log(finalPrice);
} 


