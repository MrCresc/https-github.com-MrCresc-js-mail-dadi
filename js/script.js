// Variabili varie
var databaseEmail = ["cresckamina@gmail.com","scolozzialessandro@gmail.com",
"sainatoalessandro@gmail.com","passarochiara@gmail.com","moscanikolas@gmail.com"];
var email = prompt("Inserisci il tuo indirizzo e-mail.");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailCorretta = false;
var emailPresente = false;

// Verifico se i caratteri messi dall'utente siano corretti per un indirizzo e-mail
if (email.match(mailformat)) {
  emailCorretta = true;
}

// Verifico se l'indirizzo messo dall'utente è presente nel database
if (emailCorretta == true) {
  for ( var i = 0; i < databaseEmail.length; i++ ) {
    if ( email === databaseEmail[i] ) {
      emailPresente = true;
    }
  }
}

// Eseguo messaggio di conferma o di errore
if (emailCorretta && emailPresente) {
  alert ("L'indirizzo e-mail inserito è corretto ed è già presente nel database.")
  document.getElementById('email').innerHTML = "L'indirizzo e-mail inserito è corretto ed è già presente nel database."
  document.getElementById('email').className = "green"
} else if (emailCorretta && !emailPresente) {
  alert ("L'indirizzo e-mail inserito è corretto ma non risulta presente nel database.")
  document.getElementById('email').innerHTML = "L'indirizzo e-mail inserito è corretto ma non risulta presente nel database."
  document.getElementById('email').className = "gold"
} else {
  alert("L'indirizzo e-mail inserito non è corretto, riprovare")
  document.getElementById('email').innerHTML = "L'indirizzo e-mail inserito non è corretto, riprovare"
  document.getElementById('email').className = "red"
}
