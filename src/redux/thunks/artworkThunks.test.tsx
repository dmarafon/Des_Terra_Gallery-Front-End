import axios from "axios";
import { artworkMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import { loadartworksActionCreator } from "../features/artworkSlice";
import {
  createArtworkThunk,
  deleteArtworkThunk,
  editArtworkThunk,
  loadArtworksThunk,
  loadUserArtworks,
} from "./artworkThunks";

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
        .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

      const loadAction = loadartworksActionCreator(artworkMock);
      const thunk = loadArtworksThunk("", "", "", page);

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

describe("When invoked passing a filter style parmeter, a sort order purchase parameter and a page parameter", () => {
  const filterStyle = "minilamism";
  const sortOrderPurchase = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    const dispatch = jest.fn();

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

    const loadAction = loadartworksActionCreator(artworkMock);
    const thunk = loadArtworksThunk(filterStyle, sortOrderPurchase, "", page);

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

describe("When invoked passing a sort order purchase parameter and a page parameter", () => {
  const sortOrderPurchase = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    const dispatch = jest.fn();

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

    const loadAction = loadartworksActionCreator(artworkMock);
    const thunk = loadArtworksThunk("", sortOrderPurchase, "", page);

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

describe("When invoked passing a filter style parmeter, a sort order rent parameter and a page parameter", () => {
  const filterStyle = "minilamism";
  const sortOrderRent = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    const dispatch = jest.fn();

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

    const loadAction = loadartworksActionCreator(artworkMock);
    const thunk = loadArtworksThunk(filterStyle, "", sortOrderRent, page);

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

describe("When invoked passing  a sort order rent parameter and a page parameter", () => {
  const sortOrderRent = "1";
  const page = "13";
  test("Then the dispatch function will be called", async () => {
    const dispatch = jest.fn();

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { artworks: artworkMock }, status: 200 });

    const loadAction = loadartworksActionCreator(artworkMock);
    const thunk = loadArtworksThunk("", "", sortOrderRent, page);

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

describe("Given a loadUserArtworks function thunk", () => {
  describe("When it's called with an id from an artwork and get a 200 status response", () => {
    test("Then it should dispatch the deleteArtworkActionCreator passing the same id", async () => {
      const dispatch = jest.fn();
      const userId = "123456";

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      const thunk = loadUserArtworks(userId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and no artworks received", () => {
    test("Then the dispatch function will be called", async () => {
      const artworkId = "123456";

      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: { artworkauthor: [] },
        status: 200,
      });

      const thunk = loadUserArtworks(artworkId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and 1 artwork received", () => {
    test("Then the dispatch function will be called", async () => {
      const artworkId = "123456";

      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: { artworkauthor: ["1"] },
        status: 200,
      });

      const thunk = loadUserArtworks(artworkId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the createArtworkThunk function", () => {
  describe("When  is invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = createArtworkThunk(artworkMock[0]);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("Given the editArtworkThunk function", () => {
    describe("When  is invoked", () => {
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        const thunk = editArtworkThunk(artworkMock[0], artworkMock[0].id);
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
