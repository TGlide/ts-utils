import { expect, test } from 'vitest'

import {
  getValueAtPercentage,
  range,
  getNewIndex,
  isArrayOfType,
  isLast,
  toggleItemInArray,
  isPastMiddleInArray,
} from './array'

test('range', () => {
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
  expect(range(5)).toEqual([0, 1, 2, 3, 4])
})

test('getValueAtPercentage', () => {
  expect(getValueAtPercentage([0, 100, 50], 0.25)).toBe(50)
  expect(getValueAtPercentage([0, 100, 50], 0.5)).toBe(100)
  expect(getValueAtPercentage([0, 100, 50], 0.75)).toBe(75)
})

test('getNewIndex', () => {
  expect(getNewIndex([1, 2, 3], 0, 1)).toBe(1)
  expect(getNewIndex([1, 2, 3], 2, 1)).toBe(0)
  expect(getNewIndex([1, 2, 3], 2, -1)).toBe(1)
  expect(getNewIndex([1, 2, 3], 0, -1)).toBe(2)
})

test('isArrayOfType', () => {
  expect(
    isArrayOfType([1, 2, 3], (v): v is number => typeof v === 'number')
  ).toBe(true)
  expect(
    isArrayOfType([1, 2, '3'], (v): v is number => typeof v === 'number')
  ).toBe(false)
  expect(
    isArrayOfType(['1', '2', '3'], (v): v is string => typeof v === 'string')
  ).toBe(true)
  expect(
    isArrayOfType([1, 2, '3'], (v): v is string => typeof v === 'string')
  ).toBe(false)
  expect(isArrayOfType([1, 2, '3'], ['number', 'string'])).toBe(true)
  expect(isArrayOfType([1, 2, '3'], ['number', 'boolean'])).toBe(false)
  expect(isArrayOfType([1, 2], ['number', 'boolean'])).toBe(true)
  expect(isArrayOfType([1, 2, '3'], 'number')).toBe(false)
  expect(isArrayOfType([1, 2, 3], 'number')).toBe(true)
})

test('isLast', () => {
  expect(isLast(0, [1, 2, 3])).toBe(false)
  expect(isLast(2, [1, 2, 3])).toBe(true)
})

test('toggleItemInArray', () => {
  expect(toggleItemInArray([1, 2, 3], 2)).toEqual([1, 3])
  expect(toggleItemInArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  expect(toggleItemInArray([1, 2, 3], 1)).toEqual([2, 3])
})

test('isPastMiddleInArray', () => {
  expect(isPastMiddleInArray([1, 2, 3], 0)).toBe(false)
  expect(isPastMiddleInArray([1, 2, 3], 1)).toBe(false)
  expect(isPastMiddleInArray([1, 2, 3], 2)).toBe(false)
  expect(isPastMiddleInArray([1, 2, 3], 3)).toBe(true)
  expect(isPastMiddleInArray([1, 2, 3], 4)).toBe(false)
})
