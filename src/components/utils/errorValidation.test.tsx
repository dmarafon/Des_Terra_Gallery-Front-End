import {
  checkStatusCode,
  errorLoginValidation,
  errorRegistrationValidation,
} from "./errorValidation";

describe("Given a errorLoginValidation function", () => {
  describe("When its invoked passing an object with the necessary properties", () => {
    test("Then it should return the string message in the object 'Test Message', minus the last letter, as 'Test Messag", () => {
      const expectedErrorString = "Test Messag";
      const expectedErrorSent = {
        response: { data: { msg: "Test Message", message: "" } },
      };

      const errorValidation = errorLoginValidation(expectedErrorSent);

      expect(errorValidation).toBe(expectedErrorString);
    });
  });
});

describe("When its invoked passing an object with the message that starts with 'Email or pa'", () => {
  test("Then it should return the string message 'Email Invalid'", () => {
    const expectedErrorString = "Email Invalid";
    const expectedErrorSent = {
      response: { data: { message: "Email or pa" } },
    };

    const errorValidation = errorLoginValidation(expectedErrorSent);

    expect(errorValidation).toBe(expectedErrorString);
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

describe("Given a checkStatusCode function", () => {
  describe("When its invoked passing an api response status 200 and a string containing the id number '1234'", () => {
    test("Then it should dispatch an action to delete an artwork", async () => {
      const dispatch = jest.fn();
      const artworkId = "1234";
      const status = 200;

      const checkStatus = checkStatusCode(status, artworkId);

      await checkStatus(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When its invoked passing an api response status 400 and a string containing the id number '1234'", () => {
    test("Then it should dispatch an action to send the error message", async () => {
      const dispatch = jest.fn();
      const artworkId = "1234";
      const status = 400;

      const checkStatus = checkStatusCode(status, artworkId);

      await checkStatus(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
