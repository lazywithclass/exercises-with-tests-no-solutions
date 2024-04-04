// scrivere una funzione chiamata validateEmail
// che prende in ingresso una stringa e ritorna true se la 
// stringa rappresenta un idirizzo email valido, false 
// altrimenti

// considerare solo questi criteri per l'identificazione di una
// email corretta:
// ci deve essere una stringa non vuota,
// a cui deve seguire il carattere @
// a cui deve seguire una stringa non vuota
// a cui deve seguire il carattere .
// a cui deve seguire una stringa non vuota

// le stringhe non vuote non possono contenere i caratteri . e @

// ad esempio per io@io.io ritorna true
// ad esempio per @io.io ritorna false
// ad esempio per io@me@io.io ritorna false
// ad esempio per io@ioio ritorna false

function validateEmail(possibleEmail) {
}

module.exports = validateEmail