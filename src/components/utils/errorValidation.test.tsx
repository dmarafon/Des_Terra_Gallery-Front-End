import {
  errorLoginValidation,
  errorRegistrationValidation,
} from "./errorValidation";

describe("Given a errorLoginValidation function", () => {
  describe("When its invoked passing an object with the necessary properties", () => {
    test("Then it should return the string message in the object 'Test Message', minus the last letter, as 'Test Messag", () => {
      const expectedErrorString = "Test Messag";
      const expectedErrorSent = {
        response: { data: { msg: "Test Message" } },
      };

      const errorValidation = errorLoginValidation(expectedErrorSent);

      expect(errorValidation).toBe(expectedErrorString);
    });
  });
});

describe("Given a errorRegistrationValidation function", () => {
  describe("When its invoked passing an object with the necessary properties", () => {
    test("Then it should return the string message in the object 'Test Message', minus the last 4 letters, as 'Test Messag", () => {
      const expectedErrorString = "Test Mes";
      const expectedErrorSent = {
        response: { data: { message: "Test Message" } },
      };

      const errorValidation = errorRegistrationValidation(expectedErrorSent);

      expect(errorValidation).toBe(expectedErrorString);
    });
  });
});
