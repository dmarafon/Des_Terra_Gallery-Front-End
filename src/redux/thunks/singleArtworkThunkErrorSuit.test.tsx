import { server } from "../../mocks/server";
import axios from "axios";

import { loadSingleArtworkThunk } from "./singleArtworkThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the singleArtworkThunk", () => {
  describe("When invoked and a error thrown", () => {
    test("Then the dispatch function will be called", async () => {
      const artworkId = "12345";

      jest.spyOn(axios, "get").mockImplementation(() => {
        throw new Error();
      });

      const dispatch = jest.fn();

      const thunk = loadSingleArtworkThunk(artworkId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
