// const calculateTip = (total, tipPercent = 0.25) => {
//   const tip = total * tipPercent;
//   return total + tip;
// };
// Refactoring it then test it using jest if the refactor code did not break anything
const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const farenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celciusToFarenheit = (temp) => {
  return temp * 1.8 + 32;
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }

      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calculateTip,
  farenheitToCelsius,
  celciusToFarenheit,
  add,
};
