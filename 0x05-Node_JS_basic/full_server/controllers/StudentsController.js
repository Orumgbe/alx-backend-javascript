import readDatabase from '../utils';

const DATABASE = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(DATABASE).then(
      // Promise successfully resolves list of student
      (students) => {
        // Process data object
        let output = 'This is the list of our students\n';
        for (const field in students) {
          if (field) {
            students[field].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            output += `Number of students in ${field}: ${students[field].length}\n`;
            output += `List: ${students[field].join(', ')}`;
          }
        }
        response.status(200).send(output);
      },
    ).catch(() => {
      // Handle error
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major) {
      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(DATABASE).then(
      // Promise successfully resolves list of student
      (students) => {
        // Process data object
        let output = '';
        students[major].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        output += `List: ${students[major].join(', ')}`;
        response.status(200).send(output);
      },
    ).catch(() => {
      // Handle error
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
