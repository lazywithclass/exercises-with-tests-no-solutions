const recursiveHourglass = require('../5/recursiveHourglass.js')
const sortByFrequency = require('../5/sortByFrequency.js')

test("5/recursiveHourglass", async function() {
  expect(recursiveHourglass(3)).toEqual([ 
    [ '*', '*', '*' ], 
    [ ' ', '*', ' ' ], 
    [ '*', '*', '*' ] 
  ])
  expect(recursiveHourglass(5)).toEqual([
    [ '*', '*', '*', '*', '*' ],
    [ ' ', '*', '*', '*', ' ' ],
    [ ' ', ' ', '*', ' ', ' ' ],
    [ ' ', '*', '*', '*', ' ' ],
    [ '*', '*', '*', '*', '*' ]
  ])
})

test("5/sortByFrequency", async function() {
  expect(sortByFrequency([1, 2, 3, 2, 4, 2, 5, 2, 3, 1])).toEqual([
    2, 2, 2, 2, 1, 1, 3, 3, 4, 5
  ])
})