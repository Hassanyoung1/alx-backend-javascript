import getListStudents from "./0-get_list_students";

export default function getListStudentIds() {
  const studentList = getListStudents(); // Call the getListStudents function

  // Check if getListStudents returns an array using Array.isArray()
  if (!Array.isArray(studentList)) {
    return []; // Return an empty array if not an array
  }

  // Use map to create a new array containing only the IDs
  const studentIds = studentList.map(student => student.id);

  return studentIds;
}
