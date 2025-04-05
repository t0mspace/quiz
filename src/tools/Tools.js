export default class Tools{
  static shuffleArray(array) {
    if(!Array.isArray(array)) {
      throw new TypeError('Array should be an array');
    }
    return array.map(value => ({ value, sortKey: Math.random() })) // step 1: attach a random sort key
      .sort((a, b) => a.sortKey - b.sortKey)             // step 2: sort by the random key
      .map(item => item.value);
  }
}
