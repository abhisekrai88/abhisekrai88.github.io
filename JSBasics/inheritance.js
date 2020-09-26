function Person(firstName, lastName) {
  this.FirstName = firstName;
  this.LastName = lastName;
}

function Teacher(firstName, lastName, instituteName, teacherID) {
  this.FirstName = firstName;
  this.lastName = lastName;
  this.instituteName = instituteName;
  this.teacherID = teacherID;
}

Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

var teacher = new Teacher("Abhisek", "Rai", "Mages", 7669);
