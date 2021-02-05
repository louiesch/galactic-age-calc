import Person from '../src/age-calc.js';

describe('Person', () => {

  let person;

  beforeEach(() => {
    person = new Person(23, 81);
  });

  //tests for age in given planet's years
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

  test("should correctly return users age in Jupiter years", () => {
    expect(person.getJupiterAge()).toEqual(Math.floor(23 / 11.86));
  });

  //tests for years left to live
  test("should correctly return expected years left to live on Earth", () => {
    expect(person.earthYearsLeft()).toEqual(81 - 23);
  });

  test("should correctly return expected years to live on Mercury", () => {
    expect(person.mercuryYearsLeft()).toEqual((81-23) / 0.24);
  });

  test("should correctly return expected years to live on Venus", () => {
    expect(person.venusYearsLeft()).toEqual((81-23) / 0.62);
  });

  test("should correctly return expected years to live on Mars", () => {
    expect(person.marsYearsLeft()).toEqual((81-23) / 1.88);
  });

  test("should correctly return expected years to live on Jupiter", () => {
    expect(person.jupiterYearsLeft()).toEqual((81-23) / 11.86);
  });
});