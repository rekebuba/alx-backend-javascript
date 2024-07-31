interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'pedro',
  lastName: 'james',
  age: 20,
  location: 'earth',
}

const student2: Student = {
  firstName: 'julia',
  lastName: 'tony',
  age: 25,
  location: 'mars',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  table.appendChild(row);
});

document.body.appendChild(table);
