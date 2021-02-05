export default class Person {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }

  getMercuryAge() {
    return Math.floor(this.age / 0.24)
  }

  getVenusAge() {
    return Math.floor(this.age / 0.62)
  }

  getMarsAge() {
    return Math.floor(this.age / 1.88)
  }

  getJupiterAge() {
    return Math.floor(this.age / 11.86)
  }

  earthYearsLeft() {
    
  }
}