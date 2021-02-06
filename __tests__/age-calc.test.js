import Person from '../src/age-calc.js';

describe('Person', () => {

  let person;

  beforeEach(() => {
    person = new Person(23, 76);
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
    expect(person.earthYearsLeft()).toEqual(76 - 23);
  });

  test("should correctly return expected years to live on Mercury", () => {
    expect(person.mercuryYearsLeft()).toEqual((76-23) / 0.24);
  });

  test("should correctly return expected years to live on Venus", () => {
    expect(person.venusYearsLeft()).toEqual((76-23) / 0.62);
  });

  test("should correctly return expected years to live on Mars", () => {
    expect(person.marsYearsLeft()).toEqual((76-23) / 1.88);
  });

  test("should correctly return expected years to live on Jupiter", () => {
    expect(person.jupiterYearsLeft()).toEqual((76-23) / 11.86);
  });

  let oldPerson;

  beforeEach(() => {
    oldPerson = new Person(80, 76);
  });

  test("should determine how much user has surpassed life expectancy", () => {
    expect(oldPerson.yearsPast()).toEqual("Looks like you are 4 years older than the average lifespan!")
  })
});