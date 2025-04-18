export default class ALXCourse {
  constructor(name, length, students) {
    // verify type during object creation
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
    ) {
      throw new Error('Invalid attribute type');
    }

    // private attributes
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and setter for name
  get name() {
    return this.internalName;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this.internalName = value;
  }

  // Getter and setter for length
  get length() {
    return this.internalLength;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this.internalLength = value;
  }

  // Getter and setter for students
  get students() {
    return this.internalStudents;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Students must be an array');
    }
    this.internalStudents = value;
  }
}
