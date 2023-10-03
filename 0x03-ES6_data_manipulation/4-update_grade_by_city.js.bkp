export default function updateStudentGradeByCity(array, city, newGrades) {
  const filteredArray = array.filter((obj) => obj.location === city);

  const updatedArray = filteredArray.map((obj) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === obj.id);
    if (matchingGrade) {
      return { ...obj, grades: matchingGrade.grade };
    }
    return { ...obj, grades: 'N/A' };
  });

  return updatedArray;
}
