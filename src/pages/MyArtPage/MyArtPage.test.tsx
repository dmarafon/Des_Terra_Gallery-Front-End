import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { artworkMock } from "../../mocks/artworkMock";
import store from "../../redux/store/store";
import MyArtPage from "./MyArtPage";

describe("Given a MyArtPage", () => {
  describe("When it's invoked with 3 art item in the store", () => {
    const loadUserArtworks = {
      type: "userArtworks/loadUserArtworks",
      payload: artworkMock,
    };

    store.dispatch(loadUserArtworks);

    test("Then it will render 3 social media svg icons, 1 logo image and 6 svg icon buttons images, 2 for each artwork", async () => {
      const totalSocialMediaImages = 4;

      const totalIconButtons = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtPage />
          </Provider>
        </BrowserRouter>
      );

      const elementReactPortal = screen.getAllByTestId("myartwork-test");

      const displayImage = screen.getAllByRole("img");

      expect(displayImage).toHaveLength(totalSocialMediaImages);

      expect(elementReactPortal).toHaveLength(totalIconButtons);
    });
  });
});
