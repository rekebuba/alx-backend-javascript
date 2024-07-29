export default function getStudentsByLocation(getList, city) {
  if (!Array.isArray(getList)) {
    return [];
  }

  return getList.filter((value) => value.location === city);
}
