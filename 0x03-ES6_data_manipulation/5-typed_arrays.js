export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);

  const buffer = new DataView(arrayBuffer);

  const int8Array = new Int8Array(arrayBuffer);

  if (position < 0 || position >= int8Array.length) {
    throw new Error('Position outside range');
  }

  int8Array[position] = value;

  return buffer;
}
