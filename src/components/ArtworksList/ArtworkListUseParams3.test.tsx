import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";
import ArtworkList from "./ArtworksList";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    sortOrderRent: "1",
    page: "1",
  }),
  useRouteMatch: () => ({
    url: "/artwork/page/filterStyle/sortOrderPurchase=sortOrderPurchase",
  }),
}));

describe("Given a ArtworkList component", () => {
  describe("When it's invoked with a sort rent purchase in the navigation paramaters", () => {
    const sortOrderRent = "1";
    const page = "13";

    test("Then it should dispatch de loadArwtorksThunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkList />
          </Provider>
        </BrowserRouter>
      );

      const dispatch = jest.fn();

      const loadArtworks = loadArtworksThunk("", "", sortOrderRent, page);

      loadArtworks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
