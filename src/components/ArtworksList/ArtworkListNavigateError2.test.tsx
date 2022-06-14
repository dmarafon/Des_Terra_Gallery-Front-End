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
  describe("When it's invoked and an error occours while loading the main artwork list", () => {
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
        <MemoryRouter initialEntries={["/artwork/1"]}>
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
            totalPage: 3,
            currentPage: 1,
          },
        };
        store.dispatch(paginationAction);
      });

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/apiResponse",
          payload: "Unknown Error",
        };
        store.dispatch(finisheLoading);
      });
      const element = screen.getByTestId("modal-button");

      userEvent.click(element);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith("/home");
      });
    });
  });
});
