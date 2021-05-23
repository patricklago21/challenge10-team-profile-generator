const { expect } = require("@jest/globals");
const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('patrick', 1234, 'patricklago21@gmail.com', 9876);
  
    expect(manager).toEqual(expect.any(Object));
});

test('checks if role is Manager', () => {
    const manager = new Manager('patrick', 1234, 'patricklago21@gmail.com', 9876);
  
    expect(manager.role).toEqual('Manager');
});

test('checks if officeNumber is a number', () => {
    const manager = new Manager('patrick', 1234, 'patricklago21@gmail.com', 9876);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});