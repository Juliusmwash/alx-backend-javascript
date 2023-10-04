/* // Import css file
import '../styles/styles.css'; */

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]) {
  const table = document.createElement("table");
  table.classList.add("student-table"); // Add a CSS class to the table for styling
  const thead = table.createTHead();
  const tbody = document.createElement("tbody");

  // Create table header row
  const headerRow = thead.insertRow();
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  headerCell1.textContent = "First Name";
  headerCell2.textContent = "Location";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);

  students.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Render the table with the student data
renderTable(studentsList);
