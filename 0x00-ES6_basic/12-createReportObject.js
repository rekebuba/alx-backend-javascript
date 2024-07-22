export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(dictionary) {
      return Object.keys(dictionary).length;;
    },
  };
}
