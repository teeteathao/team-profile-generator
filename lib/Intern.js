const Employee = require("./Employee");

class Intern extends Employee {
     // Constructor to create intern name, id, email, and school
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
    
}

module.exports = Intern;
