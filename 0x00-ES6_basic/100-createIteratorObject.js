export default function createIteratorObject(report) {
  const newList = Object.values(report.allEmployees).flat();
  return newList;
}
