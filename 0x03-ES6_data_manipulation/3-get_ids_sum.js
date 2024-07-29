import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(getList) {
  if (!Array.isArray(getList)) {
    return 0;
  }

  return getListStudentIds(getList).reduce((prev, current) => prev + current);
}
