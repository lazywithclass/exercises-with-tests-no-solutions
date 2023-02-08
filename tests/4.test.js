const functionsReturningNumbers = require('../4/functionsReturningNumbers.js')
const recursiveMap = require('../4/recursiveMap.js')
const slice = require('../4/slice.js')
const anagrams = require('../4/anagrams.js')

test("4/functionsReturningNumbers", async function() {
  expect(functionsReturningNumbers(() => 2, () => 1)).toBe("f")
  expect(functionsReturningNumbers(() => 1, () => 2)).toBe("g")
  expect(functionsReturningNumbers(() => 1, () => 1)).toBe("nessuna")
})

test("4/recursiveMap", async function() {
  expect(recursiveMap([1,2,3], n => n * 2)).toEqual([2,4,6])
})

test("4/slice", async function() {
  expect(slice([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]])
})

test("4/anagrams", async function() {
  if (enabled.indexOf('4') == -1) return   
  expect(anagrams("ciao", ["caio", "cio", "oiac", "bye"])).toEqual(['caio', 'oiac'])
})