/*
*Create a function named setFromArray that returns
*a Set from an array.
*/
export default function setFromArray(array) {
  const set = new Set();
  array.forEach((element) => set.add(element));
  return set;
}
