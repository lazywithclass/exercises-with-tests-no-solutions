// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l 
// contenente '#' e ' ', opportunamente alternati, che rappresentino 
// una scacchiera di lato l 

// la prima casella deve essere un '#'

function chessboard(l) {
  let result = []
  let row = []
  let current = ' '
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (current == '#') current = ' '
      else if (current == ' ') current = '#'
      row.push(current)
    }
    if (current == '#') current = ' '
    else if (current == ' ') current = '#'
    result.push(row)
    row = []
  }

  return result
}

module.exports = chessboard