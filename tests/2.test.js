const largestSwap = require('../2/largestSwap.js')
const isHomogeneous = require('../2/isHomogeneous.js')
const intersection = require('../2/intersection.js')
const algebra = require('../2/algebra.js')
const union = require('../2/union.js')
const removeVowels = require('../2/removeVowels.js')
const reverse = require('../2/reverse.js')
const addUpFromNumber = require('../2/addUpFromNumber.js')
const arraySwap = require('../2/arraySwap.js')
const createRandomSortedArray = require('../2/createRandomSortedArray.js')

test("2/largestSwap", async function() {
  expect(largestSwap(34)).toBe(false)
  expect(largestSwap(71)).toBe(true)
})

test("2/isHomogeneous", async function() {
  expect(isHomogeneous([1, 2, 3])).toBe(true)
  expect(isHomogeneous([])).toBe(true);
  expect(isHomogeneous([1, "2", 3])).toBe(false)
  expect(isHomogeneous([function() { }])).toBe(true)
  expect(isHomogeneous([{ 1: 1 }, {}])).toBe(true)
})

test("2/intersection", async function() {
  let arr1 = ["mike", "sue", "tom", "kathy", "henry"]
  let arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]
  expect(intersection(arr1, arr2)).toEqual(["sue", "kathy"])
})

test("2/algebra", async function() {
  expect(algebra([1, 2, 3, 4])).toEqual(-3)
})

test("2/union", async function() {
  expect(union([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
})

test("2/removeVowels", async function() {
  expect(removeVowels("ciao")).toBe("c")
  expect(removeVowels("aeiou")).toBe("")
  expect(removeVowels("esercizio")).toBe("srcz")
})

test("2/reverse", async function() {
  expect(reverse("ciao")).toBe("oaic")
  expect(reverse("Jessica")).toBe("acisseJ")
})

test("2/addUpFromNumber", async function() {
  expect(addUpFromNumber(4)).toBe(10);
  expect(addUpFromNumber(0)).toBe(0);
})

test("2/arraySwap", async function() {
  expect(arraySwap([1,2,3,4])).toEqual([2,1,4,3]);
  expect(arraySwap([1,2,3])).toEqual([2,1,3]);
  expect(arraySwap([])).toEqual([]);
  expect(arraySwap([1])).toEqual([1]);
})

test("2/createRandomSortedArray", async function() {
  let result = createRandomSortedArray(3)
  expect(result.length).toBe(3)
  expect(result[0] < result[1]).toBe(true)
  expect(result[1] < result[2]).toBe(true)
  expect(createRandomSortedArray(0)).toEqual([])
  expect(createRandomSortedArray(-1)).toEqual([])
})