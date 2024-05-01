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
  // Create an array of the data
  const students = data.split('\n').filter((item) => item);
  // Remove first element in array (Table head info)
  students.shift();
  console.log(`Number of students: ${students.length}`);
  // Restrucuture to dictionary with only required info
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
      const t1 = `Number of students in ${field}: ${dict[field].length}. `;
      const t2 = `List: ${dict[field].join(', ')}`;
      console.log(t1 + t2);
    }
  }
}

// Export function as module
module.exports = countStudents;
