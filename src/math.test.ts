import { expect, test } from 'vitest'

import { clamp, invlerp, lerp, randRange, scale } from './math'

test('lerp', () => {
  expect(lerp(0, 100, 0)).toBe(0)
  expect(lerp(0, 100, 0.5)).toBe(50)
  expect(lerp(0, 100, 1)).toBe(100)
  expect(lerp(100, 0, 0)).toBe(100)
})

test('invlerp', () => {
  expect(invlerp(0, 100, 0)).toBe(0)
  expect(invlerp(0, 100, 50)).toBe(0.5)
  expect(invlerp(0, 100, 100)).toBe(1)
  expect(invlerp(100, 0, 100)).toBe(0)
})

test('clamp', () => {
  expect(clamp(0, 0, 100)).toBe(0)
  expect(clamp(50, 0, 100)).toBe(50)
  expect(clamp(100, 0, 100)).toBe(100)
  expect(clamp(200, 0, 100)).toBe(100)
  expect(clamp(-100, 0, 100)).toBe(0)
})

test('clamp without min/max', () => {
  expect(clamp(0)).toBe(0)
  expect(clamp(0.5)).toBe(0.5)
  expect(clamp(1)).toBe(1)
  expect(clamp(2)).toBe(1)
  expect(clamp(-1)).toBe(0)
})

test('scale', () => {
  expect(scale(0, 100, 0, 200, 0)).toBe(0)
  expect(scale(0, 100, 0, 200, 50)).toBe(100)
  expect(scale(0, 100, 0, 200, 100)).toBe(200)
  expect(scale(100, 0, 0, 200, 100)).toBe(0)
})

test('randRange', () => {
  for (let i = 0; i < 10 ** 3; i++) {
    const r = randRange(0, 100)
    expect(r).toBeGreaterThanOrEqual(0)
    expect(r).toBeLessThanOrEqual(100)
  }
})
