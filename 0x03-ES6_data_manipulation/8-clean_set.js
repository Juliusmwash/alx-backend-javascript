function cleanSet(set, startString) {
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

export default cleanSet;
