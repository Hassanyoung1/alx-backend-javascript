export default function createInt8TypedArray(length, position, value) {
  /* Type checking using typeof */
  if (typeof length !== 'number' || typeof position !== 'number') {
    throw new TypeError("Length and position must be numbers");
  }
  /* Check position within valid range */
  if (position < 0 || position >= length) {
    throw new RangeError("Position outside valid range");
  }
  /* Create the Int8Array here */
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  view.setInt8(position, value);
  /* Return the DataView */
  return view;
}
