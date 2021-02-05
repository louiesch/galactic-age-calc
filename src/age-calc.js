export default class Person {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
//    this.yearsLeft = [];
//    this.planets = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter']
//    this.yearConversionRate = {Earth: 1, Mercury: 0.24, Venus: 0.62, Mars: 1.88, Jupiter: 11.86}
  }

//calculate age on given planet
  // getPlanetAge() {
  //   for (let i = 0; i < this.planets.length; i++) {
  //     let planet = this.planets[i];
  //     this.yearsLeft[planet] = Math.floor(this.age / this.yearConversionRate[planet])
  //   }
  // }

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
    return (this.lifespan - this.age);
  }

  mercuryYearsLeft() {
    return ((this.lifespan - this.age) / 0.24);
  }

  venusYearsLeft() {
    return ((this.lifespan - this.age) / 0.62);
  }

  marsYearsLeft() {
    return ((this.lifespan - this.age) / 1.88);
  }

  jupiterYearsLeft() {
    return ((this.lifespan - this.age) / 11.86);
  }
}