export function sorted<T extends string>(values: Iterable<T>): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}
