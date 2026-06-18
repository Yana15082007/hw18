function sumArray(numbers) {
  return numbers.reduce(result, 0);
  function result(sum, value) {
    return sum + value;
  }
}

const exampleArray = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArray);
console.log("Сума елементів масиву:", sum);

function doubleArrayElements(numbers) {
  return numbers.map(result);
  function result(num) {
    return num * 2;
  }
}

const exampleArray1 = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArray1);
console.log("Подвоєні елементи масиву:", doubledArray);

class SkillsManager {
  constructor() {
    this.skills = [];
  }
  addSkill(skill) {
    if (typeof skill === "string" && skill.length >= 2) {
      this.skills.push(skill);
      return skill;
    } else {
      return null;
    }
  }
  getAllSkills() {
    return this.skills;
  }
}

const skillsManager = new SkillsManager();
console.log(skillsManager.addSkill("JavaScript"));
console.log(skillsManager.addSkill("CSS"));
console.log(skillsManager.getAllSkills());

function DateCalculator(initialDate) {
  const date = new Date(initialDate);
  this.addDays = function (days) {
    date.setDate(date.getDate() + days);
  };
  this.subtractDays = function (days) {
    date.setDate(date.getDate() - days);
  };
  this.getResult = function () {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
}

const dateCalculator = new DateCalculator("2023-01-01");
dateCalculator.addDays(5);
console.log(dateCalculator.getResult());
dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult());
