const { expect } = require("@jest/globals");
const createcourse = require("./CourseCreate");

test("properly adds two number", () => {
  expect(sum(1, 2)).toBe(3);
});
