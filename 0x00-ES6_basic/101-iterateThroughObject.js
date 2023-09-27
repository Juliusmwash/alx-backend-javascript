export default function iterateThroughObject(reportWithIterator) {
  let namesString = '';
  for (const name of reportWithIterator) {
    namesString = `${namesString + name} | `;
  }
  namesString = namesString.slice(0, -3);
  return namesString;
}
