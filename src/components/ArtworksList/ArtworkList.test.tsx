import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";
import ArtworkList from "./ArtworksList";

describe("Given a ArtworkList component", () => {
  describe("When it's invoked", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: () => ({
        filterStyle: "geometric",
        sortOrderPurchase: "1",
        page: "1",
      }),
      useRouteMatch: () => ({
        url: "/artwork/page/filterStyle/sortOrderPurchase=sortOrderPurchase",
      }),
    }));

    const filterStyle = "minilamism";
    const sortOrderPurchase = "1";
    const page = "13";

    test("Then it should create an unordered list element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkList />
          </Provider>
        </BrowserRouter>
      );

      const dispatch = jest.fn();

      const loadArtworks = loadArtworksThunk(
        filterStyle,
        sortOrderPurchase,
        "",
        page
      );

      loadArtworks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
