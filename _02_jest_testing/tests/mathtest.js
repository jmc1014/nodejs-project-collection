/* Comment Out to not include in testing */
const {
  calculateTip,
  celciusToFarenheit,
  farenheitToCelsius,
  add,
} = require("../src/math");

test("Should calculate total with tip!", () => {
  const total = calculateTip(10, 0.3);

  // using expect code to validate the value
  // expect gives you access to a number of "matchers" that let you validate different things.
  expect(total).toBe(13);

  //   if (total !== 13) {
  //     throw new Error("Total tip should be 13. Got " + total);
  //   }
});

test("Should calculate total with default tip!", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
  const temperature = farenheitToCelsius(32);
  expect(temperature).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const temperature = celciusToFarenheit(0);
  expect(temperature).toBe(32);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done(); // Need to call it. to trigger the testing is done or async
//   }, 2000);
// });

test("Should Add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two number using async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
