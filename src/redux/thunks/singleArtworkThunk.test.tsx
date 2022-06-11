import axios from "axios";
import { artworkMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import { loadSingleArtworkActionCreator } from "../features/singleArtworkSlice";
import { loadSingleArtworkThunk } from "./singleArtworkThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadSingleArtworkThunk function thunk", () => {
  const testArtworkId = "12345";

  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: { singleArtwork: artworkMock[0] },
        status: 200,
      });

      const loadAction = loadSingleArtworkActionCreator(artworkMock[0]);
      const thunk = loadSingleArtworkThunk(testArtworkId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });

    describe("When invoked and no arworks received", () => {
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

        const thunk = loadSingleArtworkThunk(testArtworkId[0]);

        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
