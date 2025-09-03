export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    let value = array[idx];
    array[idx] = array + appendString;
    console.log("idx: " + idx);
    console.log("value: " + value);
    console.log("array[idx]: " + array[idx]);
  }

  return array;
}