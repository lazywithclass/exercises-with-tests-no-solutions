// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"

function findLongestSubstring(string) {
  let seen = {}
  let longest = string[0]
  let current = ""
  for (let c of string) {
    if (seen[c]) {
      if (current.length > longest.length) {
        longest = current
      }
      current = c
      seen = { [c]: true }
    } else {
      seen[c] = true
      current += c
    }
  }
  return longest
}

module.exports = findLongestSubstring