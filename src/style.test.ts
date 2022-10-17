// @vitest-environment happy-dom
import { expect, test } from 'vitest'

import { getNumFromStyleStr, getRootFontSize } from './style'

test('getNumFromStyleStr', () => {
  expect(getNumFromStyleStr('0px')).toBe(0)
  expect(getNumFromStyleStr('10px')).toBe(10)

  document.body.style.fontSize = '16px'
  expect(getNumFromStyleStr('10rem')).toBe(160)
  document.body.style.fontSize = '32px'
  expect(getNumFromStyleStr('10rem')).toBe(320)

  expect(getNumFromStyleStr('asdadad')).toBe(0)
})

test('getRootFontSize', () => {
  document.body.style.fontSize = '16px'
  expect(getRootFontSize()).toBe(16)
  document.body.style.fontSize = '32px'
  expect(getRootFontSize()).toBe(32)
})
