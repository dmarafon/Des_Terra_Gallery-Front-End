import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ArtworksPage from "./ArtworksPage";

describe("Given a ArtworkPage", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons and 1 image and a loading modal", async () => {
      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworksPage />
          </Provider>
        </BrowserRouter>
      );

      const elementReactPortal = screen.getByTestId("custom-element");

      const displayImage = screen.getAllByRole("img");

      expect(displayImage).toHaveLength(totalImages);

      expect(elementReactPortal).toBeTruthy();

      elementReactPortal.remove();
    });
  });
});
