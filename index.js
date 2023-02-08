// la difficolta' dei test cresce in modo direttamente 
// proporzionale al numero della cartella

// modificare questo array per eseguire solo
// alcuni dei test
const DIFFICOLTA_DA_ESEGUIRE = [
  '1', '2', '3', '4', '5'
]

// non modificare la parte sottostante

const path = require('path')
const fs = require('fs')
const ALL_TESTS = ['1', '2', '3', '4', '5']
  
ALL_TESTS
  .map(p => path.join(__dirname, p))
  .forEach(p => {
    fs.readdirSync(p).forEach(file => {
      let funxName = file.split('.')[0]
      module.exports[funxName] = require(path.join(p, file))
    })
  })

module.exports['enabled'] = DIFFICOLTA_DA_ESEGUIRE

// https://jestjs.io/docs/expect