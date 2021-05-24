class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return `<a href="mailto:${this.email}">${this.email}</a>`;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;