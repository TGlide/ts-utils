type KeyTypesMap = Record<
  string,
  Array<string> | ((v: unknown) => boolean) | string
>;

export const isObjectType = <T>(
  value: unknown,
  keyTypesMap: KeyTypesMap
): value is T => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  for (const [key, check] of Object.entries(keyTypesMap)) {
    if (typeof check === "function") {
      if (!check(value[key])) {
        return false;
      }
    } else if (typeof check === "string") {
      if (typeof value[key] !== check) {
        return false;
      }
    } else if (!check.includes(typeof value[key])) {
      return false;
    }
  }

  return true;
};

// Provides a method with typed keys for Object.keys
export function objectKeys<K extends PropertyKey>(
  object: Record<K, unknown>
): Array<K> {
  return Object.keys(object) as Array<K>;
}

// Provides a method with typed keys for Object.entries
export function objectEntries<K extends PropertyKey, V>(object: Record<K, V>) {
  return Object.entries(object) as Array<[K, V]>;
}

export function objectFromEntries<K extends PropertyKey, V>(
  entries: Array<[K, V]>
): Record<K, V> {
  return Object.fromEntries(entries) as Record<K, V>;
}

export function objectFilter<K extends PropertyKey, V>(
  object: Partial<Record<K, V>>,
  predicate: (key: K, value: V) => boolean
): Partial<Record<K, V>> {
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) =>
      predicate(key as K, value as V)
    )
  ) as Partial<Record<K, V>>;
}

// Receives an array and an item, returns true if the item is past the middle of the array
export function isPastMiddleInArray<T>(array: Array<T>, item: T): boolean {
  return array.indexOf(item) > Math.floor(array.length / 2);
}

export function objectMapKeys<K extends PropertyKey, V>(
  obj: Record<K, V>,
  fn: (val: V, key: K, obj: Record<K, V>) => PropertyKey
): Record<PropertyKey, V> {
  const result: Record<PropertyKey, V> = {};
  objectKeys(obj).reduce((acc, k) => {
    if (typeof k === "string") {
      acc[fn(obj[k], k, obj)] = obj[k];
    } else {
      acc[k] = obj[k];
    }
    return acc;
  }, result);
  return result;
}