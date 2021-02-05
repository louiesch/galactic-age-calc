import Person from '../src/age-calc.js';

describe('Person', () => {
  test('should correctly return users age in earth years', () => {
    const person = new Person(23);
    expect(person.age).toEqual(23);
  });

  test("should correctly return users age in Mercury years", () => {
    const person = new Person(23);
    expect(person.getMercuryAge()).toEqual(23 / 0.24);
  });
  
  test("should correctly return users age in Venus years", () => {
    const person = new Person(23);
    expect(person.getVenusAge()).toEqual(23 / 0.62);
  });
});