const isDivisible = require('../1/isDivisible.js')
const stringConcat = require('../1/stringConcat.js')
const countVowels = require('../1/countVowels.js')
const larger = require('../1/larger.js')
const lessThan = require('../1/lessThan.js')
const between = require('../1/between.js')
const sum = require('../1/sum.js')
const even = require('../1/even.js')
const countNoSpaces = require('../1/countNoSpaces.js')
const isInArray = require('../1/isInArray.js')

test("1/isDivisible", async function() {
  expect(isDivisible(1, 2)).toBe(false)
  expect(isDivisible(2, 1)).toBe(true)
  expect(isDivisible(4, 2)).toBe(true)
  expect(isDivisible(7, 3)).toBe(false)
})

test("1/stringConcat", async function() {
  expect(stringConcat("ciao", "hi")).toBe("ciao#hi")
})

test("1/countVowels", async function() {
  expect(countVowels("ciao")).toBe(3)
  expect(countVowels("Jessica")).toBe(3)
  expect(countVowels("HehEProVA")).toBe(4)
})

test("1/larger", async function() { 
  expect(larger(1, 2)).toBe(2)
  expect(larger(4, 3)).toBe(4)
  expect(larger(-1, -12)).toBe(-1)
})

test("1/lessThan", async function() {
  expect(lessThan(1, 2)).toBe(true)
  expect(lessThan(2, 1)).toBe(false)
  expect(lessThan(2, 2)).toBe(false)
})

test("1/between", async function() {
  let res = between(1, 3)
  expect(res).toEqual([2])
})

test("1/sum", async function() {
  expect(sum([1,2,3])).toBe(6)
})

test("1/even", async function() {
  let res = even([1, 2, 3, 4, 5, 6])
  expect(res).toEqual([2, 4, 6])
})

test("1/countNoSpaces", async function() {
  expect(countNoSpaces("ciao sono Alberto")).toBe(15)
  expect(countNoSpaces("ciaosonoAlberto")).toBe(15)
  expect(countNoSpaces("   ")).toBe(0);
})

test("1/isInArray", async function() {
  expect(isInArray(1, [1,2,3])).toBe(true);
  expect(isInArray(0, [1,2,3])).toBe(false);
});