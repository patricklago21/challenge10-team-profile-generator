const { expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('patrick', 1234, 'patricklago21@gmail.com');
  
    expect(employee).toEqual(expect.any(Object));
});

test('checks if name is a string', () => {
    const employee = new Employee('patrick', 1234, 'patricklago21@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    const employee = new Employee('patrick', 1234, 'patricklago21@gmail.com');
    
    expect(employee.id).toEqual(expect.any(Number));
});

test('checks if email is a string', () => {
    const employee = new Employee('patrick', 1234, 'patricklago21@gmail.com');
    
    expect(employee.email).toEqual(expect.any(String));
});