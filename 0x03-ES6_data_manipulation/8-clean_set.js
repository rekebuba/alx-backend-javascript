export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const result = [...set].filter((str) => str.includes(startString))
    .map((str) => str.slice(str.indexOf(startString) + startString.length));

  return result.join('-');
}
