const counter1 = (function () {
  let count = 0;

  return function (n) {
    if (n !== undefined) {
      count = n;
      return count;
    }
    return count++;
  };
})();

console.log(counter1());
console.log(counter1());
console.log(counter1(100));
console.log(counter1());
console.log(counter1());
console.log(counter1(500));
console.log(counter1());
console.log(counter1());
console.log(counter1(0));
console.log(counter1());
console.log(counter1());

const counterFactory = function () {
  let count = 0;

  return {
    value(n) {
      if (n !== undefined) {
        count = n;
      }
      return count;
    },

    increment() {
      count++;
    },

    decrement() {
      count--;
    },
  };
};

const counter = counterFactory();

console.log(counter.value());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());

counter.decrement();
counter.decrement();
console.log(counter.value());

console.log(counter.value(100));
counter.decrement();
console.log(counter.value());

console.log(counter.value(200));
counter.increment();
console.log(counter.value());

const myPrint = (a, b, res) => {
  return `${a}^${b}=${res}`;
};

const myPow = (a, b, myPrint) => {
  let result;

  function pow(base, exp) {
    if (exp === 0) return 1;

    if (exp > 0) {
      return base * pow(base, exp - 1);
    } else {
      return 1 / pow(base, -exp);
    }
  }

  result = pow(a, b);

  return myPrint(a, b, result);
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));
console.log(myPow(2, 0, myPrint));
console.log(myPow(2, -2, myPrint));

const list = [12, 23, 100, 34, 56, 9, 233];

const myMax = (arr) => {
  return Math.max.apply(null, arr);
};

console.log(myMax(list));

const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));
