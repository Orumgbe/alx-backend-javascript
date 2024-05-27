export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students) && students.every(item => typeof(item) === 'string')) {
      this._students = students;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof(name) === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }
  set length(length) {
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get students() {
    return this._students;
  }
  set students(students) {
    if (Array.isArray(students) && students.every(item => typeof(item) === 'string')) {
      this._students = students;
    } else {
      throw TypeError('Students must be an array of strings');
    } 
  }
}
