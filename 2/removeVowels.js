// scrivere una funzione chiamata removeVowels che 
// data una stringa in ingresso
// ritorna la stringa senza le vocali

// suggerimento, ritornate una nuova stringa senza tentare di 
// modificare la stringa originale

// ad esempio "ciao" deve ritornare "c"
// ad esempio "aeiou" deve ritornare ""
// ad esempio "esercizio" deve ritornare "srcz"

function removeVowels(string) {
  let newString = ""
  for (let c of string) {
    newString += ["a", "i", "e", "o", "u"].indexOf(c) > -1 ? "" : c
  }
  return newString
}

module.exports = removeVowels