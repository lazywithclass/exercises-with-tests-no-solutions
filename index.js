// la difficolta' dei test cresce in modo direttamente 
// proporzionale al numero della cartella

// modificare questo array per eseguire solo alcuni dei test,
// basta inserire il/i nome/i della funzione che si vuole testare
const TEST_DA_ESEGUIRE = [
  'biggerString'
]

// non modificare la parte sottostante
// i test usano https://jestjs.io/docs/expect
const testsToExecute = TEST_DA_ESEGUIRE.join('|')
const { exec } = require('child_process')
exec(`jest -t '${testsToExecute}' --colors`, (err, stdout, stderr) => {
  console.log(stderr)
})
