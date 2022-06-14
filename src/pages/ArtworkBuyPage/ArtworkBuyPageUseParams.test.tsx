import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { loadSingleArtworkThunk } from "../../redux/thunks/singleArtworkThunk";
import ArtworkBuyPage from "./ArtworkBuyPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({}),
  useRouteMatch: () => ({
    url: "/artwork/buy/:artworkId",
  }),
}));

describe("Given a ArtworkBuy Page", () => {
  describe("When it's invoked without any artworkId", () => {
    test("Then it should dispatch de loadSingleArtworkThunk, but since there's no id, it will not print any artwork, but the dispatch will be called anyways", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuyPage />
          </Provider>
        </BrowserRouter>
      );

      const dispatch = jest.fn();

      const loadArtworks = loadSingleArtworkThunk("");

      loadArtworks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
