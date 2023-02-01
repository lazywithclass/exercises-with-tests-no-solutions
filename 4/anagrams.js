// scrivere una funzione chiamata anagrams che 
// data una parola e una lista di parole 
// ritorni un array formato dalle parole che sono anagrammi
// della parola data

// ad esempio con "ciao" e ["caio", "cio", "oiac", "bye"] ritorna 
// ["caio", "oiac"]


// Nota per me: poteva essere scritto meglio :(

function arrEqual(arr1, arr2) {
  arr1.sort()
  arr2.sort()
  return arr1.length === arr2.length && 
    arr1.every((value, index) => value === arr2[index])
}

function occurrencies(word) {
  const occ = {}
  for (let char of word) {
    if (occ[char]) occ[char] += 1
    else occ[char] = 1
  }
  return occ
}

function anagrams(word, maybeAnagrams) {
  let wordOcc = occurrencies(word)
  return maybeAnagrams
    .map(occurrencies)
    .filter(maybeAnagram => 
     arrEqual(Object.keys(wordOcc), Object.keys(maybeAnagram)) &&
        arrEqual(Object.values(wordOcc), Object.values(maybeAnagram))
    )
    .map(arr => Object.keys(arr).join(''))
}

module.exports = anagrams