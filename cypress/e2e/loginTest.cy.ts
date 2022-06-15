describe("Give a Login Page ", () => {
  describe("When the user Testuser logs in", () => {
    const email = "testuser@test.com";
    const password = "testtest";
    it("Then it will be automatically directed to the home page and it will show on the top right 'Welcome' and the user name", () => {
      cy.visit(
        "https://daniell-marafon-front-final-project-202204-bcn.netlify.app/"
      );

      cy.visit("users/login");

      cy.get("label").contains(/email/i).type(email);
      cy.get("label")
        .contains(/password/i)
        .type(`${password}{enter}`);

      cy.get("div").should("contain.text", "Welcome");
      cy.get("p").should("contain.text", "testuser");
    });
  });
});
