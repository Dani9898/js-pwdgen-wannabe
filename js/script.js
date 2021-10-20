// chiediamo all'utente il suo nome, cognome e colore preferito. Dopo di che stampiamo a schermo "La password assegnata è nomecognomecolore21"

// chiedo il nome

let nome = prompt("Inserisci il tuo nome");
console.log(nome);

// chiedo il cognome
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// chiedo il colore preferito
let colore = prompt("Inserisci il tuo colore preferito");
console.log(colore);

// stampiamo la password
let numero = "21";
let userPassword = `${nome}${cognome}${colore}${numero}`;
document.getElementById("pw-gen").innerHTML = "La password assegnata è " + userPassword;
console.log(userPassword);