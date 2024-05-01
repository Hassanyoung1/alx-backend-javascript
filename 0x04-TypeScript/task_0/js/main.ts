const studentList = [
  { firstName: "Gift", lastName: "Emmanuel", age: 29, location: "Nigeria" },
  { firstName: "Olaoluwa", lastName: "Hakeem", age: 30, location: "Nigeria" },
];

function renderTable() {
  const tableBody = document.getElementById("tableData");

  tableBody.innerHTML = "";

  studentList.forEach((student) => {
    const tableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location; // Use student.location here

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);

    tableBody.appendChild(tableRow);
  });
}

window.onload = renderTable;

