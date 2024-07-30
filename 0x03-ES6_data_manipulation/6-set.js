export default function setFromArray(array) {
  const mySet = new Set();

  array.forEach((item) => {
    mySet.add(item);
  });

  return mySet;
}
