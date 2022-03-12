const Employee = require("./Employee");


class Engineer extends Employee {
     // Constructor to create engineers name, id, email, and github site
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

}

module.exports = Engineer;