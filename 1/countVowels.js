// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa


function countVowels(string) {
  return string.replace(/[^aeiouAEIOU]/g, '').length
}

module.exports = countVowels