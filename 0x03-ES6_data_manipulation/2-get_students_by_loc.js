export default function getStudentsByLocation(studentList, city) {
  const loc = studentList.filter((student) => student.location === city);
  return loc;
}
