// scrivere una funzione chiamata sum che 
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array

function sum(arr) {
  return arr.reduce((s, n) => s + n, 0)
}

module.exports = sum