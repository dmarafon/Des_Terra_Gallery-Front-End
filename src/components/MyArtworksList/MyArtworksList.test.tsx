import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { artworkMock } from "../../mocks/artworkMock";
import store from "../../redux/store/store";
import MyArtworksList from "./MyArtworksList";

describe("Given a MyArtworkList component", () => {
  describe("When it's invoked", () => {
    test("Then it should create an unordered list element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtworksList />
          </Provider>
        </BrowserRouter>
      );

      const artworkListElement = screen.getByRole("list");

      expect(artworkListElement).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a list of artworks in the store", () => {
    const action = {
      type: "userArtworks/loadUserArtworks",
      payload: artworkMock,
    };

    test("Then it should create the same number of lists equal to the artworks in the store", () => {
      store.dispatch(action);

      const totalNumberOfLists = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtworksList />
          </Provider>
        </BrowserRouter>
      );

      const artworkListElement = screen.getAllByRole("listitem");

      expect(artworkListElement).toHaveLength(totalNumberOfLists);
    });
  });

  describe("When it's invoked and the loading modal action is in the sore", () => {
    const loadingAction = {
      type: "ui/loading",
    };

    test("Then it should render a loading modal with a react portal dom", async () => {
      store.dispatch(loadingAction);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtworksList />
          </Provider>
        </BrowserRouter>
      );

      const elementReactPortal = screen.getByTestId("custom-element");

      await waitFor(() => {
        expect(elementReactPortal).toBeInTheDocument();
      });
    });
  });
});
