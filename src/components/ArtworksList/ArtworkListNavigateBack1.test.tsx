import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
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
  describe("When it's invoked with artworks in the store and a pagination as well and the user clicks in the next button", () => {
    test("Then it should dispatch de loadArwtorksThunk", async () => {
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
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkList />
          </Provider>
        </BrowserRouter>
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
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
