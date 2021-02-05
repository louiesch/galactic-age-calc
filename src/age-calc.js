export default class Person {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }

//calculate age on given planet
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
  

  //calculate years left on planet, in that planet's years
  // earthLifespan() {
  //   let worldAverage = 73;
  //   if (this.gender === "male") {
  //     worldAverage -= 3;
  //   } else {
  //     worldAverage +=3;
  //   };
  //   return worldAverage
  // };

  earthYearsLeft() {
    return Math.floor(this.lifespan - this.age)
  }

  mercuryYearsLeft() {
    return Math.floor((this.lifespan - this.age) / 0.24)

  }
}