// Import fs module
const fs = require('fs');

// Asynchronous file reading
function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const response = [];
        const students = data.split('\n').filter((item) => item);
        students.shift();
        const text = `Number of students: ${students.length}`;
        console.log(text);
        response.push(text);
        const dict = {};
        students.forEach((line) => {
          const record = line.split(',');
          const key = record[3];
          const value = record[0];
          if (!(key in dict)) {
            dict[key] = [];
          }
          dict[key].push(value);
        });
        for (const key in dict) {
          if (key) {
            const t1 = `Number of students in ${key}: ${dict[key].length}. `;
            const t2 = `List: ${dict[key].join(', ')}`;
            const t = t1 + t2;
            console.log(t);
            response.push(t);
          }
        }
        resolve(response);
      }
    });
  });
}
// Export file
module.exports = countStudents;
