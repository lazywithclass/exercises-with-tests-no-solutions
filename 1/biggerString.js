// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

function biggerString(a, b) {
  return a.length > b.length ? a : b
}

module.exports = biggerString