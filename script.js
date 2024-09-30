// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana


// first of all we have to ask the data from the user

// Ask the km
const km = prompt('Inserisci qui i Km del tuo viaggio');
// now we have to converte km string to a number
const numberKm = Number(km);

// Ask the age
const age = prompt('Inserisci qui la tua età');
// now we have to converte age string to a number
const numberAge = Number(age);

// Condition to validate the data
if (numberKm > 0 && numberAge > 0) {

    // stamp the km in console
    const yourKm = `Km: ${numberKm}`;
    console.log(yourKm);
    
    // stamp the age in console
    const yourAge = `Età: ${age}`;
    console.log(yourAge);
    
    // Now set up the rules to find out the final price
    
    // First rule: find the ticket price
    let costKm = (numberKm * 0.21).toFixed(2) ;
    // stamp the final price without discount
    console.log(`Prezzo totale: ${costKm}€`);
    
    // Conditions for access to discount
    // Second rule: if the user age is minor than 18, apply a discount to costKm
    if (numberAge < 18) {
        const discountAmount = (costKm * 20 /100).toFixed(2);
        const priceDiscounted = costKm - discountAmount;
        // stamp discount
        console.log(`Sconto applicato: -${discountAmount}€`);
        // fix the cost in 2 decimal
        const finalPrice = priceDiscounted.toFixed(2);
        // stamp the final price discounted
        console.log(`Prezzo totale scontato: ${finalPrice}€`);
    } 
    // Third rule: if the user age is higher than 65, apply a discount to costKm
    else if (numberAge > 65){
        const discountAmount = (costKm * 40 /100).toFixed(2);
        const priceDiscounted = costKm - discountAmount;
        // stamp discount
        console.log(`Sconto applicato: -${discountAmount}€`);
        // fix the cost in 2 decimal
        const finalPrice = priceDiscounted.toFixed(2);
        // stamp the final price discounted
        console.log(`Prezzo totale scontato: ${finalPrice}€`);
    } 

} else{
    console.log('Dati non validi'); 
}


