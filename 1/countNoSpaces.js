// scrivere una funzione chiamata countNoSpaces che 
// data una stringa 
// ritorni un interno n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi


function countNoSpaces(string) {
  return string.replace(/ /g, '').length
}

module.exports = countNoSpaces