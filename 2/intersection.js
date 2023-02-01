// scrivere una funzione chiamata intersection che 
// dati due array di interi
// ritorni un array che rappresenti l'intersezione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna []
// ad esempio con [1,2] e [2,3] ritorna [2]


function intersection(a, b) {
    let t
    // indexOf to loop over shorter
    if (b.length > a.length) t = b, b = a, a = t 
    return a.filter(e => b.indexOf(e) > -1)
}

module.exports = intersection