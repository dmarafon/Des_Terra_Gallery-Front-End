import axios from "axios";
import { artworkMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import { loadartworksActionCreator } from "../features/artworkSlice";
import { loadArtworksThunk } from "./artworkThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadArtworksThunk", () => {
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
