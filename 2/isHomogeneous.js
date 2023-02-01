// scrivere una funzione chiamata isHomogeneous che 
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

function isHomogeneous(arr) {
  if (arr.length == 0) return true
  let ty = typeof arr[0]
  for (let i = 1; i < arr.length; i++) {
    console.log(ty, arr[i])
    if (typeof arr[i] !== ty) {
      return false
    }
  }
  return true
}

module.exports = isHomogeneous