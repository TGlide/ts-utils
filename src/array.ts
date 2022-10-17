export const range = (start: number, stop?: number): number[] => {
  const n1 = stop === undefined ? 0 : start
  const n2 = stop === undefined ? start : stop
  const result: number[] = []

  for (let i = n1; i < n2; i++) {
    result.push(i)
  }
  return result
}

// function that given an array of numbers, and a percentage, returns the value at that percentage.
// e.g. given [0, 100, 50] and 0.25, returns 50
export const getValueAtPercentage = (
  values: number[],
  percentage: number
): number => {
  const lowerBound = Math.floor(percentage * (values.length - 1))
  const upperBound = Math.ceil(percentage * (values.length - 1))

  const lowerValue = values[lowerBound]
  const upperValue = values[upperBound]
  const valueDiff = Math.abs(lowerValue - upperValue)
  const multiplier = lowerValue > upperValue ? -1 : 1
  if (valueDiff === 0) return lowerValue

  const lowerPercentage = lowerBound / (values.length - 1)
  const upperPercentage = upperBound / (values.length - 1)
  const percentageDiff = upperPercentage - lowerPercentage

  return (
    lowerValue +
    valueDiff * ((percentage - lowerPercentage) / percentageDiff) * multiplier
  )
}

export const isLast = (index: number, array: unknown[]) => {
  return index === array.length - 1
}

export const getNewIndex = (
  array: unknown[],
  currIndex: number,
  add: number
) => {
  let newIndex = (currIndex + add) % array.length
  if (newIndex < 0) newIndex = array.length + newIndex
  return newIndex
}

export const isArrayOfType = <T>(
  value: unknown,
  typeChecker: ((v: unknown) => v is T) | string | string[]
): value is T[] => {
  return (
    Array.isArray(value) &&
    value.every((v) => {
      if (typeof typeChecker === 'function') {
        return typeChecker(v)
      } else if (typeof typeChecker === 'string') {
        return typeof v === typeChecker
      }
      return typeChecker.includes(typeof v)
    })
  )
}

// function that given an array and an item, toggles the item in the array
export const toggleItemInArray = <T>(array: T[], item: T): T[] => {
  const index = array.indexOf(item)
  if (index === -1) return [...array, item]
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

// Receives an array and an item, returns true if the item is past the middle of the array
export function isPastMiddleInArray<T>(array: Array<T>, item: T): boolean {
  return array.indexOf(item) > Math.floor(array.length / 2)
}
