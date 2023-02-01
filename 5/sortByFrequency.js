// scrivere una funzione chiamata sortByFrequency che 
// dato un array di interi
// ritorni un nuovo array ordinato in modo che i numeri compaiano
// in base alla frequenza nell'array originale, se due numeri hanno
// la stessa frequenza vanno ritornati in ordine crescente

// ad esempio con [1,2,3,2,4,2,5,2,3,1] ritorna [2,2,2,2,1,1,3,3,4,5]

function sortByFrequency(arr) {
  let freq = arr.reduce((freq, n) => {
    freq[n] ? freq[n] += 1 : freq[n] = 1
    return freq
  }, {})

  return arr.sort((a, b) => 
    freq[a] === freq[b] ? a - b : freq[b] - freq[a]
  )
}

module.exports = sortByFrequency