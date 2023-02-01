// scrivere una funzione chiamata slice che 
// dato un array di interi e un intero
// ritorni un array formato da gruppi di sottoarray

// ad esempio con [1,2,3,4,5] e 2 ritorna [[1,2],[3,4],[5]] 

function slice(arr, size) {
  let result = []
  let subArr = []
  for (let i = 0; i < arr.length; i++) {
    console.log(subArr)
    if (subArr.length == size) {
      result.push(subArr)
      subArr = []
    } 
    subArr.push(arr[i])
  }
  result.push(subArr)
  return result
}

module.exports = slice