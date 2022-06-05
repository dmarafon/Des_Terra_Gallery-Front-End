import { server } from "../../mocks/server";
import axios from "axios";
import { loadArtworksThunk } from "./artworkThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadArtworksThunk", () => {
  describe("When invoked and a error thrown", () => {
    test("Then the dispatch function will be called", async () => {
      jest.spyOn(axios, "get").mockImplementation(() => {
        throw new Error();
      });
      const dispatch = jest.fn();

      const thunk = loadArtworksThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
