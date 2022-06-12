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

  describe("When the thunk is invoked with a filter style, a sort order purchase and a page, and no artworks are returnd", () => {
    const filterStyle = "minilamism";
    const sortOrderPurchase = "1";
    const page = "13";
    test("Then the dispatch function will be called", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: {}, status: 500 });
      const dispatch = jest.fn();

      const thunk = loadArtworksThunk(filterStyle, sortOrderPurchase, "", page);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("When the thunk is invoked with a sort order purchase and a page, and no artworks are returnd", () => {
  const sortOrderPurchase = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: {}, status: 500 });
    const dispatch = jest.fn();

    const thunk = loadArtworksThunk("", sortOrderPurchase, "", page);

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});

describe("When the thunk is invoked with a filter style, a sort rent purchase and a page, and no artworks are returnd", () => {
  const filterStyle = "minilamism";
  const sortRentPurchase = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: {}, status: 500 });
    const dispatch = jest.fn();

    const thunk = loadArtworksThunk(filterStyle, "", sortRentPurchase, page);

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});

describe("When the thunk is invoked with a  sort rent purchase and a page, and no artworks are returnd", () => {
  const sortRentPuchase = "1";
  const page = "13";

  test("Then the dispatch function will be called", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: {}, status: 500 });
    const dispatch = jest.fn();

    const thunk = loadArtworksThunk("", "", sortRentPuchase, page);

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalled();
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
