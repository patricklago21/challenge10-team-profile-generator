const { expect } = require("@jest/globals");
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('patrick', 1234, 'patricklago21@gmail.com', "Saint Mary's College of CA");
  
    expect(intern).toEqual(expect.any(Object));
});

test('checks if role is Intern', () => {
    const intern = new Intern('patrick', 1234, 'patricklago21@gmail.com', "Saint Mary's College of CA");
  
    expect(intern.role).toEqual('Intern');
});

test('checks if school is a string', () => {
    const intern = new Intern('patrick', 1234, 'patricklago21@gmail.com', "Saint Mary's College of CA");
  
    expect(intern.school).toEqual(expect.any(String));
});