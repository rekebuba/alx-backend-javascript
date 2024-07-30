export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [...set].filter((str) => str.includes(startString))
    .map((str) => str.slice(str.indexOf(startString) + startString.length));

  return result.join('-');
}
