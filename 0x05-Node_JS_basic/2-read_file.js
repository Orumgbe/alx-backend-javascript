// Importing filesystem module
const fs = require('fs');

// Log data in the file to console
function countStudents(fileName) {
  let data;
  try {
    data = fs.readFileSync(fileName, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n').filter((item) => item);
  students.shift();
  console.log(`Number of students: ${students.length}`);
  console.log(students);
  const dict = {};
  students.forEach((line) => {
    const record = line.split(',');
    const key = record[3];
    if (!(key in dict)) {
      dict[key] = [];
    }
    dict[key].push(`${record[0]}`);
  });
  for (const field in dict) {
    if (field) {
      process.stdout.write(`Number of students in ${field}: ${dict[field].length}. `);
      process.stdout.write(`List: ${dict[field].join(', ')}\n`);
    }
  }
}

// Export function as module
module.exports = countStudents;
