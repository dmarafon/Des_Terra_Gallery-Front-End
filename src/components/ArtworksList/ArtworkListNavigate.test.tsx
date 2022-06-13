import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { loadArtworksActionMock } from "../../mocks/artworkMock";
import { server } from "../../mocks/server";
import store from "../../redux/store/store";
import ArtworkList from "./ArtworksList";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockDispatch,
}));

describe("Given a ArtworkList component", () => {
  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back button from a query by filter style and sort purchase order", () => {
    test("Then it should return from the page 2 to tbe page 1", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: "3",
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter
          initialEntries={["/artwork/2/geometric/sortOrderPurchase=1"]}
        >
          <Routes>
            <Route
              path="/artwork/:page/:filterStyle/sortOrderPurchase=:sortOrderPurchase"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("back-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/1/geometric/sortOrderPurchase=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back button from a query by filter style and sort rent order", () => {
    test("Then it should return from the page 2 to tbe page 1", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/geometric/sortOrderRent=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/:filterStyle/sortOrderRent=:sortOrderRent"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("back-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/1/geometric/sortOrderRent=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back button from a query by sort rent order", () => {
    test("Then it should return from the page 2 to tbe page 1", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/sortOrderRent=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/sortOrderRent=:sortOrderRent"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("back-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith("/artwork/1/sortOrderRent=1");
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back button from a query by sort purchase order", () => {
    test("Then it should return from the page 2 to tbe page 1", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/sortOrderPurchase=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/sortOrderPurchase=:sortOrderPurchase"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("back-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/1/sortOrderPurchase=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back button from a query without parameters", () => {
    test("Then it should return from the page 2 to tbe page 1", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/"]}>
          <Routes>
            <Route
              path="/artwork/:page/"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("back-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith("/artwork/1");
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the back forward from a query by filter style and sort purchase order", () => {
    test("Then it should return from the page 2 to tbe page 3", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter
          initialEntries={["/artwork/2/geometric/sortOrderPurchase=1"]}
        >
          <Routes>
            <Route
              path="/artwork/:page/:filterStyle/sortOrderPurchase=:sortOrderPurchase"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("forward-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/3/geometric/sortOrderPurchase=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the forward button from a query by filter style and sort rent order", () => {
    test("Then it should return from the page 2 to tbe page 3", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/geometric/sortOrderRent=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/:filterStyle/sortOrderRent=:sortOrderRent"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("forward-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/3/geometric/sortOrderRent=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the forward button from a query by sort rent order", () => {
    test("Then it should return from the page 2 to tbe page 3", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/sortOrderRent=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/sortOrderRent=:sortOrderRent"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("forward-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith("/artwork/3/sortOrderRent=1");
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the forward button from a query by sort purchase order", () => {
    test("Then it should return from the page 2 to tbe page 3", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/sortOrderPurchase=1"]}>
          <Routes>
            <Route
              path="/artwork/:page/sortOrderPurchase=:sortOrderPurchase"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("forward-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          "/artwork/3/sortOrderPurchase=1"
        );
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the forward button from a query without parameters", () => {
    test("Then it should return from the page 2 to tbe page 3", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/2/"]}>
          <Routes>
            <Route
              path="/artwork/:page/"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const element = screen.getByTestId("forward-button");
      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith("/artwork/3");
      });
    });
  });

  describe("When it's invoked with artworks in the store and a pagination as well and the user arrive to the last page", () => {
    test("Then the forward button shouldn't be enabled", async () => {
      await waitFor(() => {
        store.dispatch(loadArtworksActionMock);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: "2",
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      render(
        <MemoryRouter initialEntries={["/artwork/3/"]}>
          <Routes>
            <Route
              path="/artwork/:page/"
              element={
                <Provider store={store}>
                  <ArtworkList />
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      await waitFor(() => {
        const paginationAction = {
          type: "pagination/countPagination",
          payload: {
            totalPage: "3",
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });
      const element = screen.getByTestId("forward-button");

      await waitFor(() => {
        expect(element).not.toBeDisabled();
      });
    });
  });
});
