export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [...set].filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length));

  return result.join('-');
}
