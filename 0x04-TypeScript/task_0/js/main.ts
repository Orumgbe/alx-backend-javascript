interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const s1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 19,
    location: "Lagos"
}

const s2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    location: "Abuja"
}

const studentsList: Student[] = [
    s1,
    s2
]

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerName = document.createElement('td');
const headerLocation = document.createElement('td');

headerName.textContent = 'firstName';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);

thead.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
