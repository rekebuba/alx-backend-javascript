import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(getList, city, newGrades) {
  if (!Array.isArray(getList)) {
    return [];
  }

  const gradeMap = new Map(newGrades.map(({ studentId, grade }) => [studentId, grade]));

  return getStudentsByLocation(getList, city).map((student) => {
    if (gradeMap.has(student.id)) {
      student.grade = gradeMap.get(student.id);
    } else {
      student.grade = 'N/A';
    }

    return student;
  });
}
