import axios from "axios";
import { artworkMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import { loadartworksActionCreator } from "../features/artworkSlice";
import { loadArtworksThunk } from "./artworkThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadArtworks function thunk", () => {
  describe("When invoked passing only a page parameter", () => {
    const page = "13";
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { artworks: [] }, status: 200 });

      const loadAction = loadartworksActionCreator(artworkMock);
      const thunk = loadArtworksThunk("", "", "", page);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(loadAction);
    });
  });
});

describe("When invoked passing a filter style parmeter, a sort order purchase parameter and a page parameter", () => {
  const filterStyle = "minilamism";
  const sortOrderPurchase = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    const dispatch = jest.fn();

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { artworks: [] }, status: 200 });

    const loadAction = loadartworksActionCreator(artworkMock);
    const thunk = loadArtworksThunk(filterStyle, sortOrderPurchase, "", page);

    await thunk(dispatch);

    expect(dispatch).not.toHaveBeenCalledWith(loadAction);
  });

  describe("When invoked passing a sort order purchase parameter and a page parameter", () => {
    const sortOrderPurchase = "1";
    const page = "13";
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { artworks: [] }, status: 200 });

      const loadAction = loadartworksActionCreator(artworkMock);
      const thunk = loadArtworksThunk("", sortOrderPurchase, "", page);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(loadAction);
    });

    describe("When invoked passing a filter style parmeter, a sort order rent parameter and a page parameter", () => {
      const filterStyle = "minilamism";
      const sortOrderRent = "1";
      const page = "13";
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        axios.get = jest
          .fn()
          .mockResolvedValue({ data: { artworks: [] }, status: 200 });

        const loadAction = loadartworksActionCreator(artworkMock);
        const thunk = loadArtworksThunk(filterStyle, "", sortOrderRent, page);

        await thunk(dispatch);

        expect(dispatch).not.toHaveBeenCalledWith(loadAction);
      });

      describe("When invoked and no arworks received", () => {
        test("Then the dispatch function will be called", async () => {
          const dispatch = jest.fn();

          axios.get = jest
            .fn()
            .mockResolvedValue({ data: { artworks: [] }, status: 200 });

          const thunk = loadArtworksThunk();

          await thunk(dispatch);

          expect(dispatch).toHaveBeenCalled();
        });
      });
    });

    describe("When invoked passing  a sort order rent parameter and a page parameter", () => {
      const sortOrderRent = "1";
      const page = "13";
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        axios.get = jest
          .fn()
          .mockResolvedValue({ data: { artworks: [] }, status: 200 });

        const loadAction = loadartworksActionCreator(artworkMock);
        const thunk = loadArtworksThunk("", "", sortOrderRent, page);

        await thunk(dispatch);

        expect(dispatch).not.toHaveBeenCalledWith(loadAction);
      });
    });
  });
});
