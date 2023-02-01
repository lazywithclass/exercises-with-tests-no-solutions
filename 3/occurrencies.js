// scrivere una funzione chiamata occurrencies
// che prende in ingresso una stringa,
// la funzione deve ritornare le occorrenze di tutte le lettere 
// nella stringa, ordinate in modo crescente

// ad esempio per "abbaca" deve ritornare [1,2,3]
// ad esempio per "caccia" deve ritornare [1,2,3]
// ad esempio per "bisaccia" deve ritornare [1,1,2,2,2]


function occurrencies(word) {
  const occ = {}
  for (let char of word) {
    if (occ[char]) occ[char] += 1
    else occ[char] = 1
  }
  let vals = Object.values(occ)
  vals.sort()
  return vals
}

module.exports = occurrencies