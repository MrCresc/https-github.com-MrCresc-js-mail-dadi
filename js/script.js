// Variabili varie email
var databaseEmail = ["cresckamina@gmail.com","scolozzialessandro@gmail.com",
"sainatoalessandro@gmail.com","passarochiara@gmail.com","moscanikolas@gmail.com"];
var email = prompt("Inserisci il tuo indirizzo e-mail.");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailCorretta = false;
var emailPresente = false;

// Variabili varie Dadi
var button = document.getElementById('button');
var punteggioUtente
var punteggioPc

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
  alert("L'indirizzo e-mail inserito non è corretto, aggiornare la pagina e riprovare")
  document.getElementById('email').innerHTML = "L'indirizzo e-mail inserito non è corretto, aggiornare la pagina e riprovare"
  document.getElementById('email').className = "red"
}

// Mostro il tasto per giocare ai dadi
document.getElementById('button').className = "visible"

button.addEventListener('click',

  function () {
    var punteggioUtente = Math.floor(Math.random() * 6) + 1;
    alert("Il tuo punteggio è " + punteggioUtente)
    var punteggioPc = Math.floor(Math.random() * 6) + 1;
    alert("Il punteggio del PC è " + punteggioPc)
    if (punteggioUtente > punteggioPc) {
      alert("Hai vinto che c... fortuna!")
      document.getElementById('smile').className = "visible"
    } else if (punteggioUtente < punteggioPc) {
      alert("Hai perso MUHAHAHAHAHAHHAH!!!")
      document.getElementById('cry').className = "visible"
    } else {
      alert("Hai pareggiato!")
      document.getElementById('neutral').className = "visible"
    }
  }
)
