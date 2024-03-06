/*
*Using spread syntax, concatenate 2 arrays and each character of a
*string by modifying the function
*/
export default function concatArrays(array1, array2, string) {
  return ([...array1, ...array2, ...string]);
}
