import { server } from "../../mocks/server";
import axios from "axios";
import {
  deleteArtworkThunk,
  loadArtworksThunk,
  loadUserArtworks,
} from "./artworkThunks";

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

describe("Given the deleteArtworks function thunk", () => {
  describe("When invoked and a error thrown", () => {
    test("Then the dispatch function will be called", async () => {
      const artworkId = "1234";

      jest.spyOn(axios, "delete").mockImplementation(() => {
        throw new Error();
      });
      const dispatch = jest.fn();

      const thunk = deleteArtworkThunk(artworkId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the loadUserArtworks", () => {
  describe("When invoked and a error thrown", () => {
    test("Then the dispatch function will be called", async () => {
      jest.spyOn(axios, "get").mockImplementation(() => {
        throw new Error();
      });

      const userId = "1234";
      const dispatch = jest.fn();

      const thunk = loadUserArtworks(userId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
