// createHTML
const createHTML = require('./createHTML');

// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
// const path = require('path');
const employeeList = [];

// prompt to add manager - add their name, ID, email, and office number
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?',
            validate: inputName => {
                if (inputName) {
                    return true;
                }
                else {
                    console.log('Please enter the manager name.');
                    return false;
                }
            }
        },
        {
            // prompt for ID
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log('Please enter the manager ID.')
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            // email prompt
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                }
                else {
                    console.log('Please enter an email.');
                    return false;
                }
            }
        },
        {
            // prompt for office number
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log("Please enter a numeric office number.");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            employeeList.push(manager);
            console.log(manager);
        })
};

// add employee and their role, name, ID, email and github.
const addEmployee = () => {
    console.log(`
    ////////////////////////////////////////

    The employee is being added to the team!
    
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    `);

    return inquirer.prompt([
        {
            // role of employee - select from choices
            type: 'list',
            name: 'role',
            message: "What is the employee's role? Select from the choices:",
            choices: ['Engineer', 'Intern']
        },
        {
            // name of emplohee
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            // employee ID number
            type: 'input',
            name: 'id',
            message: "Enter the employees ID",
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log("Please enter an ID.");
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            // employee email address
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email.')
                    return false;
                }
            }
        },
        {
            // inter's school
            type: 'input',
            name: 'school',
            message: "Where does the intern attend school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the school name.")
                }
            }
        },
        {
            // employee github profile page
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the github username.")
                }
            }
        },
        {
            // confirm and prompt to add any additional employees
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Are there more team members to add to the team?',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);

            }
            employeeList.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(employeeList);
            }
            else {
                return employeeList;
            }
        })
    };

        // createHTML
        const writeFile = (data) => {
    fs.writeFile('./site/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("Your team profile has been created successfully. Check out the index.html");
        }
    })
        };

        addManager()
         .then(addEmployee)
         .then(employeeList => {
             return createHTML(employeeList);
    })
         .then(pageHTML => {
             return writeFile(pageHTML);
    })
        .catch(err => {
        console.log(err);
    });
