export default function createIteratorObject(report) {
  const employeesArray = [];
  const employees = Object.values(report.allEmployees);
  for (const array of employees) {
    employeesArray.push(...array);
  }

  return employeesArray;
}
