const inquirer = require('inquirer');
const fs = require('fs');

const employeeArr = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role would you like to add?',
        choices: () => {
            if (employeeArr.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter their full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter their full name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter their email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID number:',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please their office number: ',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their office number!');
                return false;
            }
        },
        when: function(userResponse) {
            return userResponse.role === 'Manager'
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please their github username: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter their github username!');
                return false;
            }
        },
        when: function(userResponse) {
            return userResponse.role === 'Engineer'
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please their college: ',
        validate: collegeInput => {
            if (collegeInput) {
                return true;
            } else {
                console.log('Please enter their college!');
                return false;
            }
        },
        when: function(userResponse) {
            return userResponse.role === 'Intern'
        }
    }
]

function startPrompt() {
    return inquirer.prompt(questions)
    .then(userResponse => {
        employeeArr.push(userResponse);

        // if (userResponse.addEmployee) {
        //     return startPrompt();
        // } else {
        //     return employeeArr;
        // };
    });
};

startPrompt();