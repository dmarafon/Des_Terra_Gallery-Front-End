describe("Give a ArtworkBuy Page ", () => {
  describe("When the user Testuser logs in and navigates to the Buy artwork page, clicks in one artwork, then in Buy or Rent and finally presses the Buy button", () => {
    const email = "testuser@test.com";
    const password = "testtest";
    it("Then it will open a modal confirming the purchase", () => {
      cy.visit(
        "https://daniell-marafon-front-final-project-202204-bcn.netlify.app/"
      );

      cy.visit("users/login");

      cy.get("label").contains(/email/i).type(email);
      cy.get("label")
        .contains(/password/i)
        .type(`${password}{enter}`);
      cy.wait(500);

      cy.visit("artwork/1");

      cy.get(".artwork__container > a").first().click();

      cy.wait(1000);

      cy.get("button")
        .contains(/buy or rent/i)
        .click();

      cy.get("button").contains(/buy/i).click();

      cy.get("#react-portal-modal-container").should(
        "contain.text",
        "Thank you for Buying this work of Art! In 24 hours we will get in touch to discuss the delivery details"
      );
    });
  });
});
