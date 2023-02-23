const noConditionals = require('../3/noConditionals.js')
const findLongestSubstring = require('../3/findLongestSubstring.js')
const isPalindrome = require('../3/isPalindrome.js')
const occurrencies = require('../3/occurrencies.js')
const firstSum = require('../3/firstSum.js')
const chessboard = require('../3/chessboard.js')
const morse = require('../3/morse.js')
const mergeSortedArrays = require('../3/mergeSortedArrays.js')


test("3/noConditionals", async function() {
  expect(noConditionals(1)).toBe(0)
  expect(noConditionals(0)).toBe(1)
})

test("3/findLongestSubstring", async function() {
  expect(findLongestSubstring("abcabcbb")).toBe("abc")
  expect(findLongestSubstring("bbbbb")).toBe("b")
  expect(findLongestSubstring("pwwkew")).toBe("wke")
})

test("3/isPalindrome", async function() {
  expect(isPalindrome("abba")).toBe(true)
  expect(isPalindrome("abbca")).toBe(false)
  expect(isPalindrome("12321")).toBe(true)
})

test("3/occurrencies", async function() {
  expect(occurrencies("abbaca")).toEqual([1,2,3])
  expect(occurrencies("caccia")).toEqual([1,2,3])
  expect(occurrencies("bisaccia")).toEqual([1,1,2,2,2])
})

test("3/firstSum", async function() {
  expect(firstSum([2,3], 4)).toEqual([])
  expect(firstSum([1,2,3], 4)).toEqual([1, 3])
  expect(firstSum([1,2,3], 3)).toEqual([1, 2])
})

test("3/chessboard", async function() {
  let res = chessboard(4)
  expect(res).toEqual([
    [ '#', ' ', '#', ' ' ],
    [ ' ', '#', ' ', '#' ],
    [ '#', ' ', '#', ' ' ],
    [ ' ', '#', ' ', '#' ]
  ])
})

test("3/morse", async function() {
  expect(morse('morse')).toEqual('-- --- .-. ... .')
  expect(morse('supercalifragilisticoespiralidoso')).toEqual('... ..- .--. . .-. -.-. .- .-.. .. ..-. .-. .- --. .. .-.. .. ... - .. -.-. --- . ... .--. .. .-. .- .-.. .. -.. --- ... ---')
})

test("3/mergeSortedArrays", async function() {
  expect(mergeSortedArrays([2,3], [4,5])).toEqual([2,3,4,5])
  expect(mergeSortedArrays([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6])
  expect(mergeSortedArrays([1,2,3], [])).toEqual([1,2,3])
  expect(mergeSortedArrays([], [0])).toEqual([0])
})