## NodeJs Jest Test Framework

on CLI run `npm test`

### Docs

https://jestjs.io/docs/getting-started
https://jestjs.io/docs/expect
https://jestjs.io/docs/cli

#### Why test?

- Saves time
- Creates reliable software
- Gives flexibility to developers
  - Refactoring
  - Collaborating
  - Profiling
- Peace of mind

### On package.json

```
  ...
  "scripts": {
    "start": "node src/index.js",
    "dev": "env-cmd ./config/dev.env nodemon src/index.js",
    "test": "jest --watch"
  },
  ...
```

Then run in CLI `npm test`

### Testing Async Code

Either declarin a variable or using async/await method

```
test("Should Add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done(); // Called the declare variable, Any variable name
  });
});

test("Should add two number using async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
```

### Testing Express

Using supertest package https://www.npmjs.com/package/supertest

#### Setup and Teardown

https://jestjs.io/docs/setup-teardown

Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run.

```
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
```

#### Mocking Libraries

https://jestjs.io/docs/mock-functions

So the process of mocking is the process of replacing the real functions that run with functions that you create when we're running in a test environment.

### Extra Test TODO

#### User Test Ideas

[] Should not signup user with invalid name/email/password
[] Should not update user if unauthenticated
[] Should not update user with invalid name/email/password
[] Should not delete user if unauthenticated
[]

#### Task Test Ideas

[] Should not create task with invalid description/completed
[] Should not update task with invalid description/completed
[] Should delete user task
[] Should not delete task if unauthenticated
[] Should not update other users task
[] Should fetch user task by id
[] Should not fetch user task by id if unauthenticated
[] Should not fetch other users task by id
[] Should fetch only completed tasks
[] Should fetch only incomplete tasks
[] Should sort tasks by description/completed/createdAt/updatedAt
[] Should fetch page of tasks
