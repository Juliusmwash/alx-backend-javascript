export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
/* function cleanSet(set, startString) {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)
      && startString !== '') {
      if (result.length > 0) {
        result += '-';
      }
      result += value.slice(startString.length);
    }
  }
  return result;
}

export default cleanSet; */
