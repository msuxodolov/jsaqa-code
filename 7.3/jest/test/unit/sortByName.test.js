const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test back suit", () => {
  it("The titles of the books should be sorted in ascending and descending order", () => {
    expect(
      sorting.sortByName([
        "Волшебник изумрудного города",
        "Властелин Колец",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test negative suit", () => {
  it("Reproducing an error", () => {
    const inputArray = [1, 'Идиот'];
    expect(() => sortByName(inputArray)).toThrowError();
  });
});

describe("an empty array is a negative test", () => {
  it("empty array", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});

describe("recurring books", () => {
  it("The books are sorted by the same titles", () => {
    expect(
      sorting.sortByName([
        "Идиот",
        "Война и мир",
        "Война и мир",
      ])
    ).toEqual([
      "Война и мир",
      "Война и мир",
      "Идиот",
    ]);
  });
});

