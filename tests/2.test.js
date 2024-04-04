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
const mapsUnion = require('../2/mapsUnion.js')
const firstMatrix = require('../2/firstMatrix.js')
const concatAll = require('../2/concatAll.js')
const alfabetoStrambo = require('../2/alfabetoStrambo.js')
const fattoriale = require('../2/fattoriale.js')
const arrayPairs = require('../2/arrayPairs.js')
const minMax = require('../2/minMax.js')

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
  expect(arraySwap([1, 2, 3, 4])).toEqual([2, 1, 4, 3]);
  expect(arraySwap([1, 2, 3])).toEqual([2, 1, 3]);
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

test("2/mapsUnion", async function() {
  expect(mapsUnion({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  expect(mapsUnion({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 1, b: 3 })
})

test("2/firstMatrix", async function() {
  expect(firstMatrix([3, 4, 5], 1)).toEqual([[3, 4, 5]])
  expect(firstMatrix([3, 4, 5], 0)).toEqual([])
  expect(firstMatrix([3, 4, 5], 4)).toEqual([[3, 4, 5], [3, 4, 5], [3, 4, 5], [3, 4, 5]])
})

test("2/concatAll", async function() {
  expect(concatAll([1, 2, 3], [4, 5, 6], [7])).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(concatAll([], [1], [2])).toEqual([1, 2])
})

test("2/alfabetoStrambo", async function() {
  expect(alfabetoStrambo("ciao a tutti")).toEqual("ciaoro ara tuttiri")
  expect(alfabetoStrambo("a a")).toEqual("ara ara")
  expect(alfabetoStrambo("")).toEqual("")
  expect(alfabetoStrambo("funziona solo con vocali alla fine")).toEqual("funzionara soloro con vocaliri allara finere")
})

test("2/fattoriale", async function() {
  expect(fattoriale(0)).toEqual(1)
  expect(fattoriale(1)).toEqual(1)
  expect(fattoriale(2)).toEqual(2)
  expect(fattoriale(3)).toEqual(6)
  expect(fattoriale(4)).toEqual(24)
  expect(fattoriale(5)).toEqual(120)
})

test("2/arrayPairs", async function() {
  expect(arrayPairs([1, 2], [4, 5])).toEqual([[1, 4], [2, 5]])
  expect(arrayPairs([1], [4, 5])).toEqual([[1, 4], [null, 5]])
})

test("2/minMax", async function() {
  expect(minMax([1, 2, 4, 5])).toEqual([1, 5])
  expect(minMax([-1, -5])).toEqual([-5, -1])
  expect(minMax([])).toEqual([])
  expect(minMax([-5, -4, -3, -2])).toEqual([-5, -2])
  expect(minMax([1])).toEqual([1, 1])

})