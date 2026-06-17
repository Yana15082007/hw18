class CalorieCalculator {
  constructor() {
    this.products = new Map();
  }
  addProduct(name, calorie) {
    this.products.set(name, calorie);
  }
  getProductCalories(productName) {
    if (this.products.has(productName)) {
      return this.products.get(productName);
    } else {
      return "Product not found";
    }
  }
  removeProduct(productName) {
    this.products.delete(productName);
  }
}

const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct("Apple", 52);
calorieCalculator.addProduct("Banana", 89);
console.log(calorieCalculator.getProductCalories("Apple"));
console.log(calorieCalculator.getProductCalories("Banana"));
calorieCalculator.removeProduct("Apple");
console.log(calorieCalculator.getProductCalories("Apple"));

class UniqueUsernames {
  constructor() {
    this.users = new Set();
  }
  addUser(username) {
    this.users.add(username);
  }
  exists(username) {
    return this.users.has(username);
  }
  count() {
    return this.users.size;
  }
}

const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser("john_doe");
uniqueUsernames.addUser("jane_doe");
uniqueUsernames.addUser("john_doe");
console.log(`Існує 'john_doe': ${uniqueUsernames.exists("john_doe")}`);
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`);
