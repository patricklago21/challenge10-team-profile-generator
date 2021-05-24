const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

const addEmployee = employeeInfo => {
    let allCards = '';

    employeeInfo.forEach(employee => {
        const {name, id, email, role} = employee;
        let newEmployee = '';
        let employeeGet = '';

        switch(role) {
            case 'Manager':
                newEmployee = new Manager(name, id, email, role, employee.OfficNumber);
                employeeGet = newEmployee.getOfficeNumber();
                break;
            case 'Engineer':
                newEmployee = new Engineer(name, id, email, role, employee.github);
                employeeGet = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(name, id, email, role, employee.school);
                employeeGet = newEmployee.getSchool();
                break;
        };

        allCards += `
        <div class="col-3">
                <div class="card border-primary mb-3">
                    <div class="card-header bg-primary text-white">${newEmployee.getRole()}</div>
                    <div class="card-body text-primary">
                      <h5 class="card-title">${newEmployee.getName()}</h5>
                      <ul class="list-group">
                        <li class="list-group-item">${newEmployee.getId()}</li>
                        <li class="list-group-item">${newEmployee.getEmail()}</li>
                        <li class="list-group-item">${employeeGet}</li>
                      </ul>
                    </div>
                </div>
            </div>`
    });
    return allCards;
};

const generatePage = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <header class="bg-danger">
            <p class="h1 text-center text-white">My Team</p>
        </header>

        <div class="container">
            <div class="row">
                ${addEmployee(templateData)}
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generatePage;