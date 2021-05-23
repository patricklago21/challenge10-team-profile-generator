const { expect } = require("@jest/globals");
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('patrick', 1234, 'patricklago21@gmail.com', 'patricklago21');
  
    expect(engineer).toEqual(expect.any(Object));
});

test('checks if role is Engineer', () => {
    const engineer = new Engineer('patrick', 1234, 'patricklago21@gmail.com', 'patricklago21');
  
    expect(engineer.role).toEqual('Engineer');
});

test('checks if github username is a string', () => {
    const engineer = new Engineer('patrick', 1234, 'patricklago21@gmail.com', 'patricklago21');
    
    expect(engineer.github).toEqual(expect.any(String));
});