import { loginUserThunk, registerUserThunk } from "./userThunks";
import { server } from "../../mocks/server";

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
  const userTest = {
    password: "1234",
    email: "test@test.com",
  };

  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = loginUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the registerUserThunk", () => {
  describe("When RegisterUserThunk is invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        firstname: "testName",
        surname: "testsurnam",
        email: "test@supertest.com",
        password: "1234",
        webpage: "http://www.mypage.com",
        address: "carrer de test, 13",
        apartmentdoorstair: "1 - 1",
        city: "testcity",
        phonenumber: "+11111111111",
        artist: "true",
        image: "test.jpg",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
