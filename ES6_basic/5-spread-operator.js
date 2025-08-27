export default function concatArrays(array1, array2, string) {
    const array_combined = [...array1, ...array2, ...string];
    return array_combined;
}