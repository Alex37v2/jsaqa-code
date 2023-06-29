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

  it("Equal Books names don`t should be sorted", () => {
    expect(
      sorting.sortByName([
        "Унесенные ветром",
        "Унесенные ветром",
      ])
    ).toEqual([
        "Унесенные ветром",
        "Унесенные ветром",
    ]);
  }); 
});
