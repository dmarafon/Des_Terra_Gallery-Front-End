import axios from "axios";
import { artworkMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import { loadartworksActionCreator } from "../features/artworkSlice";
import { deleteArtworkThunk, loadArtworksThunk } from "./artworkThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadArtworks function thunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

      const loadAction = loadartworksActionCreator(artworkMock);
      const thunk = loadArtworksThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });

    describe("When invoked and no arworks received", () => {
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

        const thunk = loadArtworksThunk();

        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});

describe("Given a deleteArtwork function thunk", () => {
  describe("When it's called with an id from an artwork and get a 200 status response", () => {
    test("Then it should dispatch the deleteArtworkActionCreator passing the same id", async () => {
      const dispatch = jest.fn();
      const artworkId = "123456";

      axios.delete = jest.fn().mockResolvedValue({ status: 200 });

      const thunk = deleteArtworkThunk(artworkId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
