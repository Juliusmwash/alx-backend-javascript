export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((obj) => obj.location === city).map((obj) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === obj.id);
    if (matchingGrade) {
      return { ...obj, grades: matchingGrade.grade };
    }
    return { ...obj, grades: 'N/A' };
  });
}
