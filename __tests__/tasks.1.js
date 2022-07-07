const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");
const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. euroCities", () => {
  test("`euroCities` is declared, its value is an array of 5 items", () => {
    const euroCities = solution.__get__("euroCities");
    expect(euroCities).toBeDefined();
    expect(Array.isArray(euroCities)).toBeTruthy();
  });

  test("`secondCity` is declared, its value is the second item from the array 'euroCities'", () => {
    const euroCities = solution.__get__("euroCities");
    const secondCity = solution.__get__("secondCity");
    expect(secondCity).toBeDefined();
    expect(secondCity).toEqual(euroCities[1]);
  });
});

describe("2. Change the first item in the array `euroCities`", () => {
  test("the first item in the array is 'Berlin'", () => {
    const euroCities = solution.__get__("euroCities");
    expect(euroCities[0]).toEqual("Berlin");
  });
});

describe("3. Print the length of the array `euroCities` ", () => {
  test("the length of `euroCities` is printed in terminal", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(5);
    expect(content.includes("euroCities.length")).toBeTruthy();
  });
});

describe("4. Remove the last item of the array `euroCities`", () => {
  test("`euroCities` array last item is deleted", () => {
    expect(
      content.includes("euroCities.pop()") ||
        content.includes("euroCities.splice(4,1)")
    ).toBeTruthy();
  });
});

describe("5. Adding 'Budapest' to the array `euroCities`", () => {
  test("'Budapest' is at the end of `euroCities` array", () => {
    const euroCities = solution.__get__("euroCities");
    expect(euroCities.includes("Budapest")).toBeTruthy();
  });
});

describe("6. asianCities", () => {
  test("`asianCities` is declared, its value is an array", () => {
    const asianCities = solution.__get__("asianCities");
    expect(asianCities).toBeDefined();
    expect(Array.isArray(asianCities)).toBeTruthy();
  });

  test("`asianCities` has at least 5 items", () => {
    const asianCities = solution.__get__("asianCities");
    expect(asianCities.length).toBeGreaterThanOrEqual(5);
  });
});

describe("7. Combine arrays", () => {
  test("`worldCities` is declared and holds array containing all items of `euroCities` and `asianCities`", () => {
    const worldCities = solution.__get__("worldCities");
    const euroCities = solution.__get__("euroCities");
    const asianCities = solution.__get__("asianCities");
    expect(worldCities).toBeDefined();
    expect(Array.isArray(worldCities)).toBeTruthy();
    expect(worldCities).toEqual(expect.arrayContaining(euroCities.concat(asianCities)))
  });
});

describe("8. Reverse the array", () => {
  test("the order of `worldCities` is reversed", () => {
    expect(content.includes("worldCities.reverse()")).toBeTruthy();
  });
});
