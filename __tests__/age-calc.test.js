import Person from '../src/age-calc.js';

describe('Person', () => {

  let person;

  beforeEach(() => {
    person = new Person(23);
  });

  test("should correctly return users age in earth years", () => {
    expect(person.age).toEqual(23);
  });

  test("should correctly return users age in Mercury years", () => {
    expect(person.getMercuryAge()).toEqual(Math.floor(23 / 0.24));
  });
  
  test("should correctly return users age in Venus years", () => {
    expect(person.getVenusAge()).toEqual(Math.floor(23 / 0.62));
  });

  test("should correctly return users age in Mars years", () => {
    expect(person.getMarsAge()).toEqual(Math.floor(23 / 1.88));
  });
});