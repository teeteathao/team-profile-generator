const createHTML = require('./createHTML');

// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const employeeArray = [];

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
            type: 'input',
            name: 'id',
            message: 'Enter the manager ID',
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
            type: 'input',
            name: 'email',
            message: "Enter the manager's email",
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
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log("Please enter an office number.");
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

            employeeArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    
    Employee being added to the team
    
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
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
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Are there more team members?',
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
            employeeArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(employeeArray);
            }
            else {
                return employeeArray;
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
         .then(employeeArray => {
             return createHTML(employeeArray);
    })
         .then(pageHTML => {
             return writeFile(pageHTML);
    })
        .catch(err => {
        console.log(err);
    });
