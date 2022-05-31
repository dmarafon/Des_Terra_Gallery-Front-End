import { server } from "./mocks/server";
import { loginUserThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "123" }));

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = loginUserThunk({
        password: "1234",
        email: "test@test.com",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
