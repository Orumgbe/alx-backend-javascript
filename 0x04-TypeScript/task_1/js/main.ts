interface Teacher {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
  [key: string]: unknown
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string
}

const printTeacher:printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string):StudentClassInterface
}

interface StudentClassInterface {
  workOnHomework(): string
  displayName(): string
}

class StudentClass implements StudentClassInterface{
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}