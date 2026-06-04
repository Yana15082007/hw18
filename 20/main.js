var userObj = {
  firstName: "Yana",
  lastName: "Reva",
  age: 18,
  fullName: function () {
    return this.firstName + ` ` + this.lastName;
  },
};

console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(text) {
  return (text || "Default text").toUpperCase();
}

console.log(defUpperStr("My text"));
console.log(defUpperStr());

function evenFn(n) {
  var numbers = [];
  for (var i = 2; i <= n; i += 2) {
    numbers.push(i);
  }
  return numbers;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
  switch (n) {
    case 1:
      return "Понеділок";
      break;
    case 2:
      return "Вівторок";
      break;
    case 3:
      return "Середа";
      break;
    case 4:
      return "Четвер";
      break;
    case 5:
      return "П'ятниця";
      break;
    case 6:
      return "Субота";
      break;
    case 7:
      return "Неділя";
      break;
    default:
      return null;
  }
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn("2"));

function ageClassification(n) {
  return n < 0 || n > 122
    ? null
    : n <= 24
      ? "Дитинство"
      : n <= 44
        ? "Молодість"
        : n <= 65
          ? "Зрілість"
          : n <= 75
            ? "Старість"
            : n <= 90
              ? "Довголіття"
              : "Рекорд";
}

console.log("    -1 :", ageClassification(-1));
console.log("     0 :", ageClassification(0));
console.log("     1 :", ageClassification(1));
console.log("    24 :", ageClassification(24));
console.log(" 24.01 :", ageClassification(24.01));
console.log("    44 :", ageClassification(44));
console.log(" 44.01 :", ageClassification(44.01));
console.log("    65 :", ageClassification(65));
console.log("  65.1 :", ageClassification(65.1));
console.log("    75 :", ageClassification(75));
console.log(" 75.01 :", ageClassification(75.01));
console.log("    90 :", ageClassification(90));
console.log(" 90.01 :", ageClassification(90.01));
console.log("   122 :", ageClassification(122));
console.log("122.01 :", ageClassification(122.01));
console.log("   150 :", ageClassification(150));

console.log("    -1 :", ageClassification(-1) === null);
console.log("     0 :", ageClassification(0) === null);
console.log("     1 :", ageClassification(1) === "Дитинство");
console.log("    24 :", ageClassification(24) === "Дитинство");
console.log(" 24.01 :", ageClassification(24.01) === "Молодість");
console.log("    44 :", ageClassification(44) === "Молодість");
console.log(" 44.01 :", ageClassification(44.01) === "Зрілість");
console.log("    65 :", ageClassification(65) === "Зрілість");
console.log("  65.1 :", ageClassification(65.1) === "Старість");
console.log("    75 :", ageClassification(75) === "Старість");
console.log(" 75.01 :", ageClassification(75.01) === "Довголіття");
console.log("    90 :", ageClassification(90) === "Довголіття");
console.log(" 90.01 :", ageClassification(90.01) === "Рекорд");
console.log("   122 :", ageClassification(122) === "Рекорд");
console.log("122.01 :", ageClassification(122.01) === null);
console.log("   150 :", ageClassification(150) === null);

function oddFn(n) {
  var numbers = [];
  var i = 1;
  while (i < n) {
    numbers.push(i);
    i += 2;
  }
  return numbers;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a, b, callback) {
  if (typeof callback !== `function`) return false;
  return callback(a, b);
}
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, "not a func"));
