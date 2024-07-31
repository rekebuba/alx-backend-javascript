interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

const printTeacher:printTeacherFunction = (firstName, lastName) => {
  return firstName[0] + '.' + lastName;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  // properties
  firstName: string;
  lastName: string;

  // constructor
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Methods
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
