// scrivere una funzione chiamata algebra che 
// dato un array di interi
// ritorni il prodotto degli elementi di indice pari a cui vengono
// sottratti tutti gli elementi di indice dispari

// ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3

function algebra(arr) {
  let product = 1
  let subtraction = 0
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      product *= arr[i]
    } else {
      subtraction += arr[i]
    }
  }
  return product - subtraction
}

module.exports = algebra