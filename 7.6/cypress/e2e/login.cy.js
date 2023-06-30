describe("When user is on login page, user", () => {
  it("Should be able to open the main page", () => {
    // проверка отображения страницы
    cy.visit("/"); // открыть ссылку, это сокращённая версия (см ссылку в cypress.json)
    // cy.get('.text-light > .ml-2'); // получаем селектор элемента
    cy.contains("Books list"); // получаем текст из элемента
  });

  it("Should be able to login with correct email and password", () => {
    cy.visit("/");
    cy.login("test@test.com", "test"); // кастомная команда
    cy.contains("Добро пожаловать"); // команда работает как assertion
  });

  it("Should not be able to login with empty email", () => {
    cy.visit("/");
    cy.login(" ", "test"); // кастомная команда
    // cy.get('#mail').should("have.class", ":invalid"); // у любого пустого поля которое должно быть заполнено перед логином
    // появляется класс invalid по умолчанию. Если не срабатывает то это псевдокласс не является классом в элементе.
    cy.get("#mail").then(($el) => cy.log($el));
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false"); // get-запрос вернул return (какой-то массив элементов),
    // у 1го элемента этого массива мы вызываем функцию checkValidity и добавляем assertion. False потому что в консоле элемент возвращает false
  });
});
