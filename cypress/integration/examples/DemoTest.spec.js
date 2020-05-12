describe("My first test case", () => {
  it("Navigate to the website", () => {
    // cy.visit("http://executeautomation.com/demosite/Login.html");
    cy.visit(Cypress.env("baseUrl"));
    console.log(Cypress.env("lorem"));
  });

  it("Login to app", () => {
    cy.get(":nth-child(1) > input").type("admin");
    cy.get(":nth-child(2) > input").type("password");
    cy.get(":nth-child(3) > input").click();
  });

  it("Enter user details", () => {
    cy.get("#TitleId").select("Ms.");
    cy.get("#Initial").type("KK");
    cy.get("#FirstName").type("KarthiK");
    cy.get("input[name=Hindi]").click();
  });
});
