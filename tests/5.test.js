const recursiveHourglass = require('../5/recursiveHourglass.js')
const sortByFrequency = require('../5/sortByFrequency.js')
const recursiveTreeSum = require('../5/recursiveTreeSum.js')

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

test("5/recursiveTreeSum", async function() {
  let tree = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 3
      },
      right: {
        value: 6
      }
    },
    right: {
      value: 4,
      right: {
        value: 5
      }
    }
  }
  let fn = (state, value) => state + value
  let state = 0
  expect(recursiveTreeSum(fn, state, tree)).toEqual(21)

  tree = {value: 41}
  fn = (state, value) => state + value
  state = 1
  expect(recursiveTreeSum(fn, state, tree)).toEqual(42)
})