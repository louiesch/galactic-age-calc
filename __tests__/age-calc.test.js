import Person from '../src/age-calc.js';

describe('Person', () => {
  test('should correctly return users age in earth years', () => {
    const person = new Person(23);
    expect(person.age).toEqual(23);
  });
});