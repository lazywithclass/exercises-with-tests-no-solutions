// scrivere una funzione chiamata isInString che 
// date due stringhe in ingress
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

function isInString(s, t) {
  return s.indexOf(t) > -1
}

module.exports = isInString