const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github;
        this.role = 'Engineer'
    };

    getGithub() {
        return `Github: <a href="https://github.com/${this.github}">${this.github}</a>`;
    }
}

module.exports = Engineer; 