import { expect, test } from 'vitest'

import { getRandomColor } from './color'

test('getRandomColor', () => {
  expect(getRandomColor()).toMatch(/^#[0-9A-F]{6}$/)
})
