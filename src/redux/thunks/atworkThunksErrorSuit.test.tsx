import { server } from "../../mocks/server";
import axios from "axios";
import {
  createArtworkThunk,
  deleteArtworkThunk,
  editArtworkThunk,
  loadArtworksThunk,
  loadUserArtworks,
} from "./artworkThunks";
import { artworkMock } from "../../mocks/artworkMock";

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

describe("Given the createArtwork", () => {
  describe("When invoked and a error thrown", () => {
    jest.spyOn(axios, "post").mockImplementation(() => {
      throw new Error();
    });

    const artworTest = artworkMock[0];
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = createArtworkThunk(artworTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("Given the editArtwork", () => {
    describe("When invoked and a error thrown", () => {
      jest.spyOn(axios, "put").mockImplementation(() => {
        throw new Error();
      });

      const artworTest = artworkMock[0];
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        const thunk = editArtworkThunk(artworTest, artworTest.id);
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
