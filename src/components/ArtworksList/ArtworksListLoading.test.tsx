import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ArtworksList from "./ArtworksList";

describe("Given a ArtworkList component", () => {
  describe("When it's invoked and the loading modal action is in the store", () => {
    test("Then it should render a loading modal with a react portal dom", async () => {
      await waitFor(() => {
        const loadingAction = {
          type: "ui/loading",
        };
        store.dispatch(loadingAction);
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworksList />
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
