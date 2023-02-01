// scrivere una funzione chiamata even che 
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

function even(arr) {
  return arr.filter(n => n % 2 == 0)
}

module.exports = even