import { loginUserThunk, registerUserThunk } from "./userThunks";
import { server } from "../../mocks/server";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({
    id: "1234",
    email: "test@test.com",
    firstName: "testName",
  })
);

describe("Given the loginUserThunk", () => {
  describe("When invoked and a error thrown", () => {
    const userTest = {
      password: "1234",
      email: "test@test.com",
    };
    test("Then the dispatch function will be called", async () => {
      jest.spyOn(axios, "post").mockImplementation(() => {
        throw new Error();
      });
      const dispatch = jest.fn();

      const thunk = loginUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the registerThunk", () => {
  describe("When invoked and a error thrown", () => {
    jest.spyOn(axios, "post").mockImplementation(() => {
      throw new Error();
    });

    const userTest = {
      password: "1234",
      email: "test@test.com",
    };
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = registerUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
