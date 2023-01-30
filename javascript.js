
// Chiedi all’utente il suo nome

console.log("Dichiaro var. firstName")
let firstName = prompt("Quale'è il tuo nome?")
console.log("la variabile firstName é: ", firstName)

// poi chiedi il suo cognome

console.log("Dichiaro var. lastName")
let lastName = prompt("Quale'è il tuo cognome?")
console.log("la variabile lastName é: ", lastName)

// poi chiedi il suo colore preferito

console.log("Dichiaro var. favoriteColor")
let favoriteColor = prompt("Quale'è il tuo colore preferito?")
console.log("la variabile favoriteColor é: ", favoriteColor)

// e un numero

console.log("Dichiaro var. favoriteNumber")
let favoriteNumber = prompt("Quale'è il tuo numero preferito?")
console.log("la variabile favoriteNumber é: ", favoriteNumber)

// Infine scrivi sulla pagina il risultato della concatenazione ****************

// dichiara una variabile password 

console.log("Dichiaro una variabile password")
let password = (firstName + lastName + favoriteColor + favoriteNumber)
console.log("la variabile password é: ", password)

// richiama il div generated-password per inserire la variabile password

console.log("dichiaro una costante associata a generated-password")
const generatedPassword = document.getElementById("generated-password")
console.log("la costante generatedPassword è: generatedPassword")

// Modifico il contenuto di generated password con la variabile password

console.log("Modifico il contenuto di generated password con la variabile password")
generatedPassword.innerHTML = password

// messaggio Finale ***********************************************

console.log("pop-up messaggio finale")
alert("La tua Password è stata generata con successo!")