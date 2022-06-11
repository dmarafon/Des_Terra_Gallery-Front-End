import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
});
