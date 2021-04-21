// functie 1

const sum = function (...args) {
  return args.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45

// functie 2

const sum2 = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

const numbers = [1, 2, 3];

console.log(sum2(...numbers)); // 6
