import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailArtwork from "./DetailArtwork";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    artworkId: "123456",
  }),
  useRouteMatch: () => ({ url: "/artwork/artworkId" }),
}));

describe("Given a DetailArtwork component function", () => {
  describe("When it's rendered with given an id of an existing artwork in it's address", () => {
    test("Then the dispatch should be invoked to fetch that artwork", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailArtwork />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  test("Then the dispatch should be invoked to fetch that artwork and the loading modal will be invoked while waiting for the API response", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DetailArtwork />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      const uIaction = {
        type: "ui/loading",
      };

      store.dispatch(uIaction);
    });

    const element = screen.getByTestId("custom-element");

    expect(mockDispatch).toHaveBeenCalled();

    expect(element).toBeInTheDocument();
  });
});
